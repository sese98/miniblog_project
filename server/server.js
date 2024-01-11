// 라이브러리 불러오기
const express = require('express');
const path = require('path');
const app = express();

const port = 4000
app.get('/api/check', (req, res) => { res.send('전송 성공'); });


app.listen(port, () => console.log(port));

// const PORT = process.env.PORT || 4000;

// app.get('/', (req, res) => {
//   res.send(`Response Complate`);
// })

// const http = require('http').createServer(app);


// // 8080번 포트에서 서버를 실행할거야
// http.listen(8080, () => {
//   // 서버가 정상적으로 실행되면 콘솔창에 이 메시지를 띄워줘
//   console.log("Listening on 8080");
// });