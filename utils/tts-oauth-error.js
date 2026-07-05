const MAX_DETAIL_LENGTH = 2400;

const STEP_LABELS = {
    callback_params: '回调参数校验',
    app_lookup: '读取应用配置',
    token_exchange: '向 TikTok 换取访问凭证',
    sync_shops: '同步店铺并保存授权',
    unhandled: '未预期的程序错误',
};

function stepLabel(step) {
    return STEP_LABELS[step] || step || '未知步骤';
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
    lines.push(`失败步骤：${stepLabel(step)}`);

    if (err == null) {
        return truncateDetail(lines.join('\n'));
    }

    if (typeof err === 'string') {
        lines.push(`说明：${err}`);
        return truncateDetail(redactSecrets(lines.join('\n')));
    }

    if (err.message) {
        lines.push(`错误消息：${err.message}`);
    }
    if (err.code) {
        lines.push(`错误代码：${err.code}`);
    }

    const response = err.response;
    if (response) {
        lines.push(`HTTP 状态：${response.status}`);
        if (response.data !== undefined) {
            const body = typeof response.data === 'string' ? response.data : safeJson(response.data);
            lines.push(`接口返回：${redactSecrets(body)}`);
        }
    }

    if (err.stack) {
        const stackLines = err.stack.split('\n').slice(0, 12);
        lines.push('堆栈（节选）：');
        lines.push(...stackLines.map((line) => `  ${line.trim()}`));
    }

    return truncateDetail(redactSecrets(lines.join('\n')));
}

function truncateDetail(text) {
    if (text.length <= MAX_DETAIL_LENGTH) {
        return text;
    }
    return `${text.slice(0, MAX_DETAIL_LENGTH)}\n…（内容已截断）`;
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
