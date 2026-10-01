const express = require('express');
const authController = require('../controllers/auth.controller');
const { loginByAccount, loginByIp, registerByIp } = require('../middleware/rate-limit.middleware');

const router = express.Router();

router.post('/register', registerByIp, authController.register);
router.get('/login', authController.getLogin);
router.post('/login', loginByIp, loginByAccount, authController.login);
router.get('/logout', authController.logout);

module.exports = router;
