const DEFAULT_TTS_AUTHORIZE_URL = 'https://auth.tiktok-shops.com/oauth/authorize';

/**
 * OAuth redirect_uri registered in TikTok Partner Center (must match callback route).
 */
function getOAuthRedirectUri() {
    const explicit = process.env.TTS_OAUTH_REDIRECT_URI?.trim();
    if (explicit) {
        return explicit;
    }
    const base = process.env.APP_PUBLIC_URL?.trim();
    if (base) {
        return `${base.replace(/\/$/, '')}/callback/tt4s`;
    }
    return null;
}

/**
 * Build seller authorization URL from tts_app.auth_url (or TikTok default) + app_key + redirect_uri.
 */
function buildTtsAuthorizeUrl(app, options = {}) {
    const redirectUri = options.redirectUri ?? getOAuthRedirectUri();
    if (!redirectUri) {
        throw new Error('TTS_OAUTH_REDIRECT_URI or APP_PUBLIC_URL must be set');
    }

    const rawBase = (app.auth_url || '').trim() || DEFAULT_TTS_AUTHORIZE_URL;
    let url;
    try {
        url = new URL(rawBase.includes('://') ? rawBase : `https://${rawBase}`);
    } catch {
        throw new Error(`Invalid auth_url for app ${app.app_key}`);
    }

    if (!url.searchParams.has('app_key')) {
        url.searchParams.set('app_key', app.app_key);
    }
    url.searchParams.set('redirect_uri', redirectUri);

    if (options.state) {
        url.searchParams.set('state', options.state);
    }
    if (options.locale) {
        url.searchParams.set('locale', options.locale);
    }
    if (options.shop_region) {
        url.searchParams.set('shop_region', options.shop_region);
    }

    return {
        authorize_url: url.toString(),
        redirect_uri: redirectUri,
        app_key: app.app_key,
    };
}

module.exports = {
    DEFAULT_TTS_AUTHORIZE_URL,
    getOAuthRedirectUri,
    buildTtsAuthorizeUrl,
};
