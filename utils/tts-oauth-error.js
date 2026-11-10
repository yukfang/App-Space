const MAX_DETAIL_LENGTH = 2400;

const STEP_LABELS = {
    callback_params: 'Validate callback parameters',
    app_lookup: 'Load app configuration',
    token_exchange: 'Exchange auth code for TikTok access token',
    sync_shops: 'Sync shops and save authorization',
    unhandled: 'Unexpected error',
};

function stepLabel(step) {
    return STEP_LABELS[step] || step || 'Unknown step';
}

function safeJson(value) {
    try {
        return JSON.stringify(value);
    } catch {
        return String(value);
    }
}

function redactSecrets(text) {
    if (!text) {
        return text;
    }
    return String(text)
        .replace(/access_token["']?\s*[:=]\s*["']?[^"'\s,&]+/gi, 'access_token=[REDACTED]')
        .replace(/refresh_token["']?\s*[:=]\s*["']?[^"'\s,&]+/gi, 'refresh_token=[REDACTED]')
        .replace(/app_secret["']?\s*[:=]\s*["']?[^"'\s,&]+/gi, 'app_secret=[REDACTED]');
}

/**
 * Format error for support staff (no secrets in output when possible).
 */
function formatErrorDetail(err, step) {
    const lines = [];
    lines.push(`Failed step: ${stepLabel(step)}`);

    if (err == null) {
        return truncateDetail(lines.join('\n'));
    }

    if (typeof err === 'string') {
        lines.push(`Note: ${err}`);
        return truncateDetail(redactSecrets(lines.join('\n')));
    }

    if (err.message) {
        lines.push(`Error message: ${err.message}`);
    }
    if (err.code) {
        lines.push(`Error code: ${err.code}`);
    }

    const response = err.response;
    if (response) {
        lines.push(`HTTP status: ${response.status}`);
        if (response.data !== undefined) {
            const body = typeof response.data === 'string' ? response.data : safeJson(response.data);
            lines.push(`API response: ${redactSecrets(body)}`);
        }
    }

    if (err.stack) {
        const stackLines = err.stack.split('\n').slice(0, 12);
        lines.push('Stack (excerpt):');
        lines.push(...stackLines.map((line) => `  ${line.trim()}`));
    }

    return truncateDetail(redactSecrets(lines.join('\n')));
}

function truncateDetail(text) {
    if (text.length <= MAX_DETAIL_LENGTH) {
        return text;
    }
    return `${text.slice(0, MAX_DETAIL_LENGTH)}\n...(truncated)`;
}

function buildFailureParams(oauthContext, { app_key, step, reason, err, detail }) {
    const resolvedDetail = detail ?? formatErrorDetail(err, step);
    return {
        at: new Date().toISOString(),
        locale: oauthContext.locale,
        shop_region: oauthContext.shop_region,
        app_key,
        step,
        reason: reason || (err?.message ?? 'OAuth failed'),
        detail: resolvedDetail,
    };
}

module.exports = {
    STEP_LABELS,
    stepLabel,
    formatErrorDetail,
    buildFailureParams,
};
