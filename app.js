const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

// create connection

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'vlad',
  password: '1234',
  database: 'test_db',
  port: 3306,
});

// const db = mysql.createConnection({
//   host: '192.168.15.70',
//   user: 'dbi490368',
//   password: 'Asdfghjkl2002',
//   database: 'users',
//   port: 443,
// });

db.connect((err) => {
  if(err) {
    throw err;
  }
  console.log('Database connected!');
});

// create db

app.post('/register-user', (req, res) => {
  // console.log('REQUEST >>>>', req.body );

  const sql = 'INSERT INTO users SET ?';
  const { username, password, email } = req.body;
  const data = { username, password, email };

  db.query(sql, data, (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});

app.get('/get-user-data/:username', (req, res) => { 
  const sql = `SELECT * FROM users WHERE username = '${req.params.username}'`;

  console.log(req.params.username);

  db.query(sql, (err, result) => {
    if(err) throw err;
    res.send(result);
  })
});

app.get('/get-user-data', (req, res) => {
  
  const sql = 'SELECT * FROM users';

  db.query(sql, (err, result) => {
    if(err) throw err;
    res.send(result);
  });
});




//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// app.get('/add', (req, res) => {
//   // let sql = 'CREATE DATABASE nodemysql';

//   const data = { id: 3, name: 'Vlad', surname: 'Bielik' }
  
//   let sql = 'INSERT INTO test_table SET ?';

//   db.query(sql, data, (err, result) => {
//     if(err) throw err;
//     console.log(result);

//     res.send('POST created!');
//   })
// });

app.listen('3000', () => console.log('Server started!'));


// nodemon app.js