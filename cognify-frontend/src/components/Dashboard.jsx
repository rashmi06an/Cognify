import React from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard-page">
      <div className="dashboard-hero">
        <div className="dashboard-avatar-card">
          <div className="avatar-circle" />
        </div>
        <div className="dashboard-welcome">
          <h1 className="dashboard-greeting">
            <span className="dashboard-greeting-highlight">Welcome</span> Champ!
          </h1>
          <h2 className="dashboard-title">
            Ready to discover your <span className="dashboard-title-highlight">perfect career</span> path?
          </h2>
          <p className="dashboard-subtitle">Let's Build Your Career Together!</p>
        </div>
      </div>

      <div className="dashboard-start">
        <p className="start-text">Let's get started with your Journey</p>
        <span className="start-arrow">→</span>
      </div>

      <section className="dashboard-grid-section">
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="dashboard-card-inner">
              <div className="card-icon card-icon--assessment" />
              <div className="card-content">
                <h3>Career Assessment</h3>
                <p>
                  Discover careers that match your interests and skills perfectly.
                </p>
                <button className="dashboard-card-btn">Take Assessment</button>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-card-inner">
              <div className="card-icon card-icon--scholarships" />
              <div className="card-content">
                <h3>Scholarships</h3>
                <p>
                  Explore scholarships from various platforms across the globe.
                </p>
                <button className="dashboard-card-btn">Explore Scholarships</button>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-card-inner">
              <div className="card-icon card-icon--college" />
              <div className="card-content">
                <h3>College Finder</h3>
                <p>
                  Find top-ranked colleges that align with your career goals.
                </p>
                <button className="dashboard-card-btn" onClick={() => navigate('/colleges')}>Find Colleges</button>
              </div>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-card-inner">
              <div className="card-icon card-icon--explorer" />
              <div className="card-content">
                <h3>Career Explorer</h3>
                <p>
                  Explore high-demand careers with salary insights and growth
                  projections.
                </p>
                <button className="dashboard-card-btn">Explore Careers</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lower dashboard */}

      <section className="dashboard-lower">
        <div className="quick-actions">
          <h2 className="quick-actions-title">Quick Actions</h2>

          <div className="quick-actions-grid">
            <div className="quick-action-card quick-action-card--scholarships">
              <div className="quick-action-text">
                <h3>Browse Scholarships</h3>
                <p>Get access to good scholarships from across India and globe.</p>
              </div>
              <div className="quick-action-visual quick-action-visual--right-glow" />
            </div>

            <div className="quick-action-sparkles">✱ ✱</div>

            <div className="quick-action-card quick-action-card--chat">
              <div className="quick-action-text">
                <h3>Chat with AI Expert</h3>
                <p>
                  Get the opportunity to chat with our AI Expert who will guide you
                  in your journey towards success.
                </p>
              </div>
              <div className="quick-action-visual quick-action-visual--left-glow" />
            </div>
            <div className="quick-action-sparkles">✱ ✱</div>
          </div>
        </div>

        <div className="journey-section">
          <h2 className="journey-title">Your Journey Progress So Far :</h2>

          <div className="journey-card">
            <div className="journey-steps">
              <p className="journey-steps-status">1 of 3 Completed</p>

              <div className="journey-step journey-step--completed">
                <div className="journey-step-icon" />
                <div className="journey-step-content">
                  <h3>Profile Created</h3>
                  <p>Welcome to CareerMap!</p>
                </div>
              </div>

              <div className="journey-step">
                <div className="journey-step-icon" />
                <div className="journey-step-content">
                  <h3>Career Assessment</h3>
                  <p>Take the quiz to get personalized recommendations.</p>
                  <button className="journey-step-btn">Take Assessment</button>
                </div>
              </div>

              <div className="journey-step journey-step--upcoming">
                <div className="journey-step-icon" />
                <div className="journey-step-content">
                  <h3>College Applications</h3>
                  <p>Coming up next.</p>
                </div>
              </div>
            </div>

            <div className="journey-progress">
              <div className="journey-progress-labels">
                <span>Overall Progress</span>
                <span>33%</span>
              </div>
              <div className="journey-progress-bar">
                <div className="journey-progress-fill" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
