import React, { useEffect, useState } from "react";
import "./CareerExplorer.css";

export default function CareerExplorer() {
  const [careers, setCareers] = useState([]);
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Fetch from Gemini recommendations OR fallback
    const stored = localStorage.getItem("careerResults");

    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const recommendations = parsed.recommendation || parsed;

        setCareers(recommendations.careers || []);
        setJobs(recommendations.jobOpportunities || []); // will add to prompt later
      } catch (err) {
        console.log("Error parsing:", err);
      }
    }
  }, []);

  return (
    <div className="career-explorer-page">

      {/* HEADER */}
      <header className="ce-header">
        <h1>Career Explorer</h1>
        <p>Discover top careers, skills, salaries, and job opportunities tailored for you.</p>
      </header>

      {/* ================================
           JOB OPPORTUNITIES SECTION
      ================================= */}
      <section className="job-section">
        <h2 className="section-title">🔥 Top Job Opportunities</h2>

        {jobs.length === 0 ? (
          <p className="no-jobs">Job opportunities will appear here after your assessment.</p>
        ) : (
          <div className="job-grid">
            {jobs.map((job, idx) => (
              <div className="job-card" key={idx}>
                <h3>{job.title}</h3>
                <p className="company">{job.company}</p>
                <p className="location">{job.location}</p>
                <p className="salary">{job.salary}</p>
                <button className="apply-btn">Apply Now</button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ================================
           CAREER PATHS
      ================================= */}
      <section className="career-section">
        <h2 className="section-title-head">🎯 Your Best Career Paths</h2>

        <div className="career-grid">
          {careers.map((career, index) => (
            <div className="career-card" key={index}>
              <h3>{career.title}</h3>
              <p className="match">Match: {career.matchPercentage}%</p>
              <p className="desc">{career.description}</p>

              <button className="explore-btn">Explore Role</button>
            </div>
          ))}
        </div>
      </section>

      {/* ================================
           SKILLS YOU NEED
      ================================= */}
      <section className="skills-section">
        <h2 className="section-title">🧠 Skills You Need</h2>

        <div className="skills-list">
          {careers.slice(0, 1).flatMap((c) => c.skillsRequired || []).length === 0 ? (
            <p>Skills will appear after completing your assessment.</p>
          ) : (
            careers[0].skillsRequired.map((skill, idx) => (
              <span className="skill-tag" key={idx}>{skill}</span>
            ))
          )}
        </div>
      </section>

      {/* ================================
           SALARY INSIGHTS
      ================================= */}
      <section className="salary-section">
        <h2 className="section-title">💰 Salary Insights</h2>

        <div className="salary-box">
          {careers[0]?.salaryRange ? (
            <>
              <p><strong>Average Salary:</strong> {careers[0].salaryRange.average}</p>
              <p><strong>Range:</strong> {careers[0].salaryRange.min} - {careers[0].salaryRange.max}</p>
            </>
          ) : (
            <p>Salary insights will appear after completing your assessment.</p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>Not sure where to start?</h2>
        <p>Take the AI-powered Career Assessment to discover your perfect career path.</p>

        <button className="cta-btn-explore" onClick={() => (window.location.href = "/career-assessment")}>
          Start Career Assessment
        </button>
      </section>

    </div>
  );
}
