const path = require('path');
const mysql = require('mysql2/promise');
const { connectionConfigFromUrl } = require('./openapi-tts-db-config');

require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

let pool;

function getOpenApiTtsPool() {
    if (!pool) {
        const connectionString = process.env.OPENAPI_TTS_DB_URL2;
        if (!connectionString) {
            throw new Error('OPENAPI_TTS_DB_URL2 is not set');
        }
        pool = mysql.createPool({
            ...connectionConfigFromUrl(connectionString),
            connectionLimit: 10,
            waitForConnections: true,
            enableKeepAlive: true,
        });
    }
    return pool;
}

module.exports = getOpenApiTtsPool;
