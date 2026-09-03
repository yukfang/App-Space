const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { STORAGE_PATH } = require('../constants');

const MAX_FILE_BYTES = 25 * 1024 * 1024;
const ROOM_NAME_RE = /^[\p{L}\p{N}_\- ]{1,128}$/u;

class RoomStore {
    constructor() {
        this.rooms = new Map();
        this.baseDir = path.join(STORAGE_PATH, 'rooms');
    }

    sanitizeRoomName(name) {
        if (typeof name !== 'string') return null;
        const trimmed = name.trim();
        if (!ROOM_NAME_RE.test(trimmed)) return null;
        return trimmed;
    }

    roomDir(name) {
        return path.join(this.baseDir, name);
    }

    statePath(name) {
        return path.join(this.roomDir(name), 'state.json');
    }

    getRoom(name) {
        let room = this.rooms.get(name);
        if (!room) {
            let messages = [];
            try {
                const raw = fs.readFileSync(this.statePath(name), 'utf8');
                messages = JSON.parse(raw);
            } catch (e) { /* no persisted state */ }
            room = {
                name,
                messages: Array.isArray(messages) ? messages : [],
                clients: new Set(),
            };
            this.rooms.set(name, room);
        }
        return room;
    }

    persist(name) {
        const room = this.getRoom(name);
        const dir = this.roomDir(name);
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        const tmp = this.statePath(name) + '.tmp';
        fs.writeFileSync(tmp, JSON.stringify(room.messages));
        fs.renameSync(tmp, this.statePath(name));
    }

    broadcast(name, ev, payload) {
        const room = this.getRoom(name);
        for (const client of room.clients) {
            client.send(ev, payload);
        }
    }

    addMessage(name, message) {
        const room = this.getRoom(name);
        message.id = message.id || crypto.randomUUID();
        message.createdAt = message.createdAt || Date.now();
        room.messages.push(message);
        this.persist(name);
        this.broadcast(name, 'message', { op: 'add', message });
        return message;
    }

    updateMessage(name, id, patch) {
        const room = this.getRoom(name);
        const msg = room.messages.find((m) => m.id === id);
        if (!msg) return null;
        Object.assign(msg, patch, { updatedAt: Date.now() });
        this.persist(name);
        this.broadcast(name, 'message', { op: 'update', message: msg });
        return msg;
    }

    deleteMessage(name, id) {
        const room = this.getRoom(name);
        const idx = room.messages.findIndex((m) => m.id === id);
        if (idx === -1) return false;
        room.messages.splice(idx, 1);
        this.persist(name);
        this.broadcast(name, 'message', { op: 'delete', message: { id } });
        return true;
    }

    findFile(name, fileId) {
        const room = this.getRoom(name);
        const url = `/room/${name}/files/${fileId}`;
        return room.messages.find((m) => (m.type === 'image' || m.type === 'file') && m.url === url) || null;
    }

    saveFile(name, fileId, buffer) {
        const dir = path.join(this.roomDir(name), 'files');
        if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
        fs.writeFileSync(path.join(dir, fileId), buffer);
    }

    filePath(name, fileId) {
        return path.join(this.roomDir(name), 'files', fileId);
    }

    addClient(name, res) {
        const room = this.getRoom(name);
        const client = {
            res,
            closed: false,
            send(ev, payload) {
                if (this.closed) return;
                try {
                    this.res.write(`event: ${ev}\n`);
                    this.res.write(`data: ${JSON.stringify(payload)}\n\n`);
                } catch (e) { /* ignore */ }
            },
        };
        client.heartbeat = setInterval(() => {
            if (client.closed) {
                clearInterval(client.heartbeat);
                return;
            }
            try { client.res.write(': ping\n\n'); } catch (e) { /* ignore */ }
        }, 25000);
        room.clients.add(client);
        return client;
    }

    removeClient(name, client) {
        if (!client) return;
        client.closed = true;
        clearInterval(client.heartbeat);
        const room = this.rooms.get(name);
        if (room) room.clients.delete(client);
    }

    getClientCount(name) {
        const room = this.rooms.get(name);
        return room ? room.clients.size : 0;
    }
}

module.exports = { RoomStore, MAX_FILE_BYTES };