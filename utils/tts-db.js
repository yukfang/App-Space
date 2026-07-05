const getApiAuthDbPool = require('./api-auth-db-pool');
const { toTtsShopId } = require('./tts-shop-id');

const UPSERT_SHOP_META_SQL = `
INSERT INTO tts_shop (id, code, name, region, seller_type, cipher)
VALUES (?, ?, ?, ?, ?, ?)
ON DUPLICATE KEY UPDATE
  code = VALUES(code),
  name = VALUES(name),
  region = VALUES(region),
  seller_type = VALUES(seller_type),
  cipher = VALUES(cipher)
`;

const UPSERT_TOKEN_SQL = `
INSERT INTO tts_shop_app_token (
  shop_id, app_key,
  access_token, access_token_expire_in,
  refresh_token, refresh_token_expire_in,
  open_id, seller_name, seller_base_region, user_type,
  granted_scopes, status, last_refreshed_at
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active', NOW())
ON DUPLICATE KEY UPDATE
  access_token = VALUES(access_token),
  access_token_expire_in = VALUES(access_token_expire_in),
  refresh_token = VALUES(refresh_token),
  refresh_token_expire_in = VALUES(refresh_token_expire_in),
  open_id = VALUES(open_id),
  seller_name = VALUES(seller_name),
  seller_base_region = VALUES(seller_base_region),
  user_type = VALUES(user_type),
  granted_scopes = VALUES(granted_scopes),
  status = 'active',
  last_refreshed_at = NOW()
`;

async function getTtsApp(app_key) {
    const pool = getApiAuthDbPool();
    const [rows] = await pool.execute(
        `SELECT id, app_key, app_secret, redirect_domain, success_path, failure_path, description, auth_url
         FROM tts_app WHERE app_key = ? LIMIT 1`,
        [app_key]
    );
    return rows[0] ?? null;
}

const TOKEN_BUNDLE_SELECT = `
           s.id AS shop_id, s.slug, s.encrypt_key, s.cipher AS shop_cipher,
           s.code, s.name, s.region, s.is_active,
           t.id AS token_id, t.access_token, t.access_token_expire_in,
           t.refresh_token, t.refresh_token_expire_in, t.status AS token_status,
           a.app_key, a.app_secret`;

async function getTokenBundleByShopIdAndAppKey(shop_id, app_key) {
    const pool = getApiAuthDbPool();
    const [rows] = await pool.execute(
        `SELECT ${TOKEN_BUNDLE_SELECT}
         FROM tts_shop s
         INNER JOIN tts_shop_app_token t ON t.shop_id = s.id
         INNER JOIN tts_app a ON a.app_key = t.app_key
         WHERE s.id = ? AND t.app_key = ?
         LIMIT 1`,
        [toTtsShopId(shop_id), app_key]
    );
    return rows[0] ?? null;
}

async function getTokenBundleBySlugAndAppKey(slug, app_key) {
    const pool = getApiAuthDbPool();
    const [rows] = await pool.execute(
        `SELECT ${TOKEN_BUNDLE_SELECT}
         FROM tts_shop s
         INNER JOIN tts_shop_app_token t ON t.shop_id = s.id
         INNER JOIN tts_app a ON a.app_key = t.app_key
         WHERE s.slug = ? AND t.app_key = ?
         LIMIT 1`,
        [slug, app_key]
    );
    return rows[0] ?? null;
}

async function upsertShopMetadata(shops) {
    if (!shops?.length) {
        return;
    }
    const pool = getApiAuthDbPool();
    const conn = await pool.getConnection();
    try {
        await conn.beginTransaction();
        for (const shop of shops) {
            await conn.execute(UPSERT_SHOP_META_SQL, [
                toTtsShopId(shop.id),
                String(shop.code ?? ''),
                String(shop.name ?? ''),
                String(shop.region ?? ''),
                String(shop.seller_type ?? ''),
                String(shop.cipher ?? ''),
            ]);
        }
        await conn.commit();
    } catch (error) {
        await conn.rollback();
        throw error;
    } finally {
        conn.release();
    }
}

function tokenRowFromOAuth(app_key, tokenData) {
    const scopes = tokenData.granted_scopes ?? [];
    const sortedScopes = Array.isArray(scopes) ? [...scopes].sort() : scopes;
    return {
        access_token: tokenData.access_token,
        access_token_expire_in: tokenData.access_token_expire_in,
        refresh_token: tokenData.refresh_token,
        refresh_token_expire_in: tokenData.refresh_token_expire_in,
        open_id: tokenData.open_id ?? '',
        seller_name: tokenData.seller_name ?? '',
        seller_base_region: tokenData.seller_base_region ?? '',
        user_type: tokenData.user_type ?? 0,
        granted_scopes: JSON.stringify(sortedScopes),
        app_key,
    };
}

async function upsertTokensForShops(shopIds, tokenRow) {
    if (!shopIds.length) {
        return;
    }
    const pool = getApiAuthDbPool();
    const conn = await pool.getConnection();
    try {
        await conn.beginTransaction();
        for (const shopId of shopIds) {
            await conn.execute(UPSERT_TOKEN_SQL, [
                toTtsShopId(shopId),
                tokenRow.app_key,
                tokenRow.access_token,
                tokenRow.access_token_expire_in,
                tokenRow.refresh_token,
                tokenRow.refresh_token_expire_in,
                tokenRow.open_id,
                tokenRow.seller_name,
                tokenRow.seller_base_region,
                tokenRow.user_type,
                tokenRow.granted_scopes,
            ]);
        }
        await conn.commit();
    } catch (error) {
        await conn.rollback();
        throw error;
    } finally {
        conn.release();
    }
}

async function markTokenRefreshFailed(shop_id, app_key) {
    const pool = getApiAuthDbPool();
    await pool.execute(
        `UPDATE tts_shop_app_token SET status = 'refresh_failed' WHERE shop_id = ? AND app_key = ?`,
        [toTtsShopId(shop_id), app_key]
    );
}

module.exports = {
    getTtsApp,
    getTokenBundleByShopIdAndAppKey,
    getTokenBundleBySlugAndAppKey,
    upsertShopMetadata,
    tokenRowFromOAuth,
    upsertTokensForShops,
    markTokenRefreshFailed,
};
