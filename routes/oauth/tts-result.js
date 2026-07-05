const Router = require('koa-router');
const path = require('path');
const { getTtsApp } = require('../../utils/tts-db');
const getOpenApiTtsPool = require('../../utils/openapi-tts-db-pool');
const { renderSuccessPage, renderFailurePage } = require('../../utils/tts-oauth-result-page');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const router = new Router();

function authBaseUrl(ctx) {
    const fromEnv = process.env.APP_PUBLIC_URL?.trim();
    if (fromEnv) {
        return fromEnv.replace(/\/$/, '');
    }
    return `${ctx.protocol}://${ctx.host}`;
}

function redirectToFailure(ctx, params) {
    const url = new URL(`${authBaseUrl(ctx)}/failure`);
    for (const [key, value] of Object.entries(params)) {
        if (value != null && value !== '') {
            url.searchParams.set(key, String(value));
        }
    }
    ctx.redirect(url.toString());
}

async function loadShopsByIds(shopIds) {
    if (!shopIds.length) {
        return [];
    }
    const pool = getOpenApiTtsPool();
    const placeholders = shopIds.map(() => '?').join(',');
    const [rows] = await pool.query(
        `SELECT id, name, region FROM tts_shop WHERE id IN (${placeholders})`,
        shopIds
    );
    return rows;
}

async function renderSuccess(ctx) {
    const app_key = ctx.query.app_key;
    const shopIds = String(ctx.query.shop_ids || '')
        .split(',')
        .map((s) => s.trim())
        .filter(Boolean);

    const app = app_key ? await getTtsApp(app_key) : null;
    const shops = await loadShopsByIds(shopIds);

    ctx.type = 'html';
    ctx.body = renderSuccessPage({ app, shops });
}

async function renderFailure(ctx) {
    const { app_key, reason, locale, shop_region, at, step, detail } = ctx.query;

    ctx.type = 'html';
    ctx.body = renderFailurePage({
        reason,
        step,
        detail,
        at: at || new Date().toISOString(),
        locale,
        shop_region,
        app_key,
        authBaseUrl: authBaseUrl(ctx),
    });
}

router.get('/success', renderSuccess);
router.get('/failure', renderFailure);
router.get('/oauth/tts/success', renderSuccess);
router.get('/oauth/tts/failure', renderFailure);

module.exports = router;
module.exports.redirectToFailure = redirectToFailure;
