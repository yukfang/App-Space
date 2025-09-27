
const axios = require('axios');
// const crypto = require('crypto');



async function sendAccessTokenReq(app_key, grant_type, auth_code) {

    // return {
    //     auth_code: 1
    // }
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
