const Router = require('koa-router');
const path = require('path');

const axios = require('axios');
const aes256cbc = require('../../utils/aes-256-cbc');
const { LocalDisk } = require('../storage/localdisk');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });

let ADVERTISER = '';
let snapApiConfig = {};

const router = new Router({ prefix: `/tokens/snap` });

router.get('/:key', async (ctx) => {
    ADVERTISER = ctx.params.key.toUpperCase();
    console.log('advertiser', ADVERTISER);
    snapApiConfig = JSON.parse(process.env[`SNAP_API_${ADVERTISER}`]);

    await handleTokenRequest(ctx);
});

async function handleTokenRequest(ctx) {
    let cache = LocalDisk.readFileSync(`/tokens/snap/${ADVERTISER}`, 'tokens.json');

    let data;
    if (!cache) {
        let newToken = await refreshToken();
        newToken.refresh_token = "*****";
        LocalDisk.writeFileSync(`/tokens/snap/${ADVERTISER}`, 'tokens.json', JSON.stringify(newToken, null, 2));
        data = newToken;
    } else {
        let cacheData = JSON.parse(cache.toString());
        if (!cacheData.expires_in || Date.now() / 1000 + 3600 > cacheData.expires_in) {
            console.log('cache expired, refreshing token');
            let newToken = await refreshToken();
            newToken.refresh_token = "*****";
            LocalDisk.writeFileSync(`/tokens/snap/${ADVERTISER}`, 'tokens.json', JSON.stringify(newToken, null, 2));
            data = newToken;
        } else {
            data = cacheData;
        }
    }

    const encryptedText = aes256cbc.encryptText(JSON.stringify(data), snapApiConfig.encrypt_key.repeat(32).substring(0, 32));
    ctx.body = encryptedText;
}

async function refreshToken() {
    const url = 'https://accounts.snapchat.com/login/oauth2/access_token';

    const response = await axios.post(
        url,
        new URLSearchParams({
            refresh_token: snapApiConfig.refresh_token,
            client_id: snapApiConfig.client_id,
            client_secret: snapApiConfig.client_secret,
            grant_type: 'refresh_token'
        }),
        {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
    );

    if (response.status === 200) {
        return response.data;
    } else {
        console.log('Token Refresh Failed');
        console.log(response.data);
        throw new Error('Token refresh failed');
    }
}

module.exports = router;