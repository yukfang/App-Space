const Router = require('koa-router');
const router = new Router({ prefix: '/login' });

// 模拟数据库用户表
const USERS = {
    "user1" : {
        name: "",
        password: "123",
        pageUrl: "https://www.qcreator.tech/browser.html",
        proxy: "socks5://127.0.0.1:1080"
    },
    "user2" : {
        name: "",
        password: "123",
        pageUrl: "https://www.qcreator.tech/browser.html",
        proxy: "socks5://127.0.0.1:1080"
    }
}

router.post('/', async (ctx) => {
  const { username, password } = ctx.request.body;
  console.log(`[Login] Attempt: ${username}`);

  /** check if USERS['Name1'] exists */
  const user = USERS[username]

  if (user && user.password === password) {
    const pageUrl = `https://www.qcreator.tech/${username}.html`;

    ctx.body = {
      success: true,
      user: {
        username: user.username,
        name: user.name,
        pageUrl,
        proxy: 'socks5://127.0.0.1:1080', 
      },
    };
  } else {
    ctx.body = { success: false, message: 'Invalid username or password' };
  }
});

module.exports = router;
