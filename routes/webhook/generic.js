const fs = require('fs');
const path = require('path');

const MAX_RECORDS = 1000;
const MAX_LOGSTREAM = 100;
const MAX_QUERY_LENGTH = 200;
const MAX_BODY_BYTES = 1024 * 1024;
const MAX_STORED_BODY_CHARS = 64 * 1024;
const MONITOR_PAGE = path.join(__dirname, 'monitor.html');

// { record, haystack }, oldest first; haystack is the lowercased searchable text
const entries = [];
// { res, prefix, query }
const subscribers = new Set();
let seq = 0;

function normalizePath(p) {
    return p.replace(/\/+$/, '') || '/';
}

function underPrefix(recordPath, prefix) {
    return recordPath === prefix || recordPath.startsWith(prefix + '/');
}

function matches(entry, prefix, query) {
    return underPrefix(entry.record.path, prefix) && (!query || entry.haystack.includes(query));
}

function parseLogstream(value) {
    const n = parseInt(value, 10);
    if (!Number.isFinite(n) || n < 1) return null;
    return Math.min(n, MAX_LOGSTREAM);
}

function truncate(text) {
    if (text.length <= MAX_STORED_BODY_CHARS) return text;
    return text.slice(0, MAX_STORED_BODY_CHARS) + `...[truncated, ${text.length} chars total]`;
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
            resolve(size > MAX_BODY_BYTES ? `${text}...[truncated, ${size} bytes total]` : text);
        });
        req.on('error', reject);
    });
}

function responseBodyText(body) {
    if (body == null) return '';
    if (typeof body === 'string') return truncate(body);
    if (Buffer.isBuffer(body)) return `[binary, ${body.length} bytes]`;
    if (typeof body.pipe === 'function') return '[stream]';
    try {
        return truncate(JSON.stringify(body));
    } catch (e) {
        return String(body);
    }
}

function sendEvent(res, event, payload) {
    try {
        res.write(`event: ${event}\ndata: ${JSON.stringify(payload)}\n\n`);
    } catch (e) { /* client gone */ }
}

function publish(record) {
    const entry = { record, haystack: JSON.stringify(record).toLowerCase() };
    entries.push(entry);
    if (entries.length > MAX_RECORDS) entries.splice(0, entries.length - MAX_RECORDS);

    for (const sub of subscribers) {
        if (matches(entry, sub.prefix, sub.query)) sendEvent(sub.res, 'record', record);
    }
}

function streamRecords(ctx, prefix, query, limit) {
    ctx.respond = false;
    const res = ctx.res;
    res.writeHead(200, {
        'Content-Type': 'text/event-stream; charset=utf-8',
        'Cache-Control': 'no-cache, no-transform',
        'Connection': 'keep-alive',
        'X-Accel-Buffering': 'no',
    });

    const matched = entries.filter((e) => matches(e, prefix, query));
    sendEvent(res, 'snapshot', {
        total: matched.length,
        capacity: MAX_RECORDS,
        records: matched.slice(-limit).map((e) => e.record),
    });

    const sub = { res, prefix, query };
    subscribers.add(sub);

    const heartbeat = setInterval(() => {
        try { res.write(': ping\n\n'); } catch (e) { /* client gone */ }
    }, 25000);
    const close = () => {
        clearInterval(heartbeat);
        subscribers.delete(sub);
    };
    ctx.req.on('close', close);
    res.on('error', close);
}

// GET <path>?logstream=N serves the monitor page (or its event stream) instead of recording.
async function monitor(ctx, next) {
    const limit = ctx.method === 'GET' ? parseLogstream(ctx.query.logstream) : null;
    if (!limit) return next();

    const prefix = normalizePath(ctx.path);
    if ((ctx.get('accept') || '').includes('text/event-stream')) {
        const query = String(ctx.query.q || '').trim().toLowerCase().slice(0, MAX_QUERY_LENGTH);
        streamRecords(ctx, prefix, query, limit);
        return;
    }
    ctx.type = 'text/html; charset=utf-8';
    ctx.body = fs.createReadStream(MONITOR_PAGE);
}

// Records every request handled by the webhook router, including its response.
async function recorder(ctx, next) {
    const id = ++seq;
    ctx.state.webhookRecordId = id;
    const time = Date.now();
    const body = truncate(await readRawBody(ctx));

    let error;
    try {
        await next();
    } catch (e) {
        error = e;
    }

    publish({
        id,
        time,
        durationMs: Date.now() - time,
        method: ctx.method,
        path: normalizePath(ctx.path),
        query: ctx.querystring,
        ip: ctx.get('x-forwarded-for') || ctx.ip,
        headers: ctx.request.headers,
        body,
        response: error
            ? { status: error.status || 500, headers: {}, body: JSON.stringify({ error: error.message }) }
            : { status: ctx.status, headers: ctx.response.headers, body: responseBodyText(ctx.body) },
    });

    if (error) throw error;
}

async function acknowledge(ctx) {
    ctx.status = 200;
    ctx.body = { ok: true, id: ctx.state.webhookRecordId };
}

module.exports = { monitor, recorder, acknowledge };
