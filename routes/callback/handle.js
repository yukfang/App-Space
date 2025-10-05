const Router = require('koa-router');
const { SendAccessTokenReq_TTS } = require('./tt4s');
const router = new Router({ prefix: '/callback' });

router.get('/:path*', async (ctx) => {
    const fullPath = ctx.params.path?.toLowerCase();

    if (fullPath == undefined) {
        ctx.status = 401;
        ctx.body = { error: `Prohibited: /callback` };
        return
    } else {
        const pathSegments = fullPath.split('/') // 可选：将路径分割成段数组

        // 从HTTP请求中读取查询字符串参数
        // 例如：/?app_key=6h92uttbf7u18&code=&locale=en&shop_region=MY
        const queryParams = ctx.query;

        // 读取具体的查询参数
        const app_key = queryParams.app_key || '';
        const grant_type = 'authorized_code';
        const auth_code = queryParams.code || '';

        const locale = queryParams.locale || '';
        const shop_region = queryParams.shop_region || '';



        if (pathSegments[0] === 'tt4s') {
            const result = await SendAccessTokenReq_TTS(app_key, grant_type, auth_code)

            console.log(`redirect_url: ${result.redirect_url}`)
            ctx.redirect(result.redirect_url)

        } else {
            var afterAuthUrl = ''

            if (pathSegments[0] === 'tt4d') {
                afterAuthUrl = `${pathSegments[0]}: Not Implemented`
            } else if (pathSegments[0] === 'tt4d') {
                afterAuthUrl = `${pathSegments[0]}: Not Implemented`
            } else if (pathSegments[0] === 'shopee') {
                afterAuthUrl = `${pathSegments[0]}: Not Implemented`
            } else {
                afterAuthUrl = `${pathSegments[0]}: Not Implemented`
            }
            const respData = {
                message: 'Callback received',
                fullPath,
                pathSegments,
                locale,
                shop_region,
                app_key,
                afterAuthUrl
            };

            ctx.body = JSON.stringify(respData, null, 2);
        }
    }
});







module.exports = router