const db = require('../db/pool');

function create(userId, subject, difficulty, questionsJSON, userAnswersJSON, resultsJSON, newScore, callback) {
  db.query(
    'INSERT INTO user_exercises (user_id, subject, difficulty, questions, user_answers, results, score) VALUES (?, ?, ?, ?, ?, ?, ?)',
    [userId, subject, difficulty, questionsJSON, userAnswersJSON, resultsJSON, newScore],
    callback
  );
}

function findByUserId(userId, callback) {
  db.query('SELECT * FROM user_exercises WHERE user_id = ?', [userId], callback);
}

module.exports = { create, findByUserId };