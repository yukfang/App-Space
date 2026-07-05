const { exchangeAuthCode } = require('../../utils/tts-api');
const { getTtsApp } = require('../../utils/tts-db');
const { syncShopMetadataAndTokens } = require('../../utils/tts-oauth-sync');
const { buildFailureParams } = require('../../utils/tts-oauth-error');
const { oauthResultBaseUrl, joinPublicPath } = require('../../utils/app-public-url');

async function sendAccessTokenReq(app_key, _grant_type, auth_code, oauthContext = {}) {
    const currentOrigin = oauthContext.currentOrigin || '';
    if (auth_code === '123') {
        return {
            code: 0,
            message: 'Auth Code 123',
        };
    }

    const appInfo = await getTtsApp(app_key);
    if (appInfo === null) {
        const failure = buildFailureParams(oauthContext, {
            app_key,
            step: 'app_lookup',
            reason: 'Auth Failed: App Info Not Found',
            detail: `在 tts_app 中未找到 app_key=${app_key}`,
        });
        return {
            code: 1,
            message: failure.reason,
            app_key,
            step: failure.step,
            detail: failure.detail,
            failure_redirect: failureRedirectFromOrigin(currentOrigin, failure),
        };
    }

    let tokenData;
    try {
        tokenData = await exchangeAuthCode(app_key, appInfo.app_secret, auth_code);
    } catch (err) {
        console.error('Auth SendReq axios Error...', err.message);
        const failure = buildFailureParams(oauthContext, {
            app_key,
            step: 'token_exchange',
            reason: 'Auth Failed: Token exchange error',
            err,
        });
        return {
            code: 1,
            message: failure.reason,
            app_key,
            step: failure.step,
            detail: failure.detail,
            failure_redirect: buildOAuthResultUrl(appInfo, 'failure', failure, currentOrigin),
        };
    }

    let shops;
    try {
        shops = await syncShopMetadataAndTokens(appInfo, tokenData);
        console.log(`OAuth saved for app_key=${app_key}, shops=${shops.map((s) => s.id).join(',')}`);
        appInfo.appCredential = {
            app_key,
            access_token: tokenData.access_token,
            access_token_expire_in: tokenData.access_token_expire_in,
            refresh_token: tokenData.refresh_token,
            refresh_token_expire_in: tokenData.refresh_token_expire_in,
            shop_ids: shops.map((s) => String(s.id)),
            shops,
        };
    } catch (err) {
        console.error('Auth save to DB failed:', err.message);
        const failure = buildFailureParams(oauthContext, {
            app_key,
            step: 'sync_shops',
            reason: 'Auth Failed: Could not persist credentials',
            err,
        });
        return {
            code: 1,
            message: failure.reason,
            app_key,
            step: failure.step,
            detail: failure.detail,
            failure_redirect: appInfo.failure_path
                ? buildOAuthResultUrl(appInfo, 'failure', failure, currentOrigin)
                : failureRedirectFromOrigin(currentOrigin, failure),
        };
    }

    return {
        code: 0,
        redirect_url: buildOAuthResultUrl(appInfo, 'success', {
            app_key,
            shop_ids: shops.map((s) => String(s.id)).join(','),
        }, currentOrigin),
        appCredential: appInfo.appCredential,
    };
}

function failureRedirectFromOrigin(currentOrigin, params) {
    const base = oauthResultBaseUrl({}, currentOrigin);
    if (!base) {
        return null;
    }
    try {
        const url = new URL(`${base}/failure`);
        appendSearchParams(url, params);
        return url.toString();
    } catch {
        return null;
    }
}

function appendSearchParams(url, params) {
    for (const [key, value] of Object.entries(params)) {
        if (value != null && value !== '') {
            url.searchParams.set(key, String(value));
        }
    }
}

function buildOAuthResultUrl(appInfo, kind, params, currentOrigin) {
    const path = kind === 'success' ? appInfo.success_path : appInfo.failure_path;
    const base = joinPublicPath(oauthResultBaseUrl(appInfo, currentOrigin), path);
    try {
        const url = new URL(base);
        appendSearchParams(url, params);
        return url.toString();
    } catch {
        const qs = new URLSearchParams(
            Object.fromEntries(
                Object.entries(params).filter(([, v]) => v != null && v !== '')
            )
        ).toString();
        return qs ? `${base}?${qs}` : base;
    }
}

module.exports = {
    SendAccessTokenReq_TTS: sendAccessTokenReq,
};
