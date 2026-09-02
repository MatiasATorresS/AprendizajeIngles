const express = require('express');
const exerciseController = require('../controllers/exercise.controller');
const { requireAuth } = require('../middleware/auth.middleware');

const router = express.Router();

router.post('/guardar-resultados', requireAuth, exerciseController.saveResults);
router.get('/user_exercises', requireAuth, exerciseController.getMyExercises);
router.get('/admin/user_exercises/:userId', exerciseController.adminGetUserExercises);

module.exports = router;