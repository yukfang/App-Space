const Router = require('koa-router');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { RoomStore, MAX_FILE_BYTES } = require('./room-store');

const router = new Router({ prefix: '/room' });
const store = new RoomStore();

const MAX_TEXT_LENGTH = 100000;
const FILE_ID_RE = /^[0-9a-f\-]{8,64}$/i;
const KEY_RE = /^[\p{L}\p{N}_\-.]{1,128}$/u;

function sanitizeKey(k) {
    if (typeof k !== 'string') return null;
    const t = k.trim();
    if (t === '.' || t === '..') return null;
    if (!KEY_RE.test(t)) return null;
    return t;
}

function badRequest(ctx, message) {
    ctx.status = 400;
    ctx.body = { error: message };
}

function notFound(ctx, message) {
    ctx.status = 404;
    ctx.body = { error: message };
}

// room page
router.get('/:room_name', async (ctx) => {
    const name = store.sanitizeRoomName(ctx.params.room_name);
    if (!name) return badRequest(ctx, `Invalid room name: ${ctx.params.room_name}`);
    ctx.type = 'text/html; charset=utf-8';
    ctx.body = fs.createReadStream(path.join(__dirname, 'page.html'));
});

// SSE stream
router.get('/:room_name/events', async (ctx) => {
    const name = store.sanitizeRoomName(ctx.params.room_name);
    if (!name) return badRequest(ctx, `Invalid room name: ${ctx.params.room_name}`);

    ctx.respond = false;
    const res = ctx.res;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/event-stream; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('X-Accel-Buffering', 'no');
    res.flushHeaders();

    const room = store.getRoom(name);
    const client = store.addClient(name, res);
    client.send('snapshot', room.messages);

    const close = () => store.removeClient(name, client);
    ctx.req.on('close', close);
    ctx.req.on('error', close);
    res.on('error', close);
});

// add / update / delete a message
async function handleMessages(ctx) {
    const name = store.sanitizeRoomName(ctx.params.room_name);
    if (!name) return badRequest(ctx, `Invalid room name: ${ctx.params.room_name}`);

    const body = ctx.request.body || {};
    const op = body.op;
    const sender = typeof body.sender === 'string' ? body.sender.slice(0, 128) : 'unknown';

    if (op === 'add') {
        const type = body.type;
        const key = (body.key === undefined || body.key === null) ? undefined : sanitizeKey(body.key);
        if (body.key !== undefined && body.key !== null && key === undefined) {
            return badRequest(ctx, `Invalid key: ${body.key}`);
        }
        if (type === 'text') {
            const content = typeof body.content === 'string' ? body.content.trim() : '';
            if (!content) return badRequest(ctx, 'Empty text content');
            if (content.length > MAX_TEXT_LENGTH) return badRequest(ctx, `Text too long (max ${MAX_TEXT_LENGTH} chars)`);
            ctx.body = store.addMessage(name, { key, type, content, sender });
            return;
        }
        if (type === 'image' || type === 'file') {
            const b64 = typeof body.content === 'string' ? body.content : '';
            if (!b64) return badRequest(ctx, 'Missing file data');
            const buffer = Buffer.from(b64, 'base64');
            if (buffer.length === 0) return badRequest(ctx, 'Empty file data');
            if (buffer.length > MAX_FILE_BYTES) return badRequest(ctx, `File too large (max ${Math.round(MAX_FILE_BYTES / 1024 / 1024)}MB)`);
            const fileId = crypto.randomUUID();
            store.saveFile(name, fileId, buffer);
            ctx.body = store.addMessage(name, {
                key,
                type,
                url: `/room/${name}/files/${fileId}`,
                name: typeof body.name === 'string' ? body.name.slice(0, 255) : 'file',
                mime: typeof body.mime === 'string' ? body.mime.slice(0, 128) : 'application/octet-stream',
                size: buffer.length,
                sender,
            });
            return;
        }
        return badRequest(ctx, `Unsupported type: ${type}`);
    }

    if (op === 'update') {
        const id = typeof body.id === 'string' ? body.id : '';
        const content = typeof body.content === 'string' ? body.content.trim() : '';
        if (!id || !content) return badRequest(ctx, 'id and content required');
        if (content.length > MAX_TEXT_LENGTH) return badRequest(ctx, `Text too long (max ${MAX_TEXT_LENGTH} chars)`);
        const message = store.updateMessage(name, id, { content });
        if (!message) return notFound(ctx, `Message not found: ${id}`);
        ctx.body = message;
        return;
    }

    if (op === 'delete') {
        const id = typeof body.id === 'string' ? body.id : '';
        if (!id) return badRequest(ctx, 'id required');
        const ok = store.deleteMessage(name, id);
        if (!ok) return notFound(ctx, `Message not found: ${id}`);
        ctx.body = { ok: true };
        return;
    }

    return badRequest(ctx, `Unsupported op: ${op}`);
}

router.post('/:room_name/messages', handleMessages);
router.put('/:room_name/messages', handleMessages);

// list all messages in a room
router.get('/:room_name/messages', async (ctx) => {
    const name = store.sanitizeRoomName(ctx.params.room_name);
    if (!name) return badRequest(ctx, `Invalid room name: ${ctx.params.room_name}`);
    const room = store.getRoom(name);
    ctx.body = room.messages;
});

// get a single message by key
router.get('/:room_name/messages/:key', async (ctx) => {
    const name = store.sanitizeRoomName(ctx.params.room_name);
    if (!name) return badRequest(ctx, `Invalid room name: ${ctx.params.room_name}`);
    const key = ctx.params.key;
    const room = store.getRoom(name);
    const msg = room.messages.find((m) => m.key === key || m.id === key);
    if (!msg) return notFound(ctx, `Message not found: ${key}`);
    ctx.body = msg;
});

// update a single message by key
router.put('/:room_name/messages/:key', async (ctx) => {
    const name = store.sanitizeRoomName(ctx.params.room_name);
    if (!name) return badRequest(ctx, `Invalid room name: ${ctx.params.room_name}`);
    const key = ctx.params.key;
    const body = ctx.request.body || {};
    const content = typeof body.content === 'string' ? body.content.trim() : '';
    if (!content) return badRequest(ctx, 'content required');
    if (content.length > MAX_TEXT_LENGTH) return badRequest(ctx, `Text too long (max ${MAX_TEXT_LENGTH} chars)`);
    const room = store.getRoom(name);
    const msg = room.messages.find((m) => m.key === key || m.id === key);
    if (!msg) return notFound(ctx, `Message not found: ${key}`);
    const updated = store.updateMessage(name, msg.id, { content });
    ctx.body = updated;
});

// serve uploaded files
router.get('/:room_name/files/:file_id', async (ctx) => {
    const name = store.sanitizeRoomName(ctx.params.room_name);
    if (!name) return badRequest(ctx, `Invalid room name: ${ctx.params.room_name}`);
    const fileId = ctx.params.file_id;
    if (!FILE_ID_RE.test(fileId)) return badRequest(ctx, 'Invalid file id');

    const filePath = store.filePath(name, fileId);
    try {
        const stats = fs.statSync(filePath);
        if (!stats.isFile()) return notFound(ctx, 'File not found');
        const meta = store.findFile(name, fileId);
        if (meta) {
            ctx.type = meta.mime || 'application/octet-stream';
            if (meta.type === 'file') {
                ctx.set('Content-Disposition', `attachment; filename*=UTF-8''${encodeURIComponent(meta.name || 'file')}`);
            } else {
                ctx.set('Content-Disposition', 'inline');
            }
        }
        ctx.body = fs.createReadStream(filePath);
    } catch (e) {
        if (e.code === 'ENOENT') return notFound(ctx, 'File not found');
        throw e;
    }
});

module.exports = router;