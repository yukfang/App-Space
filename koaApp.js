const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const ssvmlistRouter = require('./routes/vpn/ssvmlist');
const sshTunnelRouter = require('./routes/ssh/tunnel')
const ipRouter = require('./routes/ip/myip');
const routerEcommPacsun = require('./routes/tokens/pacsun');
const callbackRouter = require('./routes/callback/handle');
const fileDownloadRouter = require('./routes/file/download');
const proxyRouter = require('./routes/proxy/index');
const loginRouter = require('./routes/login/index')
const delayms = (ms) => new Promise(resolve => setTimeout(resolve, ms));
require('dotenv').config();

const koaApp = new Koa();
koaApp.use(bodyParser())

// logger
koaApp.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time
koaApp.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// response
koaApp.use(async (ctx, next) => {
    if (ctx.path.toLowerCase() === 'Data'.toLowerCase()) {
        ctx.body = 'Request :' + ctx.path;

        // ctx.redirect('/ssvmlist/subs_yuning');
    } else {
        // ctx.body = 'Request :' + ctx.path;
        // console.log(`ctx.body : ${ctx.body}`)

    }
    await next();
})

// routes
koaApp.use(ssvmlistRouter.routes()).use(ssvmlistRouter.allowedMethods())
koaApp.use(routerEcommPacsun.routes()).use(routerEcommPacsun.allowedMethods())
koaApp.use(ipRouter.routes()).use(ipRouter.allowedMethods())
koaApp.use(sshTunnelRouter.routes()).use(sshTunnelRouter.allowedMethods())
koaApp.use(fileDownloadRouter.routes()).use(fileDownloadRouter.allowedMethods({
    methodNotAllowed: () => {
        const err = new Error('Only GET requests are allowed for this endpoint.');
        err.status = 405;
        return err;
    }
}))
koaApp.use(callbackRouter.routes()).use(callbackRouter.allowedMethods({
    methodNotAllowed: () => {
        const err = new Error('Only GET requests are allowed for this endpoint.');
        err.status = 405;
        return err;
    }
}))
koaApp.use(proxyRouter.routes()).use(proxyRouter.allowedMethods())
koaApp.use(loginRouter.routes()).use(loginRouter.allowedMethods())







async function init() {}

module.exports = {
    koaApp,
    init,
};
