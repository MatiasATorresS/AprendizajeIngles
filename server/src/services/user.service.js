const userRepository = require('../repositories/user.repository');

function listUsers(callback) {
  userRepository.findAll(callback);
}

module.exports = { listUsers };