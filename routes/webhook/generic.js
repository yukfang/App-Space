const fs = require('fs');
const path = require('path');

const MAX_RECORDS_PER_CHANNEL = 200;
const MAX_LOGSTREAM = 100;
const MAX_BODY_BYTES = 1024 * 1024;
const MAX_STORED_BODY_CHARS = 64 * 1024;
const MONITOR_PAGE = path.join(__dirname, 'monitor.html');

// channel (request path) -> records, oldest first
const records = new Map();
// channel -> Set of SSE responses
const subscribers = new Map();
let seq = 0;

function channelOf(ctx) {
    return ctx.path.replace(/\/+$/, '') || '/';
}

function parseLogstream(value) {
    const n = parseInt(value, 10);
    if (!Number.isFinite(n) || n < 1) return null;
    return Math.min(n, MAX_LOGSTREAM);
}

function truncate(text) {
    if (text.length <= MAX_STORED_BODY_CHARS) return text;
    return text.slice(0, MAX_STORED_BODY_CHARS) + `…[truncated, ${text.length} chars total]`;
}

// koa-bodyparser only consumes json/form bodies; read anything else from the stream.
function readRawBody(ctx) {
    if (typeof ctx.request.rawBody === 'string') return Promise.resolve(ctx.request.rawBody);
    const req = ctx.req;
    if (req.readableEnded) return Promise.resolve('');
    return new Promise((resolve, reject) => {
        const chunks = [];
        let size = 0;
        req.on('data', (chunk) => {
            size += chunk.length;
            if (size <= MAX_BODY_BYTES) chunks.push(chunk);
        });
        req.on('end', () => {
            const text = Buffer.concat(chunks).toString('utf8');
            resolve(size > MAX_BODY_BYTES ? `${text}…[truncated, ${size} bytes total]` : text);
        });
        req.on('error', reject);
    });
}

function sendEvent(res, event, payload) {
    try {
        res.write(`event: ${event}\ndata: ${JSON.stringify(payload)}\n\n`);
    } catch (e) { /* client gone */ }
}

function publish(channel, record) {
    let list = records.get(channel);
    if (!list) {
        list = [];
        records.set(channel, list);
    }
    list.push(record);
    if (list.length > MAX_RECORDS_PER_CHANNEL) list.splice(0, list.length - MAX_RECORDS_PER_CHANNEL);

    const subs = subscribers.get(channel);
    if (subs) for (const res of subs) sendEvent(res, 'record', record);
}

function streamRecords(ctx, channel, limit) {
    ctx.respond = false;
    const res = ctx.res;
    res.writeHead(200, {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
        'X-Accel-Buffering': 'no',
    });
    sendEvent(res, 'snapshot', (records.get(channel) || []).slice(-limit));

    let subs = subscribers.get(channel);
    if (!subs) {
        subs = new Set();
        subscribers.set(channel, subs);
    }
    subs.add(res);

    const heartbeat = setInterval(() => {
        try { res.write(': ping\n\n'); } catch (e) { /* client gone */ }
    }, 25000);
    const close = () => {
        clearInterval(heartbeat);
        subs.delete(res);
        if (subs.size === 0) subscribers.delete(channel);
    };
    ctx.req.on('close', close);
    res.on('error', close);
}

async function handleGenericWebhook(ctx) {
    const channel = channelOf(ctx);
    const limit = ctx.method === 'GET' ? parseLogstream(ctx.query.logstream) : null;

    if (limit) {
        if ((ctx.get('accept') || '').includes('text/event-stream')) {
            streamRecords(ctx, channel, limit);
            return;
        }
        ctx.type = 'text/html; charset=utf-8';
        ctx.body = fs.createReadStream(MONITOR_PAGE);
        return;
    }

    const body = truncate(await readRawBody(ctx));
    const responseBody = { ok: true, id: ++seq };
    ctx.status = 200;
    ctx.body = responseBody;

    publish(channel, {
        id: responseBody.id,
        time: Date.now(),
        method: ctx.method,
        path: ctx.path,
        query: ctx.querystring,
        ip: ctx.get('x-forwarded-for') || ctx.ip,
        headers: ctx.request.headers,
        body,
        response: { status: ctx.status, body: responseBody },
    });
}

module.exports = { handleGenericWebhook };
