const OpenAI = require('openai');
const env = require('../config/env');

async function chat(req, res) {
  const { prompt } = req.body;

  try {
    const openai = new OpenAI({
      baseURL: 'https://openrouter.ai/api/v1',
      apiKey: env.ai.openRouterApiKey.replace(/"/g, ''),
    });

    const stream = await openai.chat.completions.create({
      model: 'openai/gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      stream: true,
    });

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');

    for await (const chunk of stream) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        res.write(content);
      }
    }

    res.end();
  } catch (err) {
    console.error('AI Error:', err);
    res.status(500).send({ error: err.message, stack: err.stack });
  }
}

module.exports = { chat };