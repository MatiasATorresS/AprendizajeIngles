const exerciseRepository = require('../repositories/exercise.repository');

function save({ attemptId, userId, subject, difficulty, questions, userAnswers, results, newScore }, callback) {
  exerciseRepository.create(
    attemptId,
    userId,
    subject,
    difficulty,
    JSON.stringify(questions),
    JSON.stringify(userAnswers),
    JSON.stringify(results),
    newScore,
    callback
  );
}

function getByUserId(userId, callback) {
  exerciseRepository.findByUserId(userId, callback);
}

module.exports = { save, getByUserId };
