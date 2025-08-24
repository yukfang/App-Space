const Router = require('koa-router');
const router = new Router({ prefix: '/ssh' });
const delayms = (ms) => new Promise(resolve => setTimeout(resolve, ms));

router.get('/:key', async (ctx) => {

    console.log(`ssh tunnel script`)
    const key = ctx.params.key.toUpperCase();
    console.log(`key = ${key}`)
    const value = process.env[key];

    if (key.toUpperCase() === 'TEST') {
        ctx.body = {
            test: 1
        }
    } else {
        ctx.status = 401;
        ctx.body = { error: `Prohibited: ${key}` };
    }
});


module.exports = router;