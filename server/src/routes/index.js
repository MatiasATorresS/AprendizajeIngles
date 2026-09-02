const express = require('express');
const authRoutes = require('./auth.routes');
const usersRoutes = require('./users.routes');
const contentRoutes = require('./content.routes');
const exercisesRoutes = require('./exercises.routes');
const chatRoutes = require('./chat.routes');

const router = express.Router();

router.use(authRoutes);
router.use(usersRoutes);
router.use(contentRoutes);
router.use(exercisesRoutes);
router.use(chatRoutes);

module.exports = router;