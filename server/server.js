// 라이브러리 불러오기
import express from "express"
import mysql from "mysql"

const app = express();
// json 데이터 받기 위해
app.use(express.json());

//db정보
// const db = mysql.createConnection({
//   host: "127.0.0.1",
//   user: "codingrecipe",
//   password: "1234",
//   port: "8000",
//   database: "codingrecipe"
// });

const db = mysql.createConnection({
  host: "127.0.0.1",
  user: "seyeon",
  password: "flqj351^^",
  port: "3306",
  database: "test"
});

db.connect(err => {
  console.log("db 연결 성공");
  console.log("err", err);
})


const port = 8000
app.listen(port, () => {
  console.log(`${port} 서버 호출`) // 잘 호출되는지 확인
})

//기본 주소 요청
app.get("/", () => {
  console.log("기본주소요청")
});

app.get("/hello", () => {
  console.log("hello주소요청")
});

app.get("/qs", (request) => {
  console.log(request.query.p1);
})

app.post("/hello", () => {
  console.log("hello post");
})

app.post("/post-req", (req) => {
  console.log(req.body, "post-req post");
  const { name, age } = req.body;
  console.log(name,age,"post")
})


// const express = require('express');
// const path = require('path');

// const port = 4000
// app.get('/api/check', (req, res) => { res.send('전송 성공'); });

// app.listen(port, () => console.log(port));




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