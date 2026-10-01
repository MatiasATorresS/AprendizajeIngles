const test = require('node:test');
const assert = require('node:assert/strict');
const db = require('../src/db/pool');
const repository = require('../src/repositories/exercise.repository');
const exerciseService = require('../src/services/exercise.service');
const { saveResults } = require('../src/controllers/exercise.controller');

test('repository inserts a unique attempt id with each result', () => {
  const original = db.query;
  try {
    db.query = (sql, params, callback) => {
      assert.match(sql, /attempt_id/);
      assert.equal(params[0], 'attempt-123');
      callback(null, { insertId: 1 });
    };
    repository.create('attempt-123', 1, 'Simple Past', 'easy', '[]', '{}', '[]', 0, (error) => {
      assert.equal(error, null);
    });
  } finally {
    db.query = original;
  }
});

test('duplicate database key returns conflict without deleting pending exercise', async () => {
  const original = exerciseService.save;
  exerciseService.save = (_data, callback) => callback({ code: 'ER_DUP_ENTRY' });
  try {
    const pendingExercise = {
      id: 'attempt-123', subject: 'Simple Past', difficulty: 'easy',
      questions: [{ question: 'Q', alternatives: ['a', 'b', 'c', 'd'], correctAnswer: 'a' }],
    };
    const req = { session: { user: [{ id: 1 }], pendingExercise }, body: { userAnswers: { 0: 'a' } } };
    const res = { status(code) { this.code = code; return this; }, send(body) { this.body = body; } };
    saveResults(req, res);
    assert.equal(res.code, 409);
    assert.equal(req.session.pendingExercise, pendingExercise);
  } finally {
    exerciseService.save = original;
  }
});
