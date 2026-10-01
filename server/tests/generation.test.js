const test = require('node:test');
const assert = require('node:assert/strict');
const { validSelection, parseExercises } = require('../src/services/exercise-generation.service');

function response() {
  return { exercises: Array.from({ length: 8 }, (_, index) => ({
    question: `Question ${index + 1}?`,
    alternatives: ['A', 'B', 'C', 'D'],
    correctAnswer: 'B',
    category: 'verb_form',
  })) };
}

test('accepts only supported subjects and difficulties', () => {
  assert.equal(validSelection('Simple Past', 'easy'), true);
  assert.equal(validSelection('Other', 'easy'), false);
  assert.equal(validSelection('Simple Past', 'expert'), false);
});

test('parses valid questions and normalizes the correct answer', () => {
  const data = response();
  data.exercises[0].correctAnswer = ' b ';
  const questions = parseExercises(`\`\`\`json\n${JSON.stringify(data)}\n\`\`\``);
  assert.equal(questions.length, 8);
  assert.equal(questions[0].correctAnswer, 'B');
});

test('rejects duplicate questions and alternatives', () => {
  const duplicateQuestion = response();
  duplicateQuestion.exercises[1].question = ' question 1? ';
  assert.throws(() => parseExercises(JSON.stringify(duplicateQuestion)));

  const duplicateAnswer = response();
  duplicateAnswer.exercises[0].alternatives[1] = 'a';
  assert.throws(() => parseExercises(JSON.stringify(duplicateAnswer)));
});

test('rejects incomplete and mismatched AI output', () => {
  const data = response();
  data.exercises.pop();
  assert.throws(() => parseExercises(JSON.stringify(data)));
  data.exercises.push(response().exercises[7]);
  data.exercises[0].correctAnswer = 'Z';
  assert.throws(() => parseExercises(JSON.stringify(data)));
});

test('rejects categories outside the controlled vocabulary', () => {
  const data = response();
  data.exercises[0].category = 'anything';
  assert.throws(() => parseExercises(JSON.stringify(data)));
});
