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
    const path = ctx.path;
    const code = ctx.query.code;

    if (!code) {
        ctx.status = 400;
        ctx.body = { error: 'Missing code parameter' };
        return;
    }

    const appKeyMatch = path.match(/snapchat-marketing-api-([^/?]+)/);
    if (!appKeyMatch) {
        ctx.status = 400;
        ctx.body = { error: 'Invalid callback URL format' };
        return;
    }

    const app_key = appKeyMatch[1];

    try {
        const appInfo = await getAppInfo(app_key);
        if (!appInfo) {
            ctx.status = 404;
            ctx.body = { error: 'App info not found' };
            return;
        }

        const { client_id, client_secret, redirect_uri } = appInfo;

        const response = await axios.post(
            'https://accounts.snapchat.com/login/oauth2/access_token',
            new URLSearchParams({
                grant_type: 'authorization_code',
                client_id: client_id,
                client_secret: client_secret,
                code: code,
                redirect_uri: redirect_uri
            }),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        );

        const authResult = response.data;

        await saveCredential(client_id, authResult);

        ctx.status = 200;
        ctx.body = { 
            status: 'success',
            message: 'Authorization completed',
            app_key: app_key,
            client_id: client_id
        };
    } catch (error) {
        console.error('OAuth callback error:', error.message);
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

async function saveCredential(client_id, authResult) {
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
    
    await pool.query(
        `INSERT INTO snapchat_credentials 
            (client_id, access_token, token_type, expires_in, refresh_token, 
             scope, id_token, issued_token_type, token_responses, created_at, updated_at)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(3), NOW(3))
         ON DUPLICATE KEY UPDATE 
            access_token = VALUES(access_token),
            token_type = VALUES(token_type),
            expires_in = VALUES(expires_in),
            refresh_token = VALUES(refresh_token),
            scope = VALUES(scope),
            id_token = VALUES(id_token),
            issued_token_type = VALUES(issued_token_type),
            token_responses = VALUES(token_responses),
            updated_at = NOW(3)`,
        [client_id, access_token, token_type, expires_in, refresh_token, 
         scope, id_token, issued_token_type, token_responses]
    );
}

module.exports = {
    handleCallback
};