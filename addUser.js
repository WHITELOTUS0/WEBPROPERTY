const mysql = require('mysql');
const db = require('bcrypt');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Bujumbura1#',
  database: 'propertyproject'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database!');
});

const user = {
    Names: 'John Doe',
    username: 'johndoe',
    password: 'password123',
    email: 'johndoe@example.com',
    telno: '1234567890'
  };

connection.query('INSERT INTO user SET ?', user, (err, result) => {
    if (err) throw err;
    console.log('User added successfully!');
    console.log('Inserted ID:', result.insertId);
});

connection.end((err) => {
    if (err) throw err;
    console.log('Connection closed.');
  });
  
  
