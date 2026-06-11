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
    const logSteps = [];
    let step = 0;

    try {
        const path = ctx.path;
        const code = ctx.query.code;

        // Step 1: 提取 app_key
        step++;
        const appKeyMatch = path.match(/snapchat-marketing-api-([^/?]+)/);
        const app_key = appKeyMatch ? appKeyMatch[1] : null;
        logSteps.push({
            step: step,
            name: '提取 app_key',
            path: path,
            app_key: app_key,
            code: code,
            success: app_key !== null && code !== undefined
        });
        console.log(`[Step ${step}] 提取 app_key: path=${path}, app_key=${app_key}, code=${code}`);

        if (!code) {
            ctx.status = 400;
            ctx.body = { 
                error: 'Missing code parameter',
                steps: logSteps
            };
            return;
        }

        if (!app_key) {
            ctx.status = 400;
            ctx.body = { 
                error: 'Invalid callback URL format',
                steps: logSteps
            };
            return;
        }

        // Step 2: 查询数据库获取 app 信息
        step++;
        const appInfo = await getAppInfo(app_key);
        logSteps.push({
            step: step,
            name: '查询数据库',
            app_key: app_key,
            appInfo: appInfo,
            success: appInfo !== null
        });
        console.log(`[Step ${step}] 查询数据库: app_key=${app_key}, appInfo=${JSON.stringify(appInfo)}`);

        if (!appInfo) {
            ctx.status = 404;
            ctx.body = { 
                error: 'App info not found',
                steps: logSteps
            };
            return;
        }

        const { client_id, client_secret, redirect_uri } = appInfo;

        // Step 3: 调用 Snapchat OAuth API 获取 access_token
        step++;
        const authUrl = 'https://accounts.snapchat.com/login/oauth2/access_token';
        const requestData = {
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirect_uri
        };
        const authHeader = 'Basic ' + Buffer.from(client_id + ':' + client_secret).toString('base64');
        
        logSteps.push({
            step: step,
            name: '调用 OAuth API',
            url: authUrl,
            requestData: requestData,
            client_id: client_id,
            client_secret_masked: client_secret ? '***' + client_secret.slice(-4) : null,
            redirect_uri: redirect_uri,
            status: 'sending'
        });
        console.log(`[Step ${step}] 调用 OAuth API: url=${authUrl}, client_id=${client_id}, code=${code}`);

        const response = await axios.post(
            authUrl,
            new URLSearchParams(requestData),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': authHeader
                }
            }
        );

        const authResult = response.data;
        logSteps[step-1].status = 'success';
        logSteps[step-1].response = authResult;
        console.log(`[Step ${step}] OAuth API 响应: ${JSON.stringify(authResult)}`);

        // Step 4: 保存凭证到数据库
        step++;
        await saveCredential(client_id, authResult);
        logSteps.push({
            step: step,
            name: '保存凭证',
            client_id: client_id,
            saved_fields: Object.keys(authResult),
            success: true
        });
        console.log(`[Step ${step}] 保存凭证: client_id=${client_id}, fields=${Object.keys(authResult).join(',')}`);

        ctx.status = 200;
        ctx.body = { 
            status: 'success',
            message: 'Authorization completed',
            app_key: app_key,
            client_id: client_id,
            steps: logSteps,
            result: authResult
        };

    } catch (error) {
        console.error(`[Step ${step}] 错误:`, error.message);
        if (error.response) {
            console.error(`  响应状态: ${error.response.status}`);
            console.error(`  响应数据: ${JSON.stringify(error.response.data)}`);
        }
        
        // 更新当前步骤的状态为失败
        if (logSteps[step-1]) {
            logSteps[step-1].status = 'error';
            logSteps[step-1].error = error.message;
            logSteps[step-1].response = error.response?.data;
        }

        ctx.status = 500;
        ctx.body = { 
            error: error.message,
            detail: error.response?.data || error.stack,
            steps: logSteps
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