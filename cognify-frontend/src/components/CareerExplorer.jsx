import React from "react";
import "./CareerExplorer.css";

export default function CareerExplorer() {
  return (
    <div className="coming-soon-page">
      <div className="coming-soon-container">
        
        <div className="coming-soon-glow"></div>

        <h1 className="coming-soon-title">Career Explorer</h1>

        <p className="coming-soon-subtitle">
          We're building something incredible for your future!
        </p>

        <div className="coming-soon-box">
          <p>
            Soon you'll be able to explore personalized career paths, salary insights, 
            industry trends, required skills, and real-time job opportunities tailored 
            just for YOU.
          </p>

          <p className="highlight">AI Powered • Personalized • Future-Ready</p>
        </div>

        <button
          className="coming-soon-btn"
          onClick={() => (window.location.href = "/dashboard")}
        >
          ← Back to Dashboard
        </button>

      </div>
    </div>
  );
}
