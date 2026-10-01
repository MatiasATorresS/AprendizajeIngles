const SUBJECTS = new Set([
  'Simple Past', 'Past Continuous', 'Present Perfect',
  'Past Simple Passive', 'Present Simple', 'Present Simple Passive',
]);
const DIFFICULTIES = new Set(['easy', 'medium', 'hard']);
const CATEGORIES = new Set([
  'verb_form', 'negation', 'question', 'participle', 'time_expression', 'other',
]);

function validSelection(subject, difficulty) {
  return SUBJECTS.has(subject) && DIFFICULTIES.has(difficulty);
}

function parseExercises(raw) {
  if (typeof raw !== 'string') throw new Error('Respuesta vacía');
  const data = JSON.parse(raw.replace(/^```(?:json)?\s*|\s*```$/gi, '').trim());
  if (!Array.isArray(data.exercises) || data.exercises.length !== 8) {
    throw new Error('Cantidad de preguntas inválida');
  }

  const seenQuestions = new Set();
  return data.exercises.map((item) => {
    if (!item || typeof item.question !== 'string' ||
        !Array.isArray(item.alternatives) || item.alternatives.length !== 4 ||
        typeof item.correctAnswer !== 'string' ||
        typeof item.category !== 'string' || !CATEGORIES.has(item.category)) {
      throw new Error('Estructura de pregunta inválida');
    }
    const question = item.question.trim();
    const alternatives = item.alternatives.map((value) => {
      if (typeof value !== 'string') throw new Error('Alternativa inválida');
      return value.trim();
    });
    const normalizedAnswers = alternatives.map((value) => value.toLocaleLowerCase('en'));
    const normalizedQuestion = question.toLocaleLowerCase('en');
    if (!question || question.length > 500 || seenQuestions.has(normalizedQuestion) ||
        alternatives.some((value) => !value || value.length > 250) ||
        new Set(normalizedAnswers).size !== 4) {
      throw new Error('Pregunta repetida o alternativa ambigua');
    }
    const correctIndex = normalizedAnswers.indexOf(item.correctAnswer.trim().toLocaleLowerCase('en'));
    if (correctIndex < 0) throw new Error('Respuesta correcta ausente');
    seenQuestions.add(normalizedQuestion);
    return { question, alternatives, correctAnswer: alternatives[correctIndex], category: item.category };
  });
}

module.exports = { validSelection, parseExercises };
