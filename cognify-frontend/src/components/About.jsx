import React from "react";
import "./About.css"

export default function About() {
  return (
    <div className="about-page">

      {/* Background floating effects */}
      <div className="about-bg-orb orb1"></div>
      <div className="about-bg-orb orb2"></div>

      <header className="about-header">
        <h1>About Cognify</h1>
        <p>Your AI-powered guide to future careers, education & opportunities.</p>
      </header>

      <main className="about-content">

        {/* Mission Section */}
        <section className="about-card">
          <h2 className="section-title">Our Mission</h2>
          <p>
            Cognify is built with the vision of making career discovery simple,
            intelligent, and accessible for every learner. We combine 
            cutting-edge AI with real-world educational insights to help students 
            discover their strengths, explore opportunities, and make confident decisions.
          </p>
        </section>

        {/* Vision Section */}
        <section className="about-card">
          <h2 className="section-title">Our Vision</h2>
          <p>
            To empower millions of learners with personalized career guidance,
            real-time AI insights, and access to colleges, courses, and scholarships 
            that match their true potential.
          </p>
        </section>

        {/* What We Offer */}
        <section className="about-grid">
          <div className="about-grid-item">
            <h3>AI Career Matching</h3>
            <p>
              Understand your strengths and get tailored career paths through 
              intelligent, adaptive assessment powered by Gemini AI.
            </p>
          </div>
          <div className="about-grid-item">
            <h3>College Recommendations</h3>
            <p>
              Discover top universities, programs, and courses perfectly suited 
              to your academic goals and learning style.
            </p>
          </div>
          <div className="about-grid-item">
            <h3>Scholarship Finder</h3>
            <p>
              Access merit-based, need-based, and specialized scholarships that 
              match your background and aspirations.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="about-card team-card">
          <h2 className="section-title">Meet the Team</h2>
          <p>
            Cognify is built by a passionate team of developers, designers, and 
            educators driven to create the smartest AI career platform for students 
            around the world.
          </p>

          <div className="team-grid">
            <div className="team-member">
              <div className="team-avatar"></div>
              <h4>Vaageesh Singh</h4>
              <p>Founder & Lead Developer</p>
            </div>

            <div className="team-member">
              <div className="team-avatar"></div>
              <h4>AI Research Partner</h4>
              <p>AI & Model Integration</p>
            </div>

            <div className="team-member">
              <div className="team-avatar"></div>
              <h4>Product Designer</h4>
              <p>UI/UX & Experience Design</p>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
