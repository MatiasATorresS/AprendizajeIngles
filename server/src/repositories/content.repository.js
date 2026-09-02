const db = require('../db/pool');

function findAllUnits(callback) {
  db.query('SELECT * FROM unidades_ingles', callback);
}

function findMateriasWithUnidades(callback) {
  db.query(
    'SELECT materias.*, unidades.nombre AS unidad_nombre FROM materias_ingles materias JOIN unidades_ingles unidades ON materias.unidad_id = unidades.id',
    callback
  );
}

function findMateriaById(id, callback) {
  db.query('SELECT * FROM materias_ingles WHERE id = ?', [id], callback);
}

module.exports = { findAllUnits, findMateriasWithUnidades, findMateriaById };