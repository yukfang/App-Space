const Router = require('koa-router');
const fs = require('fs');
const path = require('path');

const router = new Router({ prefix: `/file/download`});

router.get('/:key', async (ctx) => {
    const fileName = ctx.params.key.toLowerCase();
    const filePath = path.join(__dirname, 'files', fileName);

    try {
        const stats = fs.statSync(filePath);
        if (stats.isFile()) {
            ctx.attachment(fileName);
            ctx.body = fs.createReadStream(filePath);
        } else {
            ctx.status = 404;
            ctx.body = { error: `File not found: ${fileName}` };
        }
    } catch (error) {
        console.error(error);
        if (error.code === 'ENOENT') {
            ctx.status = 404;
            ctx.body = { error: `File not found: ${fileName}` };
        } else {
            ctx.status = 500;
            ctx.body = { error: 'Internal Server Error' };
        }
    }
});

module.exports = router;