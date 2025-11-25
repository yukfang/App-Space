const prisma = require('../../utils/prisma-client'); 

async function getAppInfo() {
  // Find a unique shop
  const app = await prisma.app.findUnique({
    where: {
      id: 2
    }
  });

  if (!app) {
    console.log("App not found");
    return null;
  }
  return app;
}

async function main() {
  const app = await getAppInfo();
  console.log(app);
}

main();