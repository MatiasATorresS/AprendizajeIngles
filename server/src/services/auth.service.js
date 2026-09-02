const bcrypt = require('bcrypt');
const userRepository = require('../repositories/user.repository');

const saltRounds = 10;

function register({ username, email, password }, callback) {
  bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
      callback(err, null);
      return;
    }
    userRepository.create(username, email, hash, callback);
  });
}

function login(email, password, callback) {
  userRepository.findByEmail(email, (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }
    if (result.length === 0) {
      callback(null, { user: null, match: false });
      return;
    }
    bcrypt.compare(password, result[0].password, (compareError, match) => {
      if (compareError) {
        callback(compareError, null);
        return;
      }
      callback(null, { user: result, match });
    });
  });
}

module.exports = { register, login };