/** TikTok shop ids exceed Number.MAX_SAFE_INTEGER; always treat as decimal strings. */
function toTtsShopId(value) {
    if (value == null || value === '') {
        return null;
    }
    if (typeof value === 'bigint') {
        return value.toString();
    }
    if (typeof value === 'string') {
        return value.trim();
    }
    return String(value);
}

module.exports = { toTtsShopId };
