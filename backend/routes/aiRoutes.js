const express = require("express");
const router = express.Router();

// 🤖 MOCK AI DESCRIPTION
router.post("/suggest", async (req, res) => {
  try {
    const { title, company } = req.body;

    if (!title || !company) {
      return res.status(400).json({ error: "Title and Company required" });
    }

    res.json({
      suggestion: `${title} at ${company} is responsible for developing high-quality solutions, collaborating with cross-functional teams, and delivering scalable and efficient applications.`,
    });

  } catch (error) {
    console.error("Mock AI Suggest Error:", error);
    res.status(500).json({ error: "Mock AI failed" });
  }
});

// 🔥 MOCK AI MATCHING
router.post("/match", async (req, res) => {
  try {
    const { title, company, skills } = req.body;

    if (!title || !company || !skills) {
      return res.status(400).json({ error: "All fields required" });
    }

    res.json({
      result: `Match: 80%
Missing: Advanced ${title}, System Design
Suggestion: Improve hands-on projects and strengthen core concepts.`,
    });

  } catch (error) {
    console.error("Mock AI Match Error:", error);
    res.status(500).json({ error: "Mock AI match failed" });
  }
});

module.exports = router;