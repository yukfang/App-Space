
// const proxying = require('../../utils/http/proxying');
const Router = require('koa-router');
const router = new Router({ prefix: '/callback' });

router.get('/:key', async (ctx) => {
    const key = ctx.params.key;
    const respData = {
        message: 'Callback received',
        key,
    };

    ctx.body = JSON.stringify(respData, null, 2);
});


module.exports = router;