import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <section className="hero-section">
        <div className="hero-left">
          <h1 className="hero-title">
            <span>Your </span>
            <span className="purple">Co-Pilot</span>
            <br />
            <span className="purple">For Success</span>
          </h1>

          <p className="hero-text">
            Confused about your stream?
            <br />Unsure which career fits you?
            <br />Cognify uses AI to map your aptitude, recommend careers,
            <br />find colleges and secure scholarships.
          </p>

          <button className="hero-btn">
            Choose Your Future with Confidence
            <span className="arrow">→</span>
          </button>
        </div>

        <div className="hero-right">
          <div className="orbit-container">
            <div className="orbit-rotation">
              {[...Array(8)].map((_, i) => (
                <div key={i} className="orbit-icon" style={{ transform: `rotate(${(360 / 8) * i}deg)` }}>
                  <div className="icon-block"></div>
                </div>
              ))}
            </div>

            <img
              src="/maingirl.png"
              alt="girl"
              className="girl-img"
            />
          </div>
        </div>
      </section>

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
