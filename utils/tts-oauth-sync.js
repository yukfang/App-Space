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

async function syncShopMetadataAndTokens(app, tokenData, shopIdsForToken) {
    const shopData = await getAuthorizedShops(tokenData.access_token, app.app_key, app.app_secret);
    const shops = normalizeShopList(shopData);
    await upsertShopMetadata(shops);

    const ids = shopIdsForToken?.length
        ? shopIdsForToken
        : shops.map((s) => String(s.id));

    if (ids.length) {
        await upsertTokensForShops(ids, tokenRowFromOAuth(app.app_key, tokenData));
    }
    return shops;
}

module.exports = {
    syncShopMetadataAndTokens,
    refreshAccessToken,
};
