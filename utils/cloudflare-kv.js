import Cloudflare from "cloudflare";
import 'dotenv/config';

const cf = new Cloudflare({ apiToken: process.env.CF_WORKER_KV_TOKEN });
const ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
const NAMESPACE_ID = "b9e37e326b5c4e3eaebc16fe4df1aa85";

async function run() {
  // 1. 列 key
  const keys = await cf.kv.namespaces.keys.list({
    account_id: process.env.CF_ACCOUNT_ID,
    namespace_id: NAMESPACE_ID,
  });

  console.log("Keys:", keys.result);

//   // 2. 循环读 value
//   for (const k of keys.result) {
//     const v = await cf.kv.namespaces.values.get({
//       account_id: ACCOUNT_ID,
//       namespace_id: NAMESPACE_ID,
//       key_name: k.name
//     });

    console.log(k.name, "=>", v);
}

run();




// await cf.kv.namespaces.putValue(
//   "b9e37e326b5c4e3eaebc16fe4df1aa85",
//   "KEY_SAMPLE",
//   "VALUE"
// );

// const value = await cf.kv.namespaces.getValue(
//   "b9e37e326b5c4e3eaebc16fe4df1aa85",
//   "yuning"
// );

const t = await cf.kv.namespaces.list({ account_id: process.env.CF_ACCOUNT_ID, });