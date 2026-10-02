const OpenAI = require('openai');
const { randomUUID } = require('node:crypto');
const env = require('../config/env');
const { validSelection, parseExercises } = require('../services/exercise-generation.service');

async function chat(req, res) {
  const { subject, difficulty, focusCategory } = req.body || {};
  if (!validSelection(subject, difficulty, focusCategory)) {
    return res.status(400).json({ message: 'Materia o dificultad inválida' });
  }
  if (!env.ai.openRouterApiKey) return res.status(503).json({ message: 'Generación no configurada' });

  try {
    const openai = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: env.ai.openRouterApiKey.replace(/"/g, ''),
    });

    let questions;
    for (let attempt = 0; attempt < 2; attempt += 1) {
      const response = await openai.chat.completions.create({
        model: 'openai/gpt-3.5-turbo',
        messages: [{ role: 'user', content: `Create exactly 8 different multiple-choice English exercises for first-year secondary students in Chile. Topic: ${subject}. Difficulty: ${difficulty}.${focusCategory ? ` Focus every question on the grammatical skill ${focusCategory}; set its category to ${focusCategory}.` : ''} Return only a JSON object with an "exercises" array. Each item must have a question, four distinct nonempty alternatives, a correctAnswer equal to exactly one alternative, one category chosen from: verb_form, negation, question, participle, time_expression, other, and a short explanation in Spanish of the grammar rule that makes the correct alternative right (maximum 400 characters). Check that the explanation matches the selected answer. Vary the wording and keep every alternative plausible. No markdown.` }],
      });
      try {
        questions = parseExercises(response.choices[0]?.message?.content);
        if (focusCategory && questions.some((question) => question.category !== focusCategory)) {
          throw new Error('Categoría de repaso inválida');
        }
        break;
      } catch (validationError) {
        console.warn(`AI exercise validation failed (attempt ${attempt + 1}): ${validationError.message}`);
      }
    }
    if (!questions) return res.status(502).json({ message: 'La IA devolvió ejercicios inválidos' });
    req.session.pendingExercise = { id: randomUUID(), subject, difficulty, questions };
    req.session.save((error) => {
      if (error) return res.status(500).json({ message: 'No se pudo guardar el ejercicio' });
      res.json({ id: req.session.pendingExercise.id,
        exercises: questions.map(({ question, alternatives }) => ({ question, alternatives })) });
    });
  } catch (err) {
    console.error('AI generation error:', err);
    res.status(502).json({ message: 'No se pudieron generar los ejercicios' });
  }
}

function getPending(req, res) {
  const pending = req.session.pendingExercise;
  if (!pending) return res.json({ pending: null });
  res.json({ pending: {
    id: pending.id, subject: pending.subject, difficulty: pending.difficulty,
    exercises: pending.questions.map(({ question, alternatives }) => ({ question, alternatives })),
  } });
}

module.exports = { chat, getPending };
