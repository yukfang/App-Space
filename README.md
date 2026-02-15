# App Space 项目总览

本项目是一个基于 Node.js 和 Koa 的轻量服务集合，聚合了若干实用路由：第三方授权回调、令牌管理、Webhook 接收与持久化、反向代理、文件下载、IP 查询、VPN/隧道辅助等。代码入口与路由组织极简，便于在本地或云端快速部署。

## 技术栈
- Node.js + Koa/koa-router + koa-bodyparser
- HTTP 客户端：axios
- MySQL 访问：两种方式
  - 直连：mysql2/promise（用于 Webhook 消息落库）
  - ORM：Prisma（用于应用凭证等业务表）
- 配置管理：dotenv
- 反向代理：http-proxy-middleware

## 运行入口
- 启动点：[index.js](file:///Users/yukfang/yuk-fang-ws/App-Space/index.js)
- 应用装配与路由挂载：[koaApp.js](file:///Users/yukfang/yuk-fang-ws/App-Space/koaApp.js)

本地启动：
- `npm install`
- 准备 `.env`（见“环境变量”一节）
- `npm run start` 或 `npm run dev`，默认监听 `PORT`（未设置则为 80）

部署：
- GitHub Actions 已配置 Azure Web App 部署：
  - 生产流：[main_app-space.yml](file:///Users/yukfang/yuk-fang-ws/App-Space/.github/workflows/main_app-space.yml)
  - 开发流：[dev_app-space-dev.yml](file:///Users/yukfang/yuk-fang-ws/App-Space/.github/workflows/dev_app-space-dev.yml)

## 路由与模块
- Webhook
  - [routes/webhook/index.js](file:///Users/yukfang/yuk-fang-ws/App-Space/routes/webhook/index.js)
  - `ALL /webhook/tts/:shop_id`：接收 TikTok Shop Webhook，读取请求体并插入 MySQL 表 `webhook_messages`（需事先建表）。
- 授权回调
  - [routes/callback/handle.js](file:///Users/yukfang/yuk-fang-ws/App-Space/routes/callback/handle.js)
  - `GET /callback/tt4s?...`：调用 TikTok Shops 获取 access_token，写入 Prisma 表后按应用配置重定向。
  - 业务实现：[tt4s.js](file:///Users/yukfang/yuk-fang-ws/App-Space/routes/callback/tt4s.js)
- 令牌服务（TTS）
  - [routes/tokens/tts.js](file:///Users/yukfang/yuk-fang-ws/App-Space/routes/tokens/tts.js)
  - `GET /tokens/tts/:key`：按店铺配置刷新/缓存 Access Token，返回加密报文；持久化于本地磁盘。
  - 本地存储：[routes/storage/localdisk.js](file:///Users/yukfang/yuk-fang-ws/App-Space/routes/storage/localdisk.js)
- 反向代理
  - [routes/proxy/index.js](file:///Users/yukfang/yuk-fang-ws/App-Space/routes/proxy/index.js)
  - `ALL /proxy/webhook/pacsun(.*)` → `https://ads.tiktok.com/app_store/api/webhook/pacsun`
- 文件下载
  - [routes/file/download.js](file:///Users/yukfang/yuk-fang-ws/App-Space/routes/file/download.js)
  - `GET /file/download/:corp_id/:report_name`：从内置 `routes/file/reports` 目录按公司隔离提供下载。
- IP 查询
  - [routes/ip/myip.js](file:///Users/yukfang/yuk-fang-ws/App-Space/routes/ip/myip.js)
  - `GET /ip/:key`：代理查询当前出口 IP。
- VPN/订阅聚合
  - [routes/vpn/ssvmlist.js](file:///Users/yukfang/yuk-fang-ws/App-Space/routes/vpn/ssvmlist.js)
  - `GET /ssvmlist/:key`：根据环境变量聚合订阅信息并 Base64 返回。
- 简易登录
  - [routes/login/index.js](file:///Users/yukfang/yuk-fang-ws/App-Space/routes/login/index.js)：演示性用户匹配与隧道信息返回。

## 数据库与模型
- Prisma
  - Schema 定义：[prisma/schema.prisma](file:///Users/yukfang/yuk-fang-ws/App-Space/prisma/schema.prisma)
  - 生成客户端位置：[prisma/generated/clientdb](file:///Users/yukfang/yuk-fang-ws/App-Space/prisma/generated/clientdb/index.d.ts)
  - 使用入口：[utils/prisma-client.js](file:///Users/yukfang/yuk-fang-ws/App-Space/utils/prisma-client.js)
  - 核心模型：
    - `ApiCredential`：第三方授权令牌与授权信息
    - `Shop`：店铺信息（示例字段）
    - `App`：应用信息与回调重定向配置
- Webhook 专用库
  - Webhook 路由通过 `mysql2` 直接连接，连接信息来自 `WEBHOOK_DB_CFG`。
  - 需自建表：`webhook_messages`（包含 `tts_notification_id, type, shop_id, timestamp, data` 等字段）

## 环境变量
可参考 [.env_template](file:///Users/yukfang/yuk-fang-ws/App-Space/.env_template) 并在根目录创建 `.env`。关键项：
- 通用
  - `PORT`：服务端口，默认 80
  - `PLATFORM`：若为 `FAAS`，导出 `handler/initializer` 以适配 FaaS
  - `DEBUG_FLAG`：为 `true` 时在部分接口返回调试信息
  - `STORAGE_PATH`：本地缓存目录（默认 `./local_data/`）
- TikTok Shop 令牌
  - `SHOP_INFO_TTS_{SHOP}`：JSON 字符串，示例：
    ```
    SHOP_INFO_TTS_PACSUN={"app_key":"...","app_secret":"...","shop_cipher":"...","refresh_token":"...","encrypt_key":"..."}
    ```
- Webhook MySQL 连接（直连）
  - `WEBHOOK_DB_CFG`：JSON 字符串，示例：
    ```
    WEBHOOK_DB_CFG={"host":"...","port":3306,"user":"...","password":"...","database":"...","ssl":false}
    ```
- Prisma 连接（ORM）
  - `OPENAPI_TTS_DB_URL`：Prisma 使用的 MySQL 连接串（用于 ORM 相关表，如 `App`/`ApiCredential`）
    - 示例：`OPENAPI_TTS_DB_URL="mysql://user:pass@host:3306/dbname?ssl=false"`

## 本地运行与验证
1) 安装依赖：`npm install`  
2) 配置 `.env`（至少包含 `OPENAPI_TTS_DB_URL` 或 `WEBHOOK_DB_CFG` 中与所用路由相关的配置）  
3) 启动服务：`npm run start`  
4) 快速 smoke 测试：
   - `GET /ip/test` 查看出口 IP
   - `GET /file/download/7511947983685271557/Product-Level Customer Report 2025 July.xlsx` 验证下载
   - `GET /tokens/tts/PACSUN`（需配置对应 `SHOP_INFO_TTS_PACSUN`）
   - `ALL /webhook/tts/{shop_id}` 提交含 `tts_notification_id/type/...` 的 JSON 验证入库

## 目录速览
- 应用入口与装配：
  - [index.js](file:///Users/yukfang/yuk-fang-ws/App-Space/index.js)
  - [koaApp.js](file:///Users/yukfang/yuk-fang-ws/App-Space/koaApp.js)
- 路由：
  - [routes/](file:///Users/yukfang/yuk-fang-ws/App-Space/routes/)
- 数据访问与工具：
  - [utils/](file:///Users/yukfang/yuk-fang-ws/App-Space/utils/)
  - [prisma/](file:///Users/yukfang/yuk-fang-ws/App-Space/prisma/)
- 进程与部署：
  - [ecosystem.config.js](file:///Users/yukfang/yuk-fang-ws/App-Space/ecosystem.config.js)
  - [.github/workflows](file:///Users/yukfang/yuk-fang-ws/App-Space/.github/workflows)

## 注意事项
- 切勿提交任何真实密钥或数据库凭证到版本库。
- 生产环境请为 `WEBHOOK_DB_CFG/OPENAPI_TTS_DB_URL` 等敏感配置使用安全的密钥管理与注入方案。
- 回调、令牌与 Webhook 路由依赖外部系统，建议在开发环境使用最小权限的测试凭证与数据库。

