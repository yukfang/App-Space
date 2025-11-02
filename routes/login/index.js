const Router = require('koa-router');
const fs = require('fs')
const path = require('path');
const router = new Router({ prefix: '/login' });

const keyPath = path.join(__dirname, 'id_proxyuser.key.txt');
const key = fs.readFileSync(keyPath, 'utf8');

// 模拟数据库用户表
const USERS = {
    "user1@123" : {
        name: "user1",
        dstAddr: 'aws.my.002.qcreator.tech',
        dstPort: 22,
        sshUserName: 'proxyuser',
        privateKey: key,
        localPort: 7777,
        defaultPageUrl: "https://www.qcreator.tech/",
        profiles: [
            {name: "Shopee Shop 1"}, 
            {name: "Shopee Shop 2"}, 
        ]
    },
    "user2@456" : {
        name: "user2",
        dstAddr: '120.55.244.123',
        dstPort: 22,
        sshUserName: 'root',
        privateKey: key,
        localPort: 7777,
        defaultPageUrl: "https://www.qcreator.tech/",
        profiles: [
            {name: "Shopee Shop 3"}, 
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
