const express = require("express");
const router = express.Router();

const MODEL = process.env.GEMINI_MODEL || "gemini-pro";
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.warn("GEMINI_API_KEY is not set. Gemini route will fail without it.");
}

router.post("/write", async (req, res) => {
  try {
    const { prompt, temperature = 0.2 } = req.body;

    if (!prompt || typeof prompt !== "string") {
      return res.status(400).json({ error: "Prompt is required." });
    }

    const url = `https://generativelanguage.googleapis.com/v1/models/${MODEL}:generateContent?key=${API_KEY}`;

    const body = {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    };

    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const text = await response.text();
      console.error("Gemini API error:", text);
      return res.status(500).json({ error: "Gemini upstream error", detail: text });
    }

    const data = await response.json();

    const outputText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      JSON.stringify(data);
    
      console.log(outputText)

    return res.json({
      success: true,
      output: outputText,
      raw: data
    });

  } catch (err) {
    console.error("Gemini Error:", err);
    res.status(500).json({ error: "Server error", detail: err.message });
  }
});

module.exports = router;
