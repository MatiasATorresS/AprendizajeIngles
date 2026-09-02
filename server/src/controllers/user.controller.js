const userService = require('../services/user.service');

function listUsers(req, res) {
  userService.listUsers((err, result) => {
    if (err) {
      console.error('Error fetching users:', err);
      res.status(500).send({ message: 'Error fetching users' });
      return;
    }
    res.status(200).json(result);
  });
}

module.exports = { listUsers };