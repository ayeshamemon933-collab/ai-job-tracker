const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const OpenAI = require("openai");

const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
const jobRoutes = require("./routes/jobRoutes");
app.use("/api/jobs", jobRoutes);

// OpenAI setup
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
app.post("/api/ai-suggest", async (req, res) => {
  try {
    const { title, company } = req.body;

    const response = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "user",
          content: `Write a professional job description for ${title} role at ${company}`
        }
      ],
    });

    res.json({
      suggestion: response.choices[0].message.content,
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "AI failed" });
  }
});
app.get("/", (req, res) => {
  res.send("API is running...");
});
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});