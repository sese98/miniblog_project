const mysql = require('mysql');
const db = mysql.createPool({
  host : 'localhost',
  user : 'seyeon',
  password : '351447',
  database : 'react-test',
  port : 4000
})

module.exports = db;