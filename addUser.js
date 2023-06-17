const mysql = require('mysql');

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
