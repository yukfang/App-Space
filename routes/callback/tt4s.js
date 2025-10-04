const axios = require('axios');
const { PrismaClient } = require('../../prisma/generated/clientdb/index.js');
const db = new PrismaClient()

async function sendAccessTokenReq(app_key, grant_type, auth_code) {
    var authResult = {}
    if (auth_code === "123") {
        return {
            code: 0,
            message: "Auth Code 123",
        }
    }
    const app_secret = await getAppSecret(app_key)
    if (app_secret === '') {
        return {
            code: 1,
            message: 'Auth Failed: App Secret Not Exist',
        }
    }
    // console.log(`app_key: ${app_key}, app_secret: ${app_secret}`)

    const config = {
        method: 'GET',
        url: "https://auth.tiktok-shops.com/api/v2/token/get",
        headers: {
        },
        params: {
            app_key, app_secret, grant_type, auth_code
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

    if (false) {
        authResult = {
            code: 0,
            message: 'success',
            data: {
                access_token: 'ROW_h04SuwAAAAD8wKN3_r7uC38uRYPMWFUc913depI10Hgfehph0yWrcJ7c1Xzt1Dq6d5vyoMjciYb5vlm1QeQgCn77BhoMpZnKNrc3c7_8iO0mS9c8Jp5SWQz7jZYaBMxEnVjrSBRBKYBArzgSEFeC8AMc_Na-oH2WMobknB94F81QZkkT2edZMg',
                access_token_expire_in: 1760107073,
                refresh_token: 'xxx',
                refresh_token_expire_in: 4878250317,
                open_id: 'G8tkLAAAAADbhZgLcBLmQNtPng7grqOPyykdeJodAEu7qIU98OXYmw',
                seller_name: 'Laila Affordable Store',
                seller_base_region: 'MY',
                user_type: 0,
                granted_scopes: [
                    'seller.product.delete',
                    'seller.delivery.status.write',
                    'seller.fulfillment.basic',
                    'seller.global_product.write',
                    'seller.fulfillment.package.write',
                    'seller.global_product.delete',
                    'seller.global_product.info',
                    'seller.product.write',
                    'seller.global_product.category.info',
                    'seller.shop.info',
                    'seller.return_refund.basic',
                    'seller.authorization.info',
                    'seller.product.basic',
                    'seller.order.info',
                    'seller.logistics',
                    'seller.finance.info',
                    'serller.product.optimize',
                    'seller.global_product.image_trans_task'
                ]
            },
            request_id: '20251003223753AA92910DDB9BA33F5CC5'
        }
    }

    console.log(`Auth Result:`)
    console.log(authResult)

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
        console.log(appCredential)

        await db.ApiCredential.create({
            data: appCredential
        })
    } else {
        console.error("Auth Result Error...");
    }

    return authResult
}

module.exports = {
    SendAccessTokenReq_TTS: sendAccessTokenReq
}

async function getAppSecret(app_key) {
    const app_secret = await db.App.findUnique({
        where: {
            app_key
        }
    })

    if (app_secret === null) {
        return ''
    }

    // console.log(app_secret)
    return app_secret.app_secret


    // if (app_key === '6h92uttbf7u18') {
    //     return 'cebc73ea67bfed023fdf141d65c9efa1c5b6a446'
    // } else {
    //     return ''
    // }
}

async function test() {
    const app_secret = await getAppSecret('6h92uttbf7u18')
    console.log(app_secret)
}

// test()
