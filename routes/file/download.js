const Router = require('koa-router');
const fs = require('fs');
const path = require('path');

const router = new Router({ prefix: `/file/download`});

router.get('/:corp_id/:report_name', async (ctx) => {
    const corpId = ctx.params.corp_id;
    const reportName = ctx.params.report_name;
    console.log('corpId', corpId);
    console.log('reportName', reportName);

    // const reportDir = path.join(__dirname, 'reports', corpId);
    const reportPath = path.join(__dirname,   'reports', corpId, reportName);
    console.log('reportPath', reportPath);

    try {
        const stats = fs.statSync(reportPath);
        if (stats.isFile()) {
            ctx.attachment(reportPath);
            ctx.body = fs.createReadStream(reportPath);
        } else {
            ctx.status = 404;
            ctx.body = { error: `Report not found: ${reportName}` };
        }
    } catch (error) {
        console.error(error);
        if (error.code === 'ENOENT') {
            ctx.status = 404;
            ctx.body = { error: `Report not found: ${reportName}` };
        } else {
            ctx.status = 500;
            ctx.body = { error: 'Internal Server Error' };
        }
    }
});

module.exports = router;