const contentService = require('../services/content.service');

function getUnidades(req, res) {
  contentService.getUnidades((err, unidades) => {
    if (err) {
      console.error('Error fetching English units:', err);
      res.status(500).send({ message: 'Error fetching English units' });
      return;
    }
    res.status(200).json({ unidades });
  });
}

function getMaterias(req, res) {
  contentService.getMaterias((err, materias) => {
    if (err) {
      console.error('Error fetching English materials:', err);
      res.status(500).send({ message: 'Error fetching English materials' });
      return;
    }
    res.status(200).json({ materias });
  });
}

function getMateriaById(req, res) {
  const materiaId = req.params.id;

  contentService.getMateriaById(materiaId, (err, materia) => {
    if (err) {
      console.error('Error fetching English material:', err);
      res.status(500).send({ message: 'Error fetching English material' });
      return;
    }

    if (!materia) {
      res.status(404).send({ message: 'Material not found' });
      return;
    }

    res.status(200).json({ materia });
  });
}

module.exports = { getUnidades, getMaterias, getMateriaById };