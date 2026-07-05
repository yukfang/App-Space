const Router = require('koa-router');
const path = require('path');

const aes256cbc = require('../../utils/aes-256-cbc');
const { DateTime } = require('luxon');
const {
    getTokenBundleByShopIdAndAppKey,
    getTokenBundleBySlugAndAppKey,
    markTokenRefreshFailed,
} = require('../../utils/tts-db');
const { refreshAccessToken, syncShopMetadataAndTokens } = require('../../utils/tts-oauth-sync');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const ACCESS_TOKEN_REFRESH_BUFFER_SEC = 3600 * 6;

const router = new Router({ prefix: `/tokens/tts` });

/** Primary: GET /tokens/tts/:app_key?shop_id={tiktok_shop_id} */
router.get('/:app_key', async (ctx) => {
    const shop_id = ctx.query.shop_id;
    if (!shop_id) {
        ctx.status = 400;
        ctx.body = { error: 'Missing required query parameter: shop_id' };
        return;
    }
    await issueEncryptedToken(ctx, {
        app_key: ctx.params.app_key,
        shop_id: String(shop_id),
        logLabel: `${shop_id}/${ctx.params.app_key}`,
        loadBundle: () => getTokenBundleByShopIdAndAppKey(shop_id, ctx.params.app_key),
    });
});

/** Legacy alias: GET /tokens/tts/:slug/:app_key (slug in tts_shop) */
router.get('/:slug/:app_key', async (ctx) => {
    const slug = ctx.params.slug.toUpperCase();
    const app_key = ctx.params.app_key;
    await issueEncryptedToken(ctx, {
        app_key,
        shop_id: null,
        logLabel: `${slug}/${app_key}`,
        loadBundle: () => getTokenBundleBySlugAndAppKey(slug, app_key),
    });
});

async function issueEncryptedToken(ctx, { app_key, shop_id, logLabel, loadBundle }) {
    const forceRefresh = ctx.query.force_refresh === 'true';

    let bundle;
    try {
        bundle = await loadBundle();
    } catch (error) {
        console.log(`[${logLabel}] DB error: ${error.message}`);
        ctx.status = 503;
        ctx.body = { error: 'Database unavailable' };
        return;
    }

    if (!bundle) {
        ctx.status = 404;
        ctx.body = { error: 'Shop authorization not found' };
        return;
    }
    if (!bundle.is_active) {
        ctx.status = 403;
        ctx.body = { error: 'Shop is inactive' };
        return;
    }
    if (bundle.token_status !== 'active') {
        ctx.status = 403;
        ctx.body = { error: `Token status: ${bundle.token_status}` };
        return;
    }
    if (!bundle.encrypt_key) {
        ctx.status = 500;
        ctx.body = { error: 'Shop encrypt_key is not configured' };
        return;
    }

    let accessToken = bundle.access_token;
    let accessTokenExpireIn = Number(bundle.access_token_expire_in);
    const refreshToken = bundle.refresh_token;
    const resolvedShopId = String(bundle.shop_id);

    const nowSec = DateTime.now().toSeconds();
    const shouldRefresh =
        forceRefresh ||
        !accessTokenExpireIn ||
        nowSec + ACCESS_TOKEN_REFRESH_BUFFER_SEC > accessTokenExpireIn;

    if (shouldRefresh) {
        const app = { app_key: bundle.app_key, app_secret: bundle.app_secret };
        try {
            const tokenData = await refreshAccessToken(app.app_key, app.app_secret, refreshToken);
            await syncShopMetadataAndTokens(app, tokenData, [resolvedShopId]);
            accessToken = tokenData.access_token;
            accessTokenExpireIn = Number(tokenData.access_token_expire_in);
        } catch (error) {
            console.log(`[${logLabel}] Refresh failed: ${error.message}`);
            await markTokenRefreshFailed(resolvedShopId, app_key).catch(() => {});
            ctx.status = 503;
            ctx.body = { error: 'Token refresh failed' };
            return;
        }
    }

    const refreshed = await loadBundle();
    const shopCipher = refreshed?.shop_cipher ?? bundle.shop_cipher;

    const data = {
        access_token: accessToken,
        app_secret: bundle.app_secret,
        app_key: bundle.app_key,
        shop_cipher: shopCipher,
        shop_id: resolvedShopId,
        access_token_expire_in: accessTokenExpireIn,
    };

    const encryptKey = bundle.encrypt_key.repeat(32).substring(0, 32);
    ctx.body = aes256cbc.encryptText(JSON.stringify(data), encryptKey);
}

module.exports = router;
