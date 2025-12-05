import React, { useState, useEffect } from "react";
import "./Dashboard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import imgCareerAssessment from "../assets/career_assesment.png";
import imgScholarship from "../assets/scholarship.png";
import imgCollegeFinder from "../assets/college_finder.png";
import imgCareerExplorer from "../assets/career_explorer.png";

const Dashboard = () => {
  const navigate = useNavigate();

const [assessmentDone, setAssessmentDone] = useState(false);

useEffect(() => {
  async function dashAuth() {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/api/dashboard`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      if (response.status === 200) {
        setAssessmentDone(response.data.user.assessmentCompleted === true);
      } else {
        navigate("/");
      }

    } catch (err) {
      console.error(err);
      navigate("/");
    }
  }

  dashAuth();
}, []);


  const handleProtectedNavigation = (path) => {
    if (!assessmentDone) {
      alert("Please complete the Career Assessment first!");
      navigate("/career-assessment");
    } else {
      navigate(path);
    }
  };

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

          {/* Career Assessment */}
          <div className="dashboard-card">
            <div className="dashboard-card-inner">
              <img src={imgCareerAssessment} alt="Career Assessment" className="card-icon" />
              <div className="card-content">
                <h3>Career Assessment</h3>
                <p>Discover careers that match your interests and skills perfectly.</p>

                <button className="dashboard-card-btn" onClick={() => navigate("/career-assessment")}>
                  {assessmentDone ? "Retake Assessment" : "Take Assessment"}
                </button>
              </div>
            </div>
          </div>

          {/* Scholarships */}
          <div className="dashboard-card">
            <div className="dashboard-card-inner">
              <img src={imgScholarship} alt="Scholarships" className="card-icon" />
              <div className="card-content">
                <h3>Scholarships</h3>
                <p>Explore scholarships from various platforms across the globe.</p>

                <button
                  className="dashboard-card-btn"
                  onClick={() => handleProtectedNavigation("/scholarships")}
                >
                  Explore Scholarships
                </button>
              </div>
            </div>
          </div>

          {/* Colleges */}
          <div className="dashboard-card">
            <div className="dashboard-card-inner">
              <img src={imgCollegeFinder} alt="College Finder" className="card-icon" />
              <div className="card-content">
                <h3>College Finder</h3>
                <p>Find top-ranked colleges that align with your career goals.</p>

                <button
                  className="dashboard-card-btn"
                  onClick={() => handleProtectedNavigation("/colleges")}
                >
                  Find Colleges
                </button>
              </div>
            </div>
          </div>

          {/* Career Explorer */}
          <div className="dashboard-card">
            <div className="dashboard-card-inner">
              <img src={imgCareerExplorer} alt="Career Explorer" className="card-icon" />
              <div className="card-content">
                <h3>Career Explorer</h3>
                <p>Explore high-demand careers with salary insights and growth projections.</p>

                <button
                  className="dashboard-card-btn"
                  onClick={() => handleProtectedNavigation("/careers")}
                >
                  Explore Careers
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>


      <section className="dashboard-lower">
        <div className="quick-actions">
          <h2 className="quick-actions-title">Quick Actions</h2>

          <div className="quick-actions-grid">
            {/* Scholarships Quick Action */}
            <div className="quick-action-card quick-action-card--scholarships">
              <div className="quick-action-text">
                <h3>Browse Scholarships</h3>
                <p>Get access to good scholarships from across India and globe.</p>

                <button
                  className="quick-action-btn"
                  onClick={() => handleProtectedNavigation("/scholarships")}
                >
                  Explore Scholarships →
                </button>
              </div>

              <div className="quick-action-visual quick-action-visual--right-glow" />
            </div>

            {/* AI Chat (No Button) */}
            <div className="quick-action-card quick-action-card--chat">
              <div className="quick-action-visual quick-action-visual--left-glow" />
              <div className="quick-action-text">
                <h3>Chat with AI Expert</h3>
                <p>AI expert guidance coming soon!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Journey Section */}
        <div className="journey-section">
          <h2 className="journey-title">Your Journey Progress So Far :</h2>

          <div className="journey-card">
            <div className="journey-steps">
              <p className="journey-steps-status">
                {assessmentDone ? "2 of 3 Completed" : "1 of 3 Completed"}
              </p>

              <div className="journey-step journey-step--completed">
                <div className="journey-step-icon" />
                <div className="journey-step-content">
                  <h3>Profile Created</h3>
                  <p>Welcome to CareerMap!</p>
                </div>
              </div>

              {/* Career Assessment Step */}
              <div className={`journey-step ${assessmentDone ? "journey-step--completed" : ""}`}>
                <div className="journey-step-icon" />
                <div className="journey-step-content">
                  <h3>Career Assessment</h3>
                  <p>Take the quiz to get personalized recommendations.</p>

                  {!assessmentDone && (
                    <button
                      className="journey-step-btn"
                      onClick={() => navigate("/career-assessment")}
                    >
                      Take Assessment
                    </button>
                  )}
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

            {/* Progress Bar */}
            <div className="journey-progress">
              <div className="journey-progress-labels">
                <span>Overall Progress</span>
                <span>{assessmentDone ? "66%" : "33%"}</span>
              </div>
              <div className="journey-progress-bar">
                <div
                  className="journey-progress-fill"
                  style={{ width: assessmentDone ? "66%" : "33%" }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
