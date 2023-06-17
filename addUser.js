// addUser.js
const bcrypt = require('bcrypt');
const db = require('./db');

const user = {
  Names: 'John Doe',
  username: 'johndoe',
  password: 'password123',
  email: 'johndoe@example.com',
  telno: '1234567890',
};

// Hash the password
bcrypt.hash(user.password, 10, (err, hashedPassword) => {
  if (err) {
    console.error('Error hashing password:', err);
    return;
  }

  // Store the user in the database
  const newUser = {
    Names: user.Names,
    username: user.username,
    password: hashedPassword,
    email: user.email,
    telno: user.telno,
  };

  const query = 'INSERT INTO user SET ?';
  db.query(query, newUser, (err, result) => {
    if (err) {
      console.error('Error adding user:', err);
      return;
    }
    console.log('User added successfully!');
    console.log('Result:', result);
  });
});
