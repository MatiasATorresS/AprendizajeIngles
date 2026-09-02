const express = require('express');
const contentController = require('../controllers/content.controller');

const router = express.Router();

router.get('/unidades_ingles', contentController.getUnidades);
router.get('/materias_ingles', contentController.getMaterias);
router.get('/materias_ingles/:id', contentController.getMateriaById);

module.exports = router;