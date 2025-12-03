const express = require("express");
const router = express.Router();
const User = require("../models/user");
const authMiddleware = require("../middleware/authMiddleware");


router.get("/recommend", authMiddleware, async (req, res) => {
    console.log("Hit Fetch")
  try {
    const user = await User.findById(req.user.id);
    // console.log(user)

    if (!user || !user.recommendation) {
      return res.status(404).json({ 
        success: false, 
        message: "No recommendation found" 
      });
    }

    return res.json({
      success: true,
      recommendation: user.recommendation
    });

  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
});



router.post("/recommend", authMiddleware, async (req, res) => {
    console.log("HIt Post Gemini")
  try {
    const userId = req.user.id;
    const answers = req.body;

    const prompt = require("../prompts/recommendationPrompt")
      .replace("{{USER_INPUT}}", JSON.stringify(answers));

    const url = `https://generativelanguage.googleapis.com/v1/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`;

    const result = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }]
      }),
    });

    const data = await result.json();

    const outputText = data?.candidates?.[0]?.content?.parts?.[0]?.text;


    if (!outputText) {
      return res.status(500).json({ 
        error: "Gemini returned empty output", 
        raw: data 
      });
    }

    let parsedJson;
    try {
      parsedJson = JSON.parse(outputText);

    } catch (err) {
      return res.status(400).json({
        error: "Gemini returned invalid JSON",
        raw: outputText
      });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { $set: { recommendation: parsedJson } },
      { new: true }
    );


    return res.json({
      success: true,
      recommendation: updatedUser.recommendation
    });

  } catch (err) {
    return res.status(500).json({ 
      error: "Server error", 
      detail: err.message 
    });
  }
});

module.exports = router;
