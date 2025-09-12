const Router = require('koa-router');
const path = require('path');

const axios = require('axios');
const aes256cbc = require('../../utils/aes-256-cbc');
const hmac = require('../../utils/hmac');

const { DateTime } = require('luxon');
const { LocalDisk } = require('../storage/localdisk');

const SHOP = 'DISNEY'

const router = new Router({ prefix: `/ecomm/${SHOP}` });
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

const shopInfo = JSON.parse(process.env.SHOP_INFO_TTS_DISNEY)

// console.log('shopInfo', shopInfo)

router.get('/:key', async (ctx) => {
    const key = ctx.params.key.toUpperCase();
    if (key === "TOKENS") {
        await handleTokenRequest(ctx);
    } else {
        ctx.status = 401;
        ctx.body = { error: `Prohibited: ${key}` };
    }
});

async function handleTokenRequest(ctx) {
    let data = {}
    let cache = LocalDisk.readFileSync(`/ecomm/${SHOP}`, 'tokens.json');

    /** If there is no cache, build cache first */
    if (!cache) {
        let newToken = await refreshToken()
        newToken.refresh_token = "*****"
        console.log('newToken', newToken)
        LocalDisk.writeFileSync(`/ecomm/${SHOP}`, 'tokens.json', JSON.stringify(newToken, null, 2));
        data = {
            access_token: newToken.access_token,
            app_secret: shopInfo.app_secret,
            app_key: shopInfo.app_key,
            shop_cipher: shopInfo.shop_cipher,
            access_token_expire_in: newToken.access_token_expire_in,

        }
    } else {
        let cacheData = JSON.parse(cache.toString());
        console.log(DateTime.now().toSeconds() - cacheData.access_token_expire_in)
        if (!cacheData.access_token_expire_in || DateTime.now().toSeconds() + 3600 * 5 > cacheData.access_token_expire_in) {
            console.log('cache expired')
            let newToken = await refreshToken()
            newToken.refresh_token = "*****"
            LocalDisk.writeFileSync(`/ecomm/${SHOP}`, 'tokens.json', JSON.stringify(newToken, null, 2));
            data = {
                access_token: newToken.access_token,
                app_secret: shopInfo.app_secret,
                app_key: shopInfo.app_key,
                shop_cipher: shopInfo.shop_cipher,

                access_token_expire_in: newToken.access_token_expire_in
            }
        } else {
            data = {
                access_token: cacheData.access_token,
                app_secret: shopInfo.app_secret,
                app_key: shopInfo.app_key,
                shop_cipher: shopInfo.shop_cipher,
                access_token_expire_in: cacheData.access_token_expire_in,
            }
        }
    }

    const encryptedText = aes256cbc.encryptText(JSON.stringify(data), shopInfo.encrypt_key.repeat(32).substring(0, 32));
    ctx.body = encryptedText
}


const baseUrl = "https://open-api.tiktokglobalshop.com"
async function testApiToken(access_token, app_key, app_secret) {
    try {
        const path = '/authorization/202309/shops';
        const config = {
            method: 'GET',
            url: `${baseUrl}${path}`,
            headers: { 'x-tts-access-token': access_token, 'Content-Type': 'application/json' },
            params: {
                app_key: app_key,
                timestamp: Math.floor(Date.now() / 1000)
            }
        }
        config.params.sign = hmac.hmac_sign(config, app_secret);

        console.log(config)

        const response = await axios(config);
        if (response.status === 200 && response.data.code === 0) {
            return true
        } else {
            throw new Error(`Error fetching shops: ${response.data.msg}`);
        }
    } catch (error) {
        console.log(`Error Testing Api Token: ${error.message}`);
        return false;
    }
}

async function refreshToken() {
    const baseUrl = "https://auth.tiktok-shops.com"
    const path = `/api/v2/token/refresh`
    const method = "GET"
    const url = `${baseUrl}${path}`
    const headers = { 'Content-Type': 'application/json' }
    const params = {
        app_key: shopInfo.app_key,
        app_secret: shopInfo.app_secret,
        refresh_token: shopInfo.refresh_token,
        grant_type: 'refresh_token'
    }

    const reqConfig = {
        method,
        url,
        headers,
        params,
        maxRedirects: 1
    };

    try {
        console.log(`Token Refresh Request : ${JSON.stringify(reqConfig)}`)
        const response = await axios(reqConfig);

        if (response.status === 200 && response.data.code === 0) {
            return response.data.data;
        } else {
            console.log(`Token Refresh Failed`)
            console.log(response.data)
        }
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

module.exports = router;
