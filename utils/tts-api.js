const axios = require('axios');
const hmac = require('./hmac');
const { toTtsShopId } = require('./tts-shop-id');

const OPEN_API_BASE = 'https://open-api.tiktokglobalshop.com';
const AUTH_BASE = 'https://auth.tiktok-shops.com';

async function getAuthorizedShops(access_token, app_key, app_secret) {
    const path = '/authorization/202309/shops';
    const config = {
        method: 'GET',
        url: `${OPEN_API_BASE}${path}`,
        headers: { 'x-tts-access-token': access_token, 'Content-Type': 'application/json' },
        params: {
            app_key,
            timestamp: Math.floor(Date.now() / 1000),
        },
    };
    config.params.sign = hmac.hmac_sign(config, app_secret);

    const response = await axios(config);
    if (response.status === 200 && response.data.code === 0) {
        return response.data.data;
    }
    throw new Error(`Get authorized shops failed: ${response.data?.msg ?? response.status}`);
}

async function exchangeAuthCode(app_key, app_secret, auth_code) {
    let response;
    try {
        response = await axios({
            method: 'GET',
            url: `${AUTH_BASE}/api/v2/token/get`,
            params: {
                app_key,
                app_secret,
                grant_type: 'authorized_code',
                auth_code,
            },
        });
    } catch (err) {
        err.oauthStep = 'token_exchange';
        throw err;
    }
    if (response.status === 200 && response.data.code === 0) {
        return response.data.data;
    }
    const err = new Error(`Token exchange failed: ${response.data?.message ?? JSON.stringify(response.data)}`);
    err.response = response;
    err.oauthStep = 'token_exchange';
    throw err;
}

async function refreshAccessToken(app_key, app_secret, refresh_token) {
    const response = await axios({
        method: 'GET',
        url: `${AUTH_BASE}/api/v2/token/refresh`,
        headers: { 'Content-Type': 'application/json' },
        params: {
            app_key,
            app_secret,
            refresh_token,
            grant_type: 'refresh_token',
        },
        maxRedirects: 1,
    });
    if (response.status === 200 && response.data.code === 0) {
        return response.data.data;
    }
    throw new Error(`Token refresh failed: ${response.data?.message ?? JSON.stringify(response.data)}`);
}

function normalizeShopList(shopData) {
    if (!shopData) {
        return [];
    }
    const shops = shopData.shops ?? (Array.isArray(shopData) ? shopData : []);
    return shops
        .filter((s) => s.id != null && s.id !== '')
        .map((s) => ({ ...s, id: toTtsShopId(s.id) }));
}

module.exports = {
    getAuthorizedShops,
    exchangeAuthCode,
    refreshAccessToken,
    normalizeShopList,
};
