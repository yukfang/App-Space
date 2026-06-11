const axios = require('axios');
const mysql = require('mysql2/promise');

const dbconfig = JSON.parse(process.env.SNAP_MKT_API_DB_CFG || '{"host":"localhost","port":3306,"user":"root","password":"","database":"app_space"}');

const pool = mysql.createPool({
    host: dbconfig.host,
    port: Number(dbconfig.port || 3306),
    user: dbconfig.user,
    password: dbconfig.password,
    database: dbconfig.database,
    connectionLimit: 10,
});

async function handleCallback(ctx) {
    try {
        const path = ctx.path;
        const code = ctx.query.code;

        const appKeyMatch = path.match(/snapchat-marketing-api-([^/?]+)/);
        const app_key = appKeyMatch ? appKeyMatch[1] : null;

        if (!code) {
            ctx.status = 400;
            ctx.body = { error: 'Missing code parameter' };
            return;
        }

        if (!app_key) {
            ctx.status = 400;
            ctx.body = { error: 'Invalid callback URL format' };
            return;
        }

        const appInfo = await getAppInfo(app_key);
        if (!appInfo) {
            ctx.status = 404;
            ctx.body = { error: 'App info not found' };
            return;
        }

        const { client_id, client_secret, redirect_uri } = appInfo;

        const cleanClientId = client_id.trim();
        const cleanClientSecret = client_secret.trim();
        const cleanRedirectUri = redirect_uri.trim();

        const response = await axios.post(
            'https://accounts.snapchat.com/login/oauth2/access_token',
            new URLSearchParams({
                grant_type: 'authorization_code',
                client_id: cleanClientId,
                client_secret: cleanClientSecret,
                code: code,
                redirect_uri: cleanRedirectUri
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );

        const authResult = response.data;
        const access_token = authResult.access_token;

        // 调用 /v1/me 获取用户信息
        let userInfo = {};
        try {
            const meResponse = await axios.get(
                'https://adsapi.snapchat.com/v1/me',
                {
                    headers: {
                        'Authorization': `Bearer ${access_token}`
                    }
                }
            );
            const me = meResponse.data.me;
            if (me) {
                userInfo = {
                    email: me.email,
                    display_name: me.display_name,
                    snapchat_username: me.snapchat_username
                };
            }
        } catch (meError) {
            // 如果获取用户信息失败，继续保存凭证，不影响主流程
        }

        await saveCredential(cleanClientId, authResult, userInfo);

        ctx.status = 200;
        ctx.body = { 
            status: 'success',
            message: 'Authorization completed',
            app_key: app_key,
            client_id: cleanClientId
        };

    } catch (error) {
        ctx.status = 500;
        ctx.body = { 
            error: error.message,
            detail: error.response?.data || error.stack
        };
    }
}

async function getAppInfo(app_key) {
    const [rows] = await pool.query(
        'SELECT client_id, client_secret, auth_uri, redirect_uri FROM snapchat_apps WHERE app_key = ? LIMIT 1',
        [app_key]
    );
    return rows[0] || null;
}

async function saveCredential(client_id, authResult, userInfo = {}) {
    const { 
        access_token, 
        token_type, 
        expires_in, 
        refresh_token, 
        scope, 
        id_token, 
        issued_token_type 
    } = authResult;
    
    const token_responses = JSON.stringify(authResult);
    
    // 构造 description 字段
    const description = JSON.stringify(userInfo);
    
    await pool.query(
        `INSERT INTO snapchat_credentials 
            (client_id, access_token, token_type, expires_in, refresh_token, 
             scope, id_token, issued_token_type, token_responses, description, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(3), NOW(3))
         ON DUPLICATE KEY UPDATE 
            access_token = VALUES(access_token),
            token_type = VALUES(token_type),
            expires_in = VALUES(expires_in),
            refresh_token = VALUES(refresh_token),
            scope = VALUES(scope),
            id_token = VALUES(id_token),
            issued_token_type = VALUES(issued_token_type),
            token_responses = VALUES(token_responses),
            description = VALUES(description),
            updated_at = NOW(3)`,
        [client_id, access_token, token_type, expires_in, refresh_token, 
         scope, id_token, issued_token_type, token_responses, description]
    );
}

module.exports = {
    handleCallback
};