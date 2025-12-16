import Cloudflare from "cloudflare";
import 'dotenv/config';

const cf = new Cloudflare({ apiToken: process.env.CF_WORKER_KV_TOKEN });
// const ACCOUNT_ID = "843fdb3ac9b4943d77bd22adf9047672"
const ACCOUNT_ID = process.env.CF_ACCOUNT_ID;
const NS_TITLE = 'TUNNEL'

if(false)
{
  const t1 = await cf.kv.namespaces.keys.list(NAMESPACE_ID, {
    account_id: ACCOUNT_ID
  })

  console.log(t1.result)
}

if(false) {
  const t = await cf.kv.namespaces.values.get(NAMESPACE_ID, "yuning", {
    account_id: ACCOUNT_ID
  })
  const value = await t.text(); 
  console.log(value)
}

async function getValue(ns_id, key) {
  return await cf.kv.namespaces.values.get(ns_id, key, {
    account_id: ACCOUNT_ID
  })
}
async function getNamespaceByTitle(title) {
  const nss = await cf.kv.namespaces.list({ 
    account_id: process.env.CF_ACCOUNT_ID
  });
  console.log(nss.result)

  return nss.result.find(ns => ns.title === title)
}

async function main() {
  const ns_title = 'TUNNEL'
  const key = 'yuning'
  const ns = await getNamespaceByTitle(ns_title.toUpperCase())
  console.log(ns)

  const val = await getValue(ns.id, key.toLowerCase())
  console.log(await val.text())
}

main()