const fs = require('fs');
const path = require('path');

const PROJECT_ROOT = path.resolve(__dirname, '..');

function bundledApsaraCa() {
    const certPath = path.join(PROJECT_ROOT, 'prisma', 'ApsaraDB-CA-Chain', 'ApsaraDB-CA-Chain.pem');
    try {
        if (fs.statSync(certPath).isFile()) return fs.readFileSync(certPath, 'utf8');
    } catch (e) { /* optional */ }
    return undefined;
}

/** mysql2 throws if ssl is boolean true; an object enables TLS. */
function normalizeMysql2Ssl(ssl) {
    if (ssl === false || ssl === 0 || ssl === 'false' || ssl === '0') return false;
    if (ssl === true || ssl === 1 || ssl === 'true' || ssl === '1') {
        const ca = bundledApsaraCa();
        return ca ? { ca, rejectUnauthorized: true } : {};
    }
    if (ssl && typeof ssl === 'object') return ssl;
    return undefined;
}

function resolveSslCertPath(sslcert) {
    const rel = String(sslcert).replace(/^\.\//, '');
    const candidates = [
        sslcert,
        path.resolve(process.cwd(), sslcert),
        path.resolve(PROJECT_ROOT, sslcert),
        path.resolve(PROJECT_ROOT, rel),
        path.resolve(PROJECT_ROOT, 'prisma', rel),
    ];
    for (const candidate of candidates) {
        try {
            if (candidate && fs.statSync(candidate).isFile()) return candidate;
        } catch (e) { /* try next */ }
    }
    throw new Error(`SSL CA file not found: ${sslcert}`);
}

function connectionConfigFromUrl(connectionString) {
    const url = new URL(connectionString);
    const config = {
        host: url.hostname,
        port: url.port ? Number(url.port) : 3306,
        user: decodeURIComponent(url.username),
        password: decodeURIComponent(url.password),
        database: url.pathname.replace(/^\//, ''),
    };

    const sslParam = url.searchParams.get('ssl');
    const sslcert = url.searchParams.get('sslcert') || url.searchParams.get('ca');
    const sslaccept = (url.searchParams.get('sslaccept') || '').toLowerCase();

    if (sslParam === 'false' || sslParam === '0') {
        config.ssl = false;
        return config;
    }

    const enableSsl = sslParam === 'true' || sslParam === '1' || Boolean(sslcert) || sslaccept === 'strict';
    if (!enableSsl) return config;

    const ssl = {};
    if (sslaccept === 'skip') {
        ssl.rejectUnauthorized = false;
    } else {
        ssl.rejectUnauthorized = true;
    }
    if (sslcert) {
        ssl.ca = fs.readFileSync(resolveSslCertPath(sslcert), 'utf8');
    }
    config.ssl = ssl;
    return config;
}

module.exports = { connectionConfigFromUrl, normalizeMysql2Ssl };
