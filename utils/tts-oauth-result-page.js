function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function layout({ title, bodyClass, content }) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
  <style>
    :root {
      --bg: #f4f6f8;
      --card: #fff;
      --text: #1a1a1a;
      --muted: #5c6570;
      --ok: #0d7a49;
      --ok-bg: #e8f5ee;
      --err: #b42318;
      --err-bg: #fdecec;
      --border: #e3e8ef;
      --accent: #111827;
    }
    * { box-sizing: border-box; }
    body {
      margin: 0;
      min-height: 100vh;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background: var(--bg);
      color: var(--text);
      line-height: 1.6;
    }
    body.ok { --badge-bg: var(--ok-bg); --badge-fg: var(--ok); }
    body.err { --badge-bg: var(--err-bg); --badge-fg: var(--err); }
    .wrap { max-width: 520px; margin: 0 auto; padding: 48px 20px 64px; }
    .card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 32px 28px;
      box-shadow: 0 8px 24px rgba(16, 24, 40, 0.06);
    }
    .badge {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 6px 12px;
      border-radius: 999px;
      background: var(--badge-bg);
      color: var(--badge-fg);
      font-size: 14px;
      font-weight: 600;
      margin-bottom: 20px;
    }
    h1 { font-size: 22px; margin: 0 0 12px; font-weight: 600; }
    .lead { color: var(--muted); margin: 0 0 20px; font-size: 16px; }
    .shop-list { margin: 0; padding: 0; list-style: none; }
    .shop-list li {
      padding: 12px 0;
      border-bottom: 1px solid var(--border);
      font-size: 16px;
    }
    .shop-list li:last-child { border-bottom: none; }
    .shop-meta { font-size: 14px; color: var(--muted); margin-top: 4px; }
    .debug {
      margin-top: 24px;
      padding: 16px;
      background: #f9fafb;
      border: 1px dashed var(--border);
      border-radius: 8px;
      font-size: 13px;
      color: var(--muted);
    }
    .debug h2 { font-size: 13px; margin: 0 0 10px; color: var(--text); font-weight: 600; }
    .debug pre {
      margin: 0;
      white-space: pre-wrap;
      word-break: break-word;
      font-family: ui-monospace, SFMono-Regular, Menlo, monospace;
      font-size: 12px;
      line-height: 1.5;
    }
    .actions { margin-top: 28px; display: flex; flex-wrap: wrap; gap: 12px; }
    a.btn {
      display: inline-block;
      padding: 12px 20px;
      border-radius: 8px;
      text-decoration: none;
      font-size: 15px;
      font-weight: 600;
    }
    a.btn-primary { background: var(--accent); color: #fff; }
  </style>
</head>
<body class="${escapeHtml(bodyClass)}">
  <div class="wrap"><div class="card">${content}</div></div>
</body>
</html>`;
}

const REGION_LABELS = {
    US: 'United States',
    GB: 'United Kingdom',
    MY: 'Malaysia',
    SG: 'Singapore',
    TH: 'Thailand',
    VN: 'Vietnam',
    PH: 'Philippines',
    ID: 'Indonesia',
};

function regionLabel(code) {
    if (!code) {
        return '';
    }
    const key = String(code).toUpperCase();
    return REGION_LABELS[key] ? `${REGION_LABELS[key]} (${key})` : key;
}

function renderSuccessPage({ app, shops }) {
    const appLabel = app?.description?.trim() || 'TikTok Shop';

    const shopItems = (shops || [])
        .map((shop) => {
            const name = shop.name?.trim() || 'Shop';
            const region = regionLabel(shop.region);
            const meta = region ? `<div class="shop-meta">${escapeHtml(region)}</div>` : '';
            return `<li>${escapeHtml(name)}${meta}</li>`;
        })
        .join('');

    const shopsBlock = shops?.length
        ? `<ul class="shop-list">${shopItems}</ul>`
        : `<p class="lead">Authorization is complete. If you don't see your shop in the system, please contact support.</p>`;

    const content = `
      <div class="badge">&#10003; Authorized</div>
      <h1>Your shop has been authorized</h1>
      <p class="lead">${escapeHtml(appLabel)} is now connected to your TikTok Shop.</p>
      ${shops?.length ? '<p class="lead">Connected shops:</p>' : ''}
      ${shopsBlock}
      <p class="lead" style="margin-top:24px;margin-bottom:0;">You can close this page.</p>
    `;

    return layout({ title: 'Authorization successful', bodyClass: 'ok', content });
}

function userFacingFailureMessage(reason) {
    const r = String(reason || '').toLowerCase();
    if (r.includes('token exchange')) {
        return 'Something went wrong while verifying with TikTok. Please try authorizing again later.';
    }
    if (r.includes('persist') || r.includes('save')) {
        return 'Authorization did not finish. Please try again, and contact support if it keeps failing.';
    }
    if (r.includes('not found')) {
        return 'The app is misconfigured. Please contact support before trying again.';
    }
    return 'Authorization could not be completed. Please try again or contact support.';
}

const { stepLabel } = require('./tts-oauth-error');

function renderFailurePage({ reason, step, detail, at, locale, shop_region, authBaseUrl, app_key }) {
    const userMessage = userFacingFailureMessage(reason);

    const debugLines = [
        `Time: ${at || new Date().toISOString()}`,
        app_key ? `App key: ${app_key}` : null,
        shop_region ? `Shop region: ${shop_region}` : null,
        locale ? `Locale: ${locale}` : null,
        step ? `Failed step: ${stepLabel(step)}` : null,
        reason ? `Summary: ${reason}` : null,
        detail ? `\n--- Error details ---\n${detail}` : null,
    ];

    const debugText = debugLines.filter(Boolean).join('\n');

    const reauth = app_key && authBaseUrl
        ? `<a class="btn btn-primary" href="${escapeHtml(authBaseUrl)}/auth/tts/${escapeHtml(app_key)}">Authorize again</a>`
        : '';

    const content = `
      <div class="badge">Authorization failed</div>
      <h1>We couldn't authorize your shop</h1>
      <p class="lead">${escapeHtml(userMessage)}</p>
      <div class="debug">
        <h2>If you contact support, please include the information below (a screenshot or the copied text):</h2>
        <pre>${escapeHtml(debugText)}</pre>
      </div>
      <div class="actions">${reauth}</div>
    `;

    return layout({ title: 'Authorization failed', bodyClass: 'err', content });
}

module.exports = {
    renderSuccessPage,
    renderFailurePage,
};
