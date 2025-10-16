const Router = require('koa-router');
const { createProxyMiddleware } = require('http-proxy-middleware');

const router = new Router({ prefix: '/proxy' });

// Helper to convert Express middleware into Koa style
function koaProxy(options) {
  const proxy = createProxyMiddleware(options);
  return async (ctx, next) => {
    await new Promise((resolve, reject) => {
      proxy(ctx.req, ctx.res, (err) => (err ? reject(err) : resolve()));
    });
    await next();
  };
}

// proxy /proxy/webhook/pacsun => https://target/app_store/api/webhook/pacsun
router.all('/webhook/pacsun(.*)', koaProxy({
  target: 'https://ads.tiktok.com',
  changeOrigin: true,
  secure: true,
  logLevel: 'debug', 
  pathRewrite: {
    '^/proxy/webhook/pacsun': '/app_store/api/webhook/pacsun',
  }
}));

// router.all('/auth/(.*)', koaProxy({
//   target: 'https://files.okiedokie.work',
//   changeOrigin: true,
//   pathRewrite: { '^/proxy/auth': '' },
//   secure: false,
// }));

module.exports = router;
