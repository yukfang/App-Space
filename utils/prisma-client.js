// Import from your CUSTOM generated path
const { PrismaClient } = require('../prisma/generated/clientdb');

// Create a single instance
const prisma = new PrismaClient();

// Optional: Handle BigInt serialization (See "Important Note" below)
BigInt.prototype.toJSON = function () {       
  return this.toString();
};

module.exports = prisma;