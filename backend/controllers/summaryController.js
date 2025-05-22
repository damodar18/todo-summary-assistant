const axios = require('axios');
const { OpenAI } = require('openai');
const Todo = require('../models/Todo');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

const sendToSlack = async (summary) => {
  try {
    await axios.post(process.env.SLACK_WEBHOOK_URL, {
      text: `📋 *Todo Summary*\n${summary}`
    });
  } catch (err) {
    console.error('Failed to send to Slack:', err.message);
  }
};

const generateSummary = async (todos) => {
  try {

    const prompt = `Summarize these pending todos concisely:\n${todos.map(t => `- ${t.text}`).join('\n')}`;
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });
    return response.choices[0].message.content;  // AI-generated summary
  } catch (err) {
    console.warn("OpenAI error:", err.message);

    return `${todos.map(t => `- ${t.text}`).join('\n')}`;  // Fallback summary
  }
};

const summarizeTodos = async (req, res) => {
  try {
    const pendingTodos = await Todo.find({ completed: false });

    if (!pendingTodos.length) {
      return res.status(400).json({ error: 'No pending todos!' });
    }


    const summary = await generateSummary(pendingTodos);


    await sendToSlack(summary); 

    res.json({ summary, success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



module.exports = { summarizeTodos };
