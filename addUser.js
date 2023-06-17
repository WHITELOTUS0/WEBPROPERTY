const bcrypt = require('bcrypt');
const db = require('./db');

const user = {
  Names: 'Glorry',
  username: 'whitelotus',
  password: 'password123',
  email: 'glorry@example.com',
  telno: '1234567890',
};

function checkEmailExists(email) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM user WHERE email = ?';
    db.query(query, [email], (error, results) => {
      if (error) reject(error);
      else resolve(results && results.length > 0);
    });
  });
}

checkEmailExists(user.email)
  .then((emailExists) => {
    if (emailExists) {
      console.log('Email already exists. User not saved.');
      return;
    }

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
  })
  .catch((error) => {
    console.error('Error checking email existence:', error);
  });
