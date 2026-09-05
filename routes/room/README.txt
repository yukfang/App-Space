curl -X PUT http://localhost/room/0/messages \
  -H 'Content-Type: application/json' \
  -d '{"op":"add","type":"text","content":"Yuk FAng","key":"name"}'

  curl http://localhost/room/0/messages/name