import React from "react";
import "./CareerAssessment.css";

const CareerAssessment = () => {
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

          <div className="assessment-chat-container">
            <div className="assessment-chat-bubble assessment-chat-bubble--left">
              Hi! I'm your AI career counselor. I'll help you discover your perfect career
              path through a few questions. Let's start with something simple: What
              subjects or activities do you enjoy most in school or in your free time?
            </div>

            <div className="assessment-chat-bubble assessment-chat-bubble--right">
              designing things
            </div>
          </div>

          <div className="assessment-input-area">
            <span className="input-placeholder">Let's get you clarity on your career goals!</span>
            <button className="input-send-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CareerAssessment;
