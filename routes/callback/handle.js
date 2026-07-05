const Router = require('koa-router');
const { SendAccessTokenReq_TTS } = require('./tt4s');
const { handleCallback: handleSnapchatCallback } = require('./snap-marketing-api');
const { redirectToFailure } = require('../oauth/tts-result');
const { buildFailureParams } = require('../../utils/tts-oauth-error');
const { getRequestOrigin } = require('../../utils/app-public-url');
const router = new Router({ prefix: '/callback' });

router.get('/:path*', async (ctx) => {
    const fullPath = ctx.params.path?.toLowerCase();

    if (fullPath == undefined) {
        ctx.status = 401;
        ctx.body = { error: `Prohibited: /callback` };
        return
    } else {
        const pathSegments = fullPath.split('/') // 可选：将路径分割成段数组

        // 检查是否是 Snapchat Marketing API 回调
        if (pathSegments[0]?.startsWith('snapchat-marketing-api-')) {
            await handleSnapchatCallback(ctx);
            return;
        }

        // 从HTTP请求中读取查询字符串参数
        // 例如：/?app_key=6h92uttbf7u18&code=&locale=en&shop_region=MY
        const queryParams = ctx.query;

        // 读取具体的查询参数
        const grant_type = 'authorized_code';
        const app_key = queryParams.app_key 
        const auth_code = queryParams.code
        const locale = queryParams.locale  
        const shop_region = queryParams.shop_region 
        if (app_key == undefined || auth_code == undefined || auth_code === '' || locale == undefined || shop_region == undefined) {
            redirectToFailure(ctx, buildFailureParams(
                { locale, shop_region },
                {
                    app_key: app_key || '',
                    step: 'callback_params',
                    reason: '回调缺少必要参数',
                    detail: `app_key=${app_key}, code=${auth_code ? '[present]' : '[missing]'}, locale=${locale}, shop_region=${shop_region}`,
                }
            ));
            return;
        }

        if (pathSegments[0] === 'tt4s') {
            const currentOrigin = getRequestOrigin(ctx);
            let result;
            try {
                result = await SendAccessTokenReq_TTS(app_key, grant_type, auth_code, {
                    locale,
                    shop_region,
                    currentOrigin,
                });
            } catch (err) {
                console.error('OAuth unhandled error:', err);
                redirectToFailure(ctx, buildFailureParams(
                    { locale, shop_region },
                    {
                        app_key,
                        step: 'unhandled',
                        reason: '授权过程发生未预期错误',
                        err,
                    }
                ));
                return;
            }

            if (result.code !== 0) {
                console.log(`OAuth failed: ${result.message}`);
                if (result.failure_redirect) {
                    ctx.redirect(result.failure_redirect);
                    return;
                }
                redirectToFailure(ctx, buildFailureParams(
                    { locale, shop_region },
                    {
                        app_key,
                        step: result.step || 'unhandled',
                        reason: result.message || 'OAuth failed',
                        detail: result.detail,
                    }
                ));
                return;
            }

            console.log(`OAuth ok app_key=${app_key} shops=${result.appCredential?.shop_ids?.join(',')}`);
            if (process.env.DEBUG_FLAG === 'true') {
                ctx.body = {
                    redirect_url: result.redirect_url,
                    shops: result.appCredential?.shops,
                    shop_ids: result.appCredential?.shop_ids,
                };
                return;
            }

            console.log(`redirect_url: ${result.redirect_url}`)
            ctx.redirect(result.redirect_url)

        } else {
            var afterAuthUrl = ''

            if (pathSegments[0] === 'tt4b') {
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