const {PrismaClient} = require('../../prisma/index.js');
const db = new PrismaClient()

async function test() {
    const apiCredentials = await db.ApiCredential.findMany();
    console.log(apiCredentials);
}

test();