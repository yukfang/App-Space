const { default: axios } = require('axios');
const Router = require('koa-router');
const router = new Router({ prefix: '/ssvmlist' });
const delayms = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Sample: 
// STATUS=剩余流量：695.63GB.♥.到期时间：2025-11-14
// REMARKS=少数人
// ssr://wYXJhbT1NalF5TlRBNk4zRTJTSEY0VnpOeldBJnJlbWFya3M9NmFhWjVyaXZNREV0U1VWUVRDM2xnSTNuam9jeExqQSZncm91cD01YkNSNXBXdzVMcTY

const REMARKS = {
    "subs_yuning": "Dev环境",
    "subs_luo": "罗总",
    "subs_wangyi": "王益",
    "subs_lizong": "李总",
}

router.get('/:key', async (ctx) => {
    // await delayms(1000);
    const key = ctx.params.key.toUpperCase();
    console.log(`Req: key = ${key}`)

    /** Redirect If key matches */
    if (key.toUpperCase() === 'YUNING') {
        ctx.redirect('/ssvmlist/SUBS_YUNING');
    } else if (key.toUpperCase() === 'ZGW') {
        ctx.redirect('/ssvmlist/SUBS_ZGW');
    } else if (key.toUpperCase() === 'TW_LIVE') {
        ctx.redirect('/ssvmlist/SUBS_TW_LIVE');
    } else if (key.toUpperCase() === 'MY_LIVE') {
        ctx.redirect('/ssvmlist/SUBS_MY_LIVE');
    } else if (key.toUpperCase() === 'LUO') {
        ctx.redirect('/ssvmlist/SUBS_LUO');
    } else if (key.toUpperCase() === 'LIYAN') {
        ctx.redirect('/ssvmlist/SUBS_LIYAN');
    } else if (key.toUpperCase() === 'MY_XIN') {
        ctx.redirect('/ssvmlist/SUBS_XIN');
    } else if (key.toUpperCase() === 'MY_ZHAO') {
        ctx.redirect('/ssvmlist/SUBS_ZHAO');
    } else if (key.toUpperCase() === 'MY_WANGYI') {
        ctx.redirect('/ssvmlist/SUBS_WANGYI');
    } else if (key.toUpperCase() === 'MY_LIVE_CZ') {
        ctx.redirect('/ssvmlist/SUBS_LIVE_CZ');
    }


    const subs_key_list = [...new Set(Object.keys(process.env).filter(k => k.startsWith('SUBS_')))]
    console.log(`subs_key_list = ${subs_key_list}`)

    let keys = []
    if (key.toUpperCase() === 'SUBS_ALL') {
        keys = subs_key_list.filter(k => k !== 'SUBS_ALL')
    } else {
        keys = subs_key_list.filter(k => k === key)
    }

    let values = []
    for (const key of keys) {
        const value = process.env[key]
        values = [...values, ...JSON.parse(value)]
    }
    values = [...new Set(values)]

    console.log(`keys = ${keys}, values = ${values}`)
    if (values) {
        const remarks = `REMARKS=${REMARKS[key.toLowerCase()] || (key + '_')}`;

        const vmlist = []
        for (const value of values) {
            vmlist.push(process.env[value] || process.env[value.replaceAll(".", "_")])
        }
        console.log(vmlist);
        const instances = vmlist.sort().join("\r\n");
        const data = Buffer.from(remarks + "\r\n" + instances).toString('base64');
        ctx.body = data;
    } else {
        ctx.status = 401;
        ctx.body = { error: `Prohibited: ${key}` };
    }
});

// 

async function getMyIpInfo() {
    const endpoint = `https://ipinfo.io/what-is-my-ip`;
    const method = 'GET';
    let param = {};
    let body = null;
    const header = {
        'Accept': '*/*',
        'Accept-Language': 'en-US,en;q=0.9,zh-CN;q=0.8,zh-HK;q=0.7,zh;q=0.6',
        'Connection': 'keep-alive',
        'DNT': '1',
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'cross-site',
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0.0.0 Safari/537.36 Edg/130.0.0.0',
        'sec-ch-ua': '"Chromium";v="130", "Microsoft Edge";v="130", "Not?A_Brand";v="99"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"'
    }
    const response = (await axios({
        method,
        url: endpoint,
        headers: header,
        params: param,
        data: body
    }));
    // console.log(response.data)

    if (response.status == 200) {
        const data = JSON.parse(response.data);
        return data;

    } else {
        console.log(`Get IpInfo Error !!!`)
        return null;
    }
}


module.exports = router;