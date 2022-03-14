const express = require('express');
const mysql = require('mysql');

// create connection


const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'vlad',
    password: '******',
    database: 'commdiva',
    port: 3306,
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
  // let sql = 'CREATE DATABASE nodemysql';
  
  let sql = 'SELECT * FROM user';

  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('db created!');
  })
});

app.listen('3000', () => {
  console.log('Server started!');
})


// nodemon app.js