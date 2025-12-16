const Router = require('koa-router');
const mysql = require('mysql2/promise');
const router = new Router({ prefix: '/webhook' });

const dbconfig = JSON.parse(process.env.WEBHOOK_DB_CFG)


// ✅ 全局唯一 pool（进程启动时创建）
const mysqlconfig = {
    host: dbconfig.host,
    port: Number(dbconfig.port || 3306),
    user: dbconfig.user,
    password: dbconfig.password,
    database: dbconfig.database,
    ssl: dbconfig.ssl,
    connectionLimit: 10,
}
// console.log(mysqlconfig)
const pool = mysql.createPool(mysqlconfig);

router.all('/tts/:shop_id', async (ctx) => {
    // console.log(`ctx.params: ${JSON.stringify(ctx.params)}`)
    // console.log(`ctx.request.body: ${JSON.stringify(ctx.request.body)}`)
    const shop_id = ctx.params.shop_id?.toLowerCase();

    if (shop_id == undefined) {
        ctx.status = 401;
        ctx.body = { error: `Prohibited Shop ID: ${shop_id}` };
        return
    } else {
        ctx.body = JSON.stringify({ shop_id }, null, 2);

        /**
         * id auto incremental
         * tts_notification_id
         * type
         * shop_id
         * timestamp
         * data
         * created_at current time
         * 
         * Sample data:
         * { "type": 1, "tts_notification_id": "7327112393057371910", "shop_id": "7494049642642441621", "timestamp": 1644412885, "data": { "order_id": "576486316948490001", "order_status": "UNPAID", "is_on_hold_order": false, "update_time": 1644412885 } }
         */

        // read the payload from the request body, save it to table
        const payload = ctx.request.body;
        // const payload = {
        //     tts_notification_id: "7327112393057371910",
        //     type: 1,
        //     shop_id: "7494049642642441621",
        //     timestamp: 1644412885,
        //     data: { "order_id": "576486316948490001", "order_status": "UNPAID", "is_on_hold_order": false, "update_time": 1644412885 }
        // }
        // console.log(`payload received:`)
        // console.log(payload);

        const values = [
            payload.tts_notification_id,
            payload.type,
            payload.shop_id,
            payload.timestamp,
            JSON.stringify(payload.data)
        ];

        const table_name = 'webhook_messages'
        const query = `INSERT INTO ${table_name} (tts_notification_id, type, shop_id, timestamp, data) VALUES (?, ?, ?, ?, ?)`;
        const [rows] = await pool.query(query, values);


        // const [rows] = await pool.query(
        //     `SELECT * FROM ${table_name} `,
        //     [1]
        // );

        console.log(rows);
    }
});




module.exports = router