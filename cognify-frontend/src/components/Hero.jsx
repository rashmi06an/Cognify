import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      {/* Main Hero Section */}
      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content">
          <h1>Your <span className="gradient-text">Co-Pilot</span><br />For Success</h1>
          <p className="hero-subtitle">Confused about your stream?<br />Unsure which career fits you?</p>
          <p className="hero-description">
            Cognify uses AI to map your aptitude, recommend careers,<br />find colleges and secure scholarships.
          </p>
          <button className="hero-btn">Choose Your Future with Confidence <span>→</span></button>
        </div>

        {/* Right Visual */}
        <div className="hero-visual">
          <div className="hero-glow"></div>
          <div className="hero-illustration">
            <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg" className="neon-illustration">
              {/* Outer circles */}
              <circle cx="200" cy="200" r="180" fill="none" stroke="url(#neonGradient)" strokeWidth="2" opacity="0.3" />
              <circle cx="200" cy="200" r="140" fill="none" stroke="url(#neonGradient)" strokeWidth="1.5" opacity="0.2" />
              
              {/* Define gradient */}
              <defs>
                <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#8176AF" />
                  <stop offset="100%" stopColor="#C0B7E8" />
                </linearGradient>
              </defs>
              
              {/* Central figure */}
              <circle cx="200" cy="210" r="30" fill="none" stroke="#8176AF" strokeWidth="2" />
              <path d="M 190 190 L 210 190 M 200 190 L 200 210" stroke="#C0B7E8" strokeWidth="2" />
              
              {/* Surrounding icon boxes */}
              <rect x="80" y="80" width="35" height="35" rx="5" fill="none" stroke="#8176AF" strokeWidth="2" opacity="0.6" />
              <rect x="285" y="80" width="35" height="35" rx="5" fill="none" stroke="#8176AF" strokeWidth="2" opacity="0.6" />
              <rect x="285" y="285" width="35" height="35" rx="5" fill="none" stroke="#8176AF" strokeWidth="2" opacity="0.6" />
              <rect x="80" y="285" width="35" height="35" rx="5" fill="none" stroke="#8176AF" strokeWidth="2" opacity="0.6" />
              
              {/* Connection lines */}
              <path d="M 115 97 L 180 160" stroke="#8176AF" strokeWidth="1.5" opacity="0.4" fill="none" />
              <path d="M 285 97 L 220 160" stroke="#8176AF" strokeWidth="1.5" opacity="0.4" fill="none" />
              <path d="M 115 303 L 180 240" stroke="#8176AF" strokeWidth="1.5" opacity="0.4" fill="none" />
              <path d="M 285 303 L 220 240" stroke="#8176AF" strokeWidth="1.5" opacity="0.4" fill="none" />
            </svg>
          </div>
        </div>
      </div>

      {/* Problem Cards Section */}
      <div className="problem-section">
        <h2 className="section-title">The Problem Students Face <span className="title-arrow">→</span></h2>
        <p className="problem-subtitle">Every year, thousands of students struggle with critical decisions that shape their future</p>
        
        <div className="problem-cards">
          <div className="problem-card">
            <h3>CONFUSION AT STREAM SELECTION</h3>
            <p>45% of students choose streams based on peer pressure, not aptitude</p>
          </div>
          <div className="problem-card">
            <h3>Limited College Information</h3>
            <p>70% don't research colleges properly, leading to mismatched admissions</p>
          </div>
          <div className="problem-card">
            <h3>Career Uncertainty</h3>
            <p>Lack of guidance on career options aligned with their strengths</p>
          </div>
          <div className="problem-card">
            <h3>Scholarship Gaps</h3>
            <p>Many miss out on scholarships due to lack of awareness</p>
          </div>
        </div>
      </div>

      {/* Journey Section */}
      <div className="journey-section">
        <h2 className="section-title">YOUR JOURNEY <span className="title-arrow">→</span></h2>
        <div className="journey-container">
          <div className="journey-item">
            <div className="journey-number">01</div>
            <p className="journey-label">Profile Created</p>
          </div>
          <div className="journey-connector"></div>
          <div className="journey-item">
            <div className="journey-number">02</div>
            <p className="journey-label">Career Assessment Quiz</p>
          </div>
          <div className="journey-connector"></div>
          <div className="journey-item">
            <div className="journey-number">03</div>
            <p className="journey-label">Explore Colleges</p>
          </div>
          <div className="journey-connector"></div>
          <div className="journey-item">
            <div className="journey-number">04</div>
            <p className="journey-label">Scholarships</p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="services-section">
        <h2 className="section-title">WHAT ALL WE PROVIDE <span className="title-arrow">→</span></h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon">📚</div>
            <h3>EDUCATION</h3>
            <p>Visit expert professional resources to enhance skills and discover educational opportunities</p>
          </div>
          <div className="service-card">
            <div className="service-icon">💼</div>
            <h3>CAREER GUIDANCE</h3>
            <p>Personalized career paths aligned with your strengths and market demand</p>
          </div>
          <div className="service-card">
            <div className="service-icon">🎓</div>
            <h3>COLLEGE MATCHING</h3>
            <p>Find the perfect colleges that match your profile and aspirations</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Your Future Starts Here</h2>
        <p>Stop guessing. Start planning.<br />Join thousands of students who've found their path with Cognify.</p>
        <div className="cta-button-container">
          <button className="cta-btn">Get Started</button>
        </div>
      </div>
    </section>
  )
}

export default Hero
