// send a text message (with key=name it updates the existing one)
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

// example: create/update with an explicit key
await putMsg({ op: 'add', type: 'text', content: 'hello', key: 'tokenx' });

// example: no key, the server generates one
await putMsg({ op: 'add', type: 'text', content: 'no key' });

// update by key
await putMsg({ key: 'tokenx' }).then(async (m) => {
  const res = await fetch(`https://app-space.okiedokie.work/room/0/messages/${m.key}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: 'updated' }),
  });
  console.log(res.status, await res.json());
});

// get by key
const getByKey = async (key) => {
  const res = await fetch(`https://app-space.okiedokie.work/room/0/messages/${key}`);
  console.log(res.status, await res.json());
};
await getByKey('tokenx');