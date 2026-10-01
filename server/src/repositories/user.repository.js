const db = require('../db/pool');

function findByEmail(email, callback) {
  db.query('SELECT * FROM login WHERE email = ?', [email], callback);
}

function create(username, email, passwordHash, callback) {
  db.query(
    'INSERT INTO login (username, email, password) VALUES (?, ?, ?)',
    [username, email, passwordHash],
    callback
  );
}

function findAll(callback) {
  db.query('SELECT id, username, email, role FROM login', callback);
}

module.exports = { findByEmail, create, findAll };
