const Router = require('koa-router');
const path = require('path');
const { getTtsApp } = require('../../utils/tts-db');
const { buildTtsAuthorizeUrl } = require('../../utils/tts-auth-url');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const router = new Router({ prefix: '/auth/tts' });

/**
 * Start TikTok Shop OAuth for an app in tts_app.
 * GET /auth/tts/:app_key?shop_region=US&locale=en&state=optional
 * Redirects browser to TikTok authorize page; callback is /callback/tt4s.
 */
router.get('/:app_key', async (ctx) => {
    const app_key = ctx.params.app_key;
    const app = await getTtsApp(app_key);

    if (!app) {
        ctx.status = 404;
        ctx.body = { error: 'App not found in tts_app', app_key };
        return;
    }

    let built;
    try {
        built = buildTtsAuthorizeUrl(app, {
            state: ctx.query.state,
            locale: ctx.query.locale,
            shop_region: ctx.query.shop_region,
        });
    } catch (error) {
        ctx.status = 500;
        ctx.body = { error: error.message };
        return;
    }

    if (ctx.query.format === 'json') {
        ctx.body = built;
        return;
    }

    ctx.redirect(built.authorize_url);
});

module.exports = router;
