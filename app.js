const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

// create connection

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'vlad',
    password: '1234',
    database: 'test_db',
    port: 3306,
});

// Connect

db.connect((err) => {
  if(err) {
    throw err;
  }
  console.log('Database connected!');
});

// create db

app.get('/create', (req, res) => {
  // let sql = 'CREATE DATABASE nodemysql';
  
  let sql = 'SELECT * FROM test_table';

  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send(result);
  });
});

app.get('/add', (req, res) => {
  // let sql = 'CREATE DATABASE nodemysql';

  const data = { id: 3, name: 'Vlad', surname: 'Bielik' }
  
  let sql = 'INSERT INTO test_table SET ?';

  db.query(sql, data, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send('POST created!');
  })
});

app.get('/add/:id', (req, res) => { 
  let sql = `SELECT * FROM test_table WHERE id = ${req.params.id}`;

  db.query(sql, (err, result) => {
    if(err) throw err;
    console.log(result);
    res.send(result);
    // res.json({ res: 'result' });
  })
});

app.listen('3000', () => {
  console.log('Server started!');
})


// nodemon app.js