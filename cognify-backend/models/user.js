const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true,
    unique: true
  },

  password: {
    type: String,
    required: true
  },

  recommendation: {
    type: Object,
    default: null
  },

  // 🔥 NEW FIELD — store assessment completion status
  assessmentCompleted: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
