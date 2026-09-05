// 发送一条文本消息（指定 key=name，已存在则更新）
const putMsg = async (body) => {
  const res = await fetch('https://app-space.okiedokie.work/room/0/messages', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  console.log(res.status, data);
  return data;
};

// 示例：指定 key 创建/更新
await putMsg({ op: 'add', type: 'text', content: 'hello', key: 'tokenx' });

// 示例：不指定 key，服务端自动生成
await putMsg({ op: 'add', type: 'text', content: 'no key' });

// 按 key 更新
await putMsg({ key: 'tokenx' }).then(async (m) => {
  const res = await fetch(`https://app-space.okiedokie.work/room/0/messages/${m.key}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: 'updated' }),
  });
  console.log(res.status, await res.json());
});

// 按 key 查询
const getByKey = async (key) => {
  const res = await fetch(`https://app-space.okiedokie.work/room/0/messages/${key}`);
  console.log(res.status, await res.json());
};
await getByKey('tokenx');