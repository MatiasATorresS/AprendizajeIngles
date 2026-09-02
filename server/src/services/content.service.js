const contentRepository = require('../repositories/content.repository');

function getUnidades(callback) {
  contentRepository.findAllUnits(callback);
}

function getMaterias(callback) {
  contentRepository.findMateriasWithUnidades(callback);
}

function getMateriaById(id, callback) {
  contentRepository.findMateriaById(id, (err, result) => {
    if (err) {
      callback(err, null);
      return;
    }
    callback(null, result.length === 0 ? null : result[0]);
  });
}

module.exports = { getUnidades, getMaterias, getMateriaById };