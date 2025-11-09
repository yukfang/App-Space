const Router = require('koa-router');
const fs = require('fs')
const path = require('path');
const router = new Router({ prefix: '/login' });

const keyPath = path.join(__dirname, 'id_proxyuser.key');
const key = fs.readFileSync(keyPath, 'utf8');

// 模拟数据库用户表
const USERS = {
    "xinxin@XinXin2025" : {
        name: "XinXin",
        dstAddr: 'aws.my.002.qcreator.tech',
        dstPort: 22,
        sshUserName: 'proxyuser',
        privateKey: key,
        localPort: 7777,
        profiles: [
            {id: 1, name: "XinXin 1", defaultUrl: 'https://seller.shopee.com.my'}, 
            {id: 2, name: "XinXin 2", defaultUrl: 'https://seller.shopee.com.my'}, 
        ]
    },
    "dan@Dan_ksmy" : {
        name: "Dan",
        dstAddr: 'aws.tw.002.qcreator.tech',
        dstPort: 22,
        sshUserName: 'proxyuser',
        privateKey: key,
        localPort: 6666,
        profiles: [
            {id: 1, name: "Shopee Shop TW", defaultUrl: 'https://seller.shopee.com'}, 
        ]
    }
}

router.post('/', async (ctx) => {
  const { username, password } = ctx.request.body;
  console.log(`[Login] Attempt: ${username}`);

  /** check if USERS['Name1'] exists */
  const userinfo = USERS[`${username}@${password}`]

  if (userinfo) {
    ctx.body = {
      success: true,
      user: userinfo
    };
  } else {
    ctx.body = { success: false, message: 'Invalid username or password' };
  }
});

module.exports = router;
