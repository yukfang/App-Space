const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });

const { PrismaClient } = require('../prisma/generated/clientdb');
const { PrismaMariaDb } = require('@prisma/adapter-mariadb');
const { connectionConfigFromUrl } = require('./api-auth-db-config');

const connectionString = process.env.OPENAPI_TTS_DB_URL;
if (!connectionString) {
    throw new Error('OPENAPI_TTS_DB_URL is not set');
}

const adapter = new PrismaMariaDb({
    ...connectionConfigFromUrl(connectionString),
    prepareCacheLength: 0,
    connectionLimit: 10,
    acquireTimeout: 60_000,
    connectTimeout: 30_000,
});
const prisma = new PrismaClient({ adapter });

BigInt.prototype.toJSON = function () {
    return this.toString();
};

module.exports = prisma;
