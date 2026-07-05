const {
    getAuthorizedShops,
    refreshAccessToken,
    normalizeShopList,
} = require('./tts-api');
const {
    upsertShopMetadata,
    tokenRowFromOAuth,
    upsertTokensForShops,
} = require('./tts-db');
const { toTtsShopId } = require('./tts-shop-id');

async function syncShopMetadataAndTokens(app, tokenData, shopIdsForToken) {
    const shopData = await getAuthorizedShops(tokenData.access_token, app.app_key, app.app_secret);
    const shops = normalizeShopList(shopData);
    await upsertShopMetadata(shops);

    const ids = shopIdsForToken?.length
        ? shopIdsForToken.map((id) => toTtsShopId(id)).filter(Boolean)
        : shops.map((s) => toTtsShopId(s.id)).filter(Boolean);

    if (ids.length) {
        await upsertTokensForShops(ids, tokenRowFromOAuth(app.app_key, tokenData));
    }
    return shops;
}

module.exports = {
    syncShopMetadataAndTokens,
    refreshAccessToken,
};
