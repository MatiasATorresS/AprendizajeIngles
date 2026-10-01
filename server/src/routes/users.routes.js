const express = require('express');
const userController = require('../controllers/user.controller');
const { requireAdmin } = require('../middleware/auth.middleware');

const router = express.Router();

router.get('/users', requireAdmin, userController.listUsers);

module.exports = router;
