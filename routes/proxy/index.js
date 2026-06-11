const Router = require('koa-router');
const axios = require('axios');

const router = new Router({ prefix: '/proxy' });

router.all('(.*)', async (ctx) => {
    const to_host = ctx.request.headers['to_host'];
    
    if (!to_host) {
        ctx.status = 400;
        ctx.body = { error: 'Missing to_host header' };
        return;
    }

    const path = ctx.path.replace('/proxy', '');
    const query = ctx.querystring ? `?${ctx.querystring}` : '';
    const url = `${to_host}${path}${query}`;

    console.log(`Proxying to: ${url}`);

    const headersToExclude = ['host', 'to_host', 'content-length', 'content-type'];
    const forwardHeaders = {};
    for (const key in ctx.request.headers) {
        if (!headersToExclude.includes(key.toLowerCase())) {
            forwardHeaders[key] = ctx.request.headers[key];
        }
    }

    try {
        const response = await axios({
            method: ctx.method,
            url: url,
            headers: {
                ...forwardHeaders,
                host: new URL(to_host).hostname
            },
            data: ctx.request.body,
            maxRedirects: 5
        });

        const responseHeadersToExclude = ['transfer-encoding', 'connection', 'content-encoding'];
        for (const key in response.headers) {
            if (!responseHeadersToExclude.includes(key.toLowerCase())) {
                ctx.set(key, response.headers[key]);
            }
        }

        ctx.status = response.status;
        ctx.body = response.data;
    } catch (error) {
        console.error(`Proxy error: ${error.message}`);
        console.error(`Full error:`, error.response?.data || error);
        ctx.status = error.response?.status || 500;
        ctx.body = {
            error: error.message,
            status: error.response?.status,
            url: url
        };
    }
});

module.exports = router;