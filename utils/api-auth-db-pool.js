const path = require('path');
const mysql = require('mysql2/promise');
const { connectionConfigFromUrl } = require('./api-auth-db-config');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

let pool;

/** Shared MySQL pool for API auth tables (tts_*, snap_*, …) via API_AUTH_DB. */
function getApiAuthDbPool() {
    if (!pool) {
        const connectionString = process.env.API_AUTH_DB;
        if (!connectionString) {
            throw new Error('API_AUTH_DB is not set');
        }
        pool = mysql.createPool({
            ...connectionConfigFromUrl(connectionString),
            connectionLimit: 10,
            waitForConnections: true,
            enableKeepAlive: true,
            supportBigNumbers: true,
            bigNumberStrings: true,
        });
    }
    return pool;
}

module.exports = getApiAuthDbPool;
