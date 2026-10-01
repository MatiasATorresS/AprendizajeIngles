const express = require('express');
const chatController = require('../controllers/chat.controller');
const { requireAuth } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/chat', requireAuth, chatController.chat);

module.exports = router;
