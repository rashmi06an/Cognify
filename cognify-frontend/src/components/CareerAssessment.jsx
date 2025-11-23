import React from "react";
import "./CareerAssessment.css";

const CareerAssessment = () => {
  return (
    <div className="career-assessment-page">
      <header className="career-assessment-header">
        <h1 className="career-assessment-title">Career Assessment</h1>
        <p className="career-assessment-subtitle">
          I'll ask you a few questions about your interests, strengths and goals to help
          identify careers that match your unique profile.
        </p>
      </header>

      <main className="career-assessment-main">
        <div className="assessment-card">
          <div className="assessment-orb" />
          <h2 className="assessment-greeting">Hi! I am your AI Career Guide!</h2>
          <button className="assessment-start-btn">Start Assessment</button>

          <div className="assessment-chat-bubble assessment-chat-bubble--left">
            Hi! I'm your AI career counsellor. I'll help you discover your perfect career
            path through a few questions. Let's start with something simple: What
            subjects or activities do you enjoy most in school or in your free time?
          </div>

          <div className="assessment-chat-bubble assessment-chat-bubble--right">
            designing things
          </div>

          <footer className="assessment-footer">
            <p>Let's get you clarity on your career goals!</p>
          </footer>
        </div>
      </main>
    </div>
  );
};

export default CareerAssessment;
