import test from 'node:test';
import assert from 'node:assert/strict';
import { parseExerciseResults, summarizeProgress } from '../src/utils/progress.js';

test('parses historic results and tolerates malformed records', () => {
  assert.equal(parseExerciseResults('[{"isCorrect":true}]').length, 1);
  assert.deepEqual(parseExerciseResults('{bad json'), []);
  assert.deepEqual(parseExerciseResults({ unexpected: true }), []);
});

test('compares difficulties by answer percentage and tracks dated attempts', () => {
  const exercises = [
    { id: 2, subject: 'Present Perfect', difficulty: 'hard', created_at: '2026-10-02', results: JSON.stringify([
      { isCorrect: true }, { isCorrect: false, category: 'participle' },
    ]) },
    { id: 1, subject: 'Present Perfect', difficulty: 'easy', created_at: '2026-10-01', results: JSON.stringify([
      { isCorrect: true }, { isCorrect: true },
    ]) },
  ];
  const progress = summarizeProgress(exercises);
  assert.equal(progress.percent, 75);
  assert.equal(progress.subjects[0].exercises, 2);
  assert.deepEqual(progress.subjects[0].attempts.map((item) => item.percent), [100, 50]);
  assert.deepEqual(progress.subjects[0].commonErrors[0], {
    category: 'participle', label: 'Participio', count: 1,
  });
});

test('legacy attempts count without inventing an error category', () => {
  const progress = summarizeProgress([{ id: 1, subject: 'Simple Past', results: '[{"isCorrect":false}]' }]);
  assert.equal(progress.subjects[0].percent, 0);
  assert.deepEqual(progress.subjects[0].commonErrors, []);
});
