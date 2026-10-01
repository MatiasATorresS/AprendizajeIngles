const OpenAI = require('openai');
const env = require('../config/env');

const SUBJECTS = new Set(['Simple Past', 'Past Continuous', 'Present Perfect', 'Past Simple Passive', 'Present Simple', 'Present Simple Passive']);
const DIFFICULTIES = new Set(['easy', 'medium', 'hard']);

function validExercise(item) {
  return item && typeof item.question === 'string' && item.question.trim() &&
    Array.isArray(item.alternatives) && item.alternatives.length === 4 &&
    item.alternatives.every((answer) => typeof answer === 'string' && answer.trim()) &&
    new Set(item.alternatives).size === 4 && item.alternatives.includes(item.correctAnswer);
}

async function chat(req, res) {
  const { subject, difficulty } = req.body || {};
  if (!SUBJECTS.has(subject) || !DIFFICULTIES.has(difficulty)) {
    return res.status(400).json({ message: 'Materia o dificultad inválida' });
  }
  if (!env.ai.openRouterApiKey) return res.status(503).json({ message: 'Generación no configurada' });

  try {
    const openai = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: env.ai.openRouterApiKey.replace(/"/g, ''),
    });

    const response = await openai.chat.completions.create({
      model: 'openai/gpt-3.5-turbo',
      messages: [{ role: 'user', content: `Create exactly 8 multiple-choice English exercises for first-year secondary students in Chile. Topic: ${subject}. Difficulty: ${difficulty}. Return only a JSON object with an "exercises" array. Each item must have a question, four distinct alternatives, and a correctAnswer equal to one alternative. No markdown.` }],
    });
    const raw = response.choices[0]?.message?.content || '';
    const data = JSON.parse(raw.replace(/^```(?:json)?\s*|\s*```$/g, '').trim());
    if (!Array.isArray(data.exercises) || data.exercises.length !== 8 || !data.exercises.every(validExercise)) {
      return res.status(502).json({ message: 'La IA devolvió ejercicios inválidos' });
    }
    req.session.pendingExercise = { subject, difficulty, questions: data.exercises };
    req.session.save((error) => {
      if (error) return res.status(500).json({ message: 'No se pudo guardar el ejercicio' });
      res.json({ exercises: data.exercises.map(({ question, alternatives }) => ({ question, alternatives })) });
    });
  } catch (err) {
    console.error('AI generation error:', err);
    res.status(502).json({ message: 'No se pudieron generar los ejercicios' });
  }
}

module.exports = { chat };
