const exerciseService = require('../services/exercise.service');

function saveResults(req, res) {
  const userId = req.session.user[0].id;
  const { subject, difficulty, questions, userAnswers, results, newScore } = req.body;
  console.log('User ID:', userId);

  exerciseService.save(
    { userId, subject, difficulty, questions, userAnswers, results, newScore },
    (err) => {
      if (err) {
        console.error('Error al guardar los resultados:', err);
        res.status(500).send({ message: 'Error al guardar los resultados' });
        return;
      }
      console.log('Resultados guardados exitosamente');
      res.status(200).send({ message: 'Resultados guardados exitosamente' });
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