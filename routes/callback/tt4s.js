
const axios = require('axios');
// const crypto = require('crypto');

// https://services.tiktokshop.com/open/authorize?service_id=7541044296256833288

async function sendAccessTokenReq(app_key, grant_type, auth_code) {

    // return {
    //     auth_code: 1
    // }
    app_key = '6h92uttbf7u18'
    grant_type = 'authorized_code'
    auth_code = 'ROW_nvzfzgAAAADiGyqJJkiguK8i0JxbqjAxekWAPquA8WKRHj9Mcyv9NjfCAHkdKW9zfxayOHKEWg9tvzeVC9duxsYtyz9WFYZVI3BXH6Cp7FG29HT81GmXrrsaRVqCw1Lp1koAHQvVOU5fxqKv_0S8ADRSsFfBjCX5'
    const app_secret = getAppSecret(app_key)
 
    const config = {
        method: 'GET',
        url: "https://auth.tiktok-shops.com/api/v2/token/get",
        headers: {
        },
        params: {
            app_key, app_secret, grant_type, auth_code
        }
    };

    console.log(config)

    try {
        const response = await axios(config);
        return response.data;
    } catch (err) {
        console.error("SendReq axios Error...");
    }
}

module.exports = {
    SendAccessTokenReq_TTS : sendAccessTokenReq
}

function getAppSecret(app_key) {
    if (app_key === '6h92uttbf7u18') {
        return 'cebc73ea67bfed023fdf141d65c9efa1c5b6a446'
    } else {
        return ''
    }
}

async function test() {
    const data = await sendAccessTokenReq('6h92uttbf7u18', 'authorized_code', 'ROW_nvzfzgAAAADiGyqJJkiguK8i0JxbqjAxekWAPquA8WKRHj9Mcyv9NjfCAHkdKW9zfxayOHKEWg9tvzeVC9duxsYtyz9WFYZVI3BXH6Cp7FG29HT81GmXrrsaRVqCw1Lp1koAHQvVOU5fxqKv_0S8ADRSsFfBjCX5')
    console.log(data)
}

test()
