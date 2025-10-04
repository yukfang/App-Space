
const axios = require('axios');
const { PrismaClient } = require('../../prisma/generated/clientdb/index.js');
const db = new PrismaClient()

// https://services.tiktokshop.com/open/authorize?service_id=7541044296256833288

async function sendAccessTokenReq(app_key, grant_type, auth_code) {
    if(auth_code === "123") {
        return {
            auth_code
        }
    }
    // console.log(app_key, grant_type, auth_code)
    // return {
    //     auth_code: 1
    // }
    // app_key = '6h92uttbf7u18'
    // grant_type = 'authorized_code'
    // auth_code = 'ROW_Ow4fGgAAAADiGyqJJkiguK8i0JxbqjAxekWAPquA8WKRHj9Mcyv9NjfCAHkdKW9zfxayOHKEWg9tvzeVC9duxsYtyz9WFYZVI3BXH6Cp7FG29HT81GmXrlwQ4EYzMwz73SltfOp-Ge37p_0OHBcBRfQ6yGrzs6Gq'
    const app_secret = getAppSecret(app_key)
    console.log(`app_key: ${app_key}, app_secret: ${app_secret}`)


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

    var authResult = ''
    try {
        const response = await axios(config);
        console.log(response.data)
        authResult = response.data
    } catch (err) {
        console.error("SendReq axios Error...");
    }

    if(false) {
    authResult = {
        code: 0,
        message: 'success',
        data: {
            access_token: 'ROW_h04SuwAAAAD8wKN3_r7uC38uRYPMWFUc913depI10Hgfehph0yWrcJ7c1Xzt1Dq6d5vyoMjciYb5vlm1QeQgCn77BhoMpZnKNrc3c7_8iO0mS9c8Jp5SWQz7jZYaBMxEnVjrSBRBKYBArzgSEFeC8AMc_Na-oH2WMobknB94F81QZkkT2edZMg',
            access_token_expire_in: 1760107073,
            refresh_token: 'ROW_803ybAAAAADxSWH1UpgP2wQC2C6sGmOlFfpxP8DHybBsTdK7gOcOFz0BsXQMZRB8UVQdXW9iRA4',
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

    if (authResult != '') {
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
        console.error("Audit Result Error...");
    }

    return authResult
}

module.exports = {
    SendAccessTokenReq_TTS: sendAccessTokenReq
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

// test()
