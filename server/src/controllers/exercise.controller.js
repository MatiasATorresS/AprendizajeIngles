const exerciseService = require('../services/exercise.service');
const { gradeExercise } = require('../services/grading.service');

function saveResults(req, res) {
  const userId = req.session.user[0].id;
  const { userAnswers } = req.body || {};
  const pending = req.session.pendingExercise;
  if (!pending?.id) return res.status(409).json({ message: 'Genera un ejercicio nuevo antes de responder' });
  const grade = gradeExercise(pending, userAnswers);
  if (!grade) {
    return res.status(400).json({ message: 'Respuestas inválidas o incompletas' });
  }
  const { subject, difficulty, questions } = pending;
  const { results, score: newScore } = grade;

  exerciseService.save(
    { attemptId: pending.id, userId, subject, difficulty, questions, userAnswers, results, newScore },
    (err) => {
      if (err) {
        if (err.code === 'ER_DUP_ENTRY') {
          return res.status(409).send({ message: 'Este ejercicio ya fue guardado' });
        }
        console.error('Error al guardar los resultados:', err);
        res.status(500).send({ message: 'Error al guardar los resultados' });
        return;
      }
      delete req.session.pendingExercise;
      req.session.save((sessionError) => {
        if (sessionError) return res.status(500).send({ message: 'Error al cerrar el ejercicio' });
        res.status(200).send({ message: 'Resultados guardados exitosamente', results, score: newScore });
      });
    }
  );
}

function getMyExercises(req, res) {
  const userId = req.session.user[0].id;

  exerciseService.getByUserId(userId, (err, result) => {
    if (err) {
      console.error('Error fetching user exercises:', err);
      res.status(500).send({ message: 'Error fetching user exercises' });
      return;
    }
    res.status(200).json(result);
  });
}

function adminGetUserExercises(req, res) {
  const userId = req.params.userId;

  exerciseService.getByUserId(userId, (err, result) => {
    if (err) {
      console.error('Error fetching user exercises:', err);
      res.status(500).send({ message: 'Error fetching user exercises' });
      return;
    }
    res.status(200).json(result);
  });
}

module.exports = { saveResults, getMyExercises, adminGetUserExercises };
