const OpenAI = require('openai');
const { randomUUID } = require('node:crypto');
const env = require('../config/env');
const { validSelection, parseExercises } = require('../services/exercise-generation.service');

async function chat(req, res) {
  const { subject, difficulty } = req.body || {};
  if (!validSelection(subject, difficulty)) {
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
        messages: [{ role: 'user', content: `Create exactly 8 different multiple-choice English exercises for first-year secondary students in Chile. Topic: ${subject}. Difficulty: ${difficulty}. Return only a JSON object with an "exercises" array. Each item must have a question, four distinct nonempty alternatives, a correctAnswer equal to exactly one alternative, and one category chosen from: verb_form, negation, question, participle, time_expression, other. Choose the category that best describes the grammatical skill tested. Vary the wording and keep every alternative plausible. No markdown.` }],
      });
      try {
        questions = parseExercises(response.choices[0]?.message?.content);
        break;
      } catch (validationError) {
        console.warn(`AI exercise validation failed (attempt ${attempt + 1}): ${validationError.message}`);
      }
    }
    if (!questions) return res.status(502).json({ message: 'La IA devolvió ejercicios inválidos' });
    req.session.pendingExercise = { id: randomUUID(), subject, difficulty, questions };
    req.session.save((error) => {
      if (error) return res.status(500).json({ message: 'No se pudo guardar el ejercicio' });
      res.json({ exercises: questions.map(({ question, alternatives }) => ({ question, alternatives })) });
    });
  } catch (err) {
    console.error('AI generation error:', err);
    res.status(502).json({ message: 'No se pudieron generar los ejercicios' });
  }
}

module.exports = { chat };
