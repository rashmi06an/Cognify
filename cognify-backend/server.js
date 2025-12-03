const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const authRoutes = require("./routes/auth");
const geminiWriteRoute = require("./routes/gemini");
const recommendRoutes = require("./routes/recommend");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

// ==========================
// GLOBAL CORS FIX
// ==========================
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE, OPTIONS"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  if (req.method === "OPTIONS") {
    return res.sendStatus(204);
  }

  next();
});

app.use(express.json());

// ===============================
// API ROUTES
// ===============================
app.use("/api/auth", authRoutes);
app.use("/api/gemini", geminiWriteRoute);
app.use("/api/gemini", recommendRoutes);

// ===============================
// AUTH TEST ROUTE
// ===============================
app.get("/api/dashboard", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "Dashboard Access Granted",
    user: req.user,
  });
});

// ===============================
// DATABASE + SERVER START
// ===============================
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected");

    const PORT = process.env.PORT || 2000;

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log("MongoDB Error:", err));
