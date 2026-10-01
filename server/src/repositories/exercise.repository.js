const db = require('../db/pool');

function create(attemptId, userId, subject, difficulty, questionsJSON, userAnswersJSON, resultsJSON, newScore, callback) {
  db.query(
    'INSERT INTO user_exercises (attempt_id, user_id, subject, difficulty, questions, user_answers, results, score) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
    [attemptId, userId, subject, difficulty, questionsJSON, userAnswersJSON, resultsJSON, newScore],
    callback
  );
}

function findByUserId(userId, callback) {
  db.query('SELECT * FROM user_exercises WHERE user_id = ?', [userId], callback);
}

module.exports = { create, findByUserId };
