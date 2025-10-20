// GET https://ip-check-perf.radar.cloudflare.com/
const proxying = require('../../utils/http/proxying');
const Router = require('koa-router');
const router = new Router({ prefix: '/ip' });
router.get('/:key', async (ctx) => {
    const key = ctx.params.key;

    const ipInfo = await getIpAddress();
    const debugInfo = {
        request: (process.env.DEBUG_FLAG === 'true') ? ctx.request.headers : null,
    };
    const respData = {
        ipInfo: ipInfo        
    };
    if (process.env.DEBUG_FLAG === 'true') {
        respData.debugInfo = debugInfo;
    }
    ctx.body = JSON.stringify(respData, null, 2);
});




async function getIpAddress() {
    const endpoint      = `https://ip-check-perf.radar.cloudflare.com`;
    const method        = 'GET';
    let param       = { };
    let body        = null;
    const header    = { }
    const response = (await proxying(method, endpoint, header, param, body, true));
    console.log(response.data)

    if(response.status == 200 ) {
        const data = JSON.parse(response.data);
        return data;

    } else {
        console.log(`Get IpInfo  Error !!!`)
        return null;
    }
}




function isValidIpAddress(ip) {
    // IPv4 regex pattern
    const ipv4Pattern = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    
    // IPv6 regex pattern
    const ipv6Pattern = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    
    return ipv4Pattern.test(ip) || ipv6Pattern.test(ip);
}





module.exports = router;