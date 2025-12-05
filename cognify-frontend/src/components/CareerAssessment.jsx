import React, { useState, useRef, useEffect } from "react";
import "./CareerAssessment.css";

const questions = [
  "What subjects or activities do you enjoy most?",
  "What skills do you feel you are strongest at?",
  "What kind of tasks give you energy — creative, analytical, or hands-on?",
  "Do you prefer working alone or collaborating with a team?",
  "What type of work environment do you prefer (structured, flexible, research-oriented, fast-paced)?",
  "Any preferences like budget, city, online/offline learning?"
];

const CareerAssessment = () => {
  const chatRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      type: "bot",
      text:
        "Hi! I'm your AI career counselor. Let's start with something simple: " +
        "What subjects or activities do you enjoy most in school or in your free time?"
    }
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [input, setInput] = useState("");
  const [answers, setAnswers] = useState({});


  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const updatedAnswers = {
      ...answers,
      [questions[currentQuestionIndex]]: input
    };

    setAnswers(updatedAnswers);

    setMessages((prev) => [...prev, { type: "user", text: input }]);
    setInput("");

    if (currentQuestionIndex === questions.length - 1) {
      setMessages((prev) => [
        ...prev,
        { type: "bot", text: "Analyzing your answers... Preparing personalized results!" }
      ]);

      const token = localStorage.getItem("token");

      if (!token) {
        alert("Session expired. Please log in again.");
        window.location.href = "/login";
        return;
      }

      try {
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/gemini/recommend`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          },
          body: JSON.stringify(updatedAnswers)
        });

        const data = await res.json();
        console.log("Gemini Response:", data);

        localStorage.setItem("careerResults", JSON.stringify(data));

        window.location.href = "/career-results";
      } catch (err) {
        console.log("Gemini error:", err);
        alert("Something went wrong. Try again.");
      }

      return;
    }

    const nextQuestion = questions[currentQuestionIndex + 1];
    setCurrentQuestionIndex((i) => i + 1);

    setMessages((prev) => [...prev, { type: "bot", text: nextQuestion }]);
  };

  return (
    <div className="career-assessment-page">
      <header className="career-assessment-header">
        <h1 className="career-assessment-title">Career Assessment</h1>
        <p className="career-assessment-subtitle">
          I'll ask you a few questions about your interests, strengths and goals to help identify careers
          that match your unique profile.
        </p>
      </header>

      <main className="career-assessment-main">
        <div className="assessment-card">

          <div className="assessment-orb-container">
            <div className="assessment-orb"></div>
            <div className="assessment-orb-glow"></div>
          </div>

          <h2 className="assessment-greeting">Hi! I am your AI Career Guide!</h2>

          <div className="assessment-chat-container" ref={chatRef}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={
                  msg.type === "bot"
                    ? "assessment-chat-bubble assessment-chat-bubble--left"
                    : "assessment-chat-bubble assessment-chat-bubble--right"
                }
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* FIXED INPUT BOX */}
          <div className="assessment-input-area">
            <input
              type="text"
              className="assessment-input"
              placeholder="Type your answer..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button className="input-send-btn" onClick={handleSend}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13" stroke="white" strokeWidth="2" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" />
              </svg>
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};

export default CareerAssessment;
