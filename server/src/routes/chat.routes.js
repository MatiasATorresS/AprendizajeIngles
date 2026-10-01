const express = require('express');
const chatController = require('../controllers/chat.controller');
const { requireAuth } = require('../middleware/auth.middleware');
const { chatByUserHour, chatByUserDay } = require('../middleware/rate-limit.middleware');

const router = express.Router();

router.post('/chat', requireAuth, chatByUserHour, chatByUserDay, chatController.chat);

module.exports = router;
