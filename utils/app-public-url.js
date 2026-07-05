/**
 * Public base URL from env (optional fallback).
 */
function getAppPublicUrl() {
    const raw = process.env.APP_PUBLIC_URL?.trim();
    return raw ? raw.replace(/\/$/, '') : '';
}

/** Origin from incoming HTTP request (respects reverse proxy). */
function getRequestOrigin(ctx) {
    if (!ctx) {
        return '';
    }
    const proto = ctx.get('x-forwarded-proto') || ctx.protocol || 'http';
    const host = ctx.get('x-forwarded-host') || ctx.get('host') || ctx.host;
    if (!host) {
        return '';
    }
    return `${proto}://${host}`.replace(/\/$/, '');
}

/**
 * Success/failure page base: tts_app.redirect_domain if set, else current request domain.
 */
function oauthResultBaseUrl(appInfo, currentOrigin) {
    const fromDb = appInfo?.redirect_domain?.trim();
    if (fromDb) {
        return fromDb.replace(/\/$/, '');
    }
    const origin = currentOrigin?.trim();
    if (origin) {
        return origin.replace(/\/$/, '');
    }
    return getAppPublicUrl();
}

function joinPublicPath(baseUrl, pathSegment) {
    if (!baseUrl) {
        return '';
    }
    if (!pathSegment) {
        return baseUrl;
    }
    const path = pathSegment.startsWith('/') ? pathSegment : `/${pathSegment}`;
    return `${baseUrl}${path}`;
}

module.exports = {
    getAppPublicUrl,
    getRequestOrigin,
    oauthResultBaseUrl,
    joinPublicPath,
};
