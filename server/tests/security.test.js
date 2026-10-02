const test = require('node:test');
const assert = require('node:assert/strict');
const { requireAuth, requireAdmin } = require('../src/middleware/auth.middleware');
const { gradeExercise } = require('../src/services/grading.service');
const { getPending } = require('../src/controllers/chat.controller');

function invoke(middleware, user) {
  const req = { session: user ? { user: [user] } : {} };
  const res = { status(code) { this.code = code; return this; }, send(body) { this.body = body; } };
  let nextCalled = false;
  middleware(req, res, () => { nextCalled = true; });
  return { code: res.code, nextCalled };
}

test('admin routes reject anonymous and regular users', () => {
  assert.equal(invoke(requireAdmin).code, 401);
  assert.equal(invoke(requireAdmin, { role: 'user' }).code, 403);
  assert.equal(invoke(requireAdmin, { role: 'admin' }).nextCalled, true);
  assert.equal(invoke(requireAuth, { role: 'user' }).nextCalled, true);
});

test('grade uses server answers and rejects incomplete or invalid submissions', () => {
  const pending = { difficulty: 'medium', questions: [
    { question: 'Q1', alternatives: ['a', 'b', 'c', 'd'], correctAnswer: 'b', category: 'negation', explanation: 'Se usa not para negar.' },
    { question: 'Q2', alternatives: ['a', 'b', 'c', 'd'], correctAnswer: 'c' },
  ] };
  assert.equal(gradeExercise(pending, { 0: 'b', 1: 'a' }).score, 2);
  assert.equal(gradeExercise(pending, { 0: 'b', 1: 'a' }).results[0].category, 'negation');
  assert.equal(gradeExercise(pending, { 0: 'b', 1: 'a' }).results[0].explanation, 'Se usa not para negar.');
  assert.equal(gradeExercise(pending, { 0: 'b' }), null);
  assert.equal(gradeExercise(pending, { 0: 'b', 1: 'fake' }), null);
});

test('pending exercise can be resumed without exposing answers or explanations', () => {
  const res = { json(body) { this.body = body; } };
  getPending({ session: {} }, res);
  assert.deepEqual(res.body, { pending: null });

  getPending({ session: { pendingExercise: {
    id: 'attempt-1', subject: 'Simple Past', difficulty: 'easy',
    questions: [{ question: 'Q1', alternatives: ['a', 'b'], correctAnswer: 'b',
      explanation: 'Porque corresponde a la regla.', category: 'verb_form' }],
  } } }, res);
  assert.deepEqual(res.body.pending.exercises, [{ question: 'Q1', alternatives: ['a', 'b'] }]);
  assert.equal(res.body.pending.id, 'attempt-1');
});
