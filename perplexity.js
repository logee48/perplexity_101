// perplexity.js
const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.PERPLEXITY_API_KEY;

async function askPerplexity(prompt, context = '') {
  try {
    const response = await axios.post(
      'https://api.perplexity.ai/chat/completions',
      {
        model: 'sonar-pro',
        messages: [
          context ? { role: 'system', content: context } : null,
          { role: 'user', content: prompt }
        ].filter(Boolean)
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data.choices[0].message.content;
  } catch (err) {
    console.error('Perplexity API error:', err.response?.data || err.message);
    throw err;
  }
}

module.exports = { askPerplexity };
