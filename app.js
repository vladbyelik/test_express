const express = require('express');
const mysql = require('mysql');

// create connection


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'test',
    port: 3000,
});

// Connect

db.connect((err) => {
  if(err) {
    throw err;
  }
  console.log('Database connected!');
});

const app = express();

// create db

app.get('/create', (req, res) => {
  let sql = 'CREATE DATABASE nodemysql';
  
  // let sql = 'SELECT * FROM users';

  db.query(sql, function(err, result) {
    if(err) throw err;
    console.log(result);
    res.send('db created!');
  })
});

app.listen('3000', () => {
  console.log('Server started!');
})