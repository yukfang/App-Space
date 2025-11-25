const axios = require('axios');
const prisma = require('../../utils/prisma-client'); 

async function sendAccessTokenReq(app_key, grant_type, auth_code) {
    var authResult = {}
    if (auth_code === "123") {
        return {
            code: 0,
            message: "Auth Code 123",
        }
    }
    const appInfo = await getAppInfo(app_key)
    if (appInfo === null) {
        return {
            code: 1,
            message: 'Auth Failed: App Info Not Found',
        }
    }
    // console.log(`app_key: ${app_key}, app_secret: ${app_secret}`)

    const config = {
        method: 'GET',
        url: "https://auth.tiktok-shops.com/api/v2/token/get",
        headers: {
        },
        params: {
            app_key, app_secret: appInfo.app_secret, grant_type, auth_code
        }
    };


    /** Send Auth Request */
    try {
        const response = await axios(config);
        // console.log(response.data)
        authResult = response.data
    } catch (err) {
        console.error("Auth SendReq axios Error...");
    }

    /** Save Auth Result to DB */
    if (authResult.code === 0) {
        const appCredential = {
            app_key,
            access_token: authResult.data.access_token,
            refresh_token: authResult.data.refresh_token,
            access_token_expire_in: authResult.data.access_token_expire_in,
            refresh_token_expire_in: authResult.data.refresh_token_expire_in,

            open_id: authResult.data.open_id,
            seller_name: authResult.data.seller_name,
            seller_base_region: authResult.data.seller_base_region,
            user_type: authResult.data.user_type,
            granted_scopes: authResult.data.granted_scopes.sort()
        }


        await prisma.ApiCredential.create({
            data: appCredential
        })

        appInfo.appCredential = appCredential
    } else {
        console.error("Auth Result Error...");
    }

    return {
        redirect_url: `${appInfo.redirect_domain}${appInfo.success_path}`,
        appCredential: appInfo.appCredential
    }
}

module.exports = {
    SendAccessTokenReq_TTS: sendAccessTokenReq
}

async function getAppInfo(app_key) {
    const appInfo = await prisma.App.findUnique({
        where: {
            app_key
        }
    })

    return appInfo
}

async function test() {
    const app_secret = await getAppSecret('6h92uttbf7u18')
    console.log(app_secret)
}

// test()
