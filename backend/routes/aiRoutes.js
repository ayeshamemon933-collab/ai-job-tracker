const express = require("express");
const router = express.Router();
const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// 🤖 AI Description
router.post("/suggest", async (req, res) => {
  try {
    const { title, company } = req.body;

    if (!title || !company) {
      return res.status(400).json({ error: "Title and Company required" });
    }

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Write a professional job description for ${title} role at ${company}`,
        },
      ],
    });

    res.json({
      suggestion: response.choices[0].message.content,
    });

  } catch (error) {
    console.error("AI Suggest Error:", error);
    res.status(500).json({ error: "AI failed" });
  }
});

// 🔥 AI Matching
router.post("/match", async (req, res) => {
  try {
    const { title, company, skills } = req.body;

    if (!title || !company || !skills) {
      return res.status(400).json({ error: "All fields required" });
    }

    const prompt = `
You are an AI job matching assistant.

Job Role: ${title}
Company: ${company}
User Skills: ${skills}

Analyze and return:
1. Match Score (in %)
2. Missing Skills
3. Short suggestion

Format strictly like:
Match: XX%
Missing: skill1, skill2
Suggestion: ...
`;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    res.json({
      result: response.choices[0].message.content,
    });

  } catch (error) {
    console.error("AI Match Error:", error);
    res.status(500).json({ error: "AI match failed" });
  }
});

module.exports = router;