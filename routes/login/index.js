const Router = require('koa-router');
const router = new Router({ prefix: '/login' });

// 模拟数据库用户表
const USERS = {
    "user1@123" : {
        name: "user1",
        dstAddr: '120.55.244.123',
        dstPort: 22,
        sshUserName: 'root',
        localPort: 7777,
        pageUrl: "https://www.qcreator.tech/user1.html",
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
        localPort: 7777,
        pageUrl: "https://www.qcreator.tech/user2.html",
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
