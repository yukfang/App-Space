const Router = require('koa-router');
const path = require('path');

const aes256cbc = require('../../utils/aes-256-cbc');
const { DateTime } = require('luxon');
const {
    getTokenBundleByShopIdAndAppKey,
    markTokenRefreshFailed,
} = require('../../utils/tts-db');
const { refreshAccessToken, syncShopMetadataAndTokens } = require('../../utils/tts-oauth-sync');
const { toTtsShopId } = require('../../utils/tts-shop-id');

require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const ACCESS_TOKEN_REFRESH_BUFFER_SEC = 3600 * 25;

const router = new Router({ prefix: `/tokens/tts` });

/** GET /tokens/tts/:shop_id/:app_key — token for (shop, app) authorization */
router.get('/:shop_id/:app_key', async (ctx) => {
    const shop_id = String(ctx.params.shop_id);
    const app_key = ctx.params.app_key;
    const logLabel = `${shop_id}/${app_key}`;

    await issueEncryptedToken(ctx, {
        app_key,
        logLabel,
        shopId: toTtsShopId(shop_id),
        loadBundle: () => getTokenBundleByShopIdAndAppKey(shop_id, app_key),
    });
});

async function issueEncryptedToken(ctx, { app_key, logLabel, shopId, loadBundle }) {
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
    const resolvedShopId = shopId;

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
