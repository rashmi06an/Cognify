import React from "react";
import "./ScholarshipPage.css";

export default function ScholarshipPage() {
  return (
    <div className="scholarship-page">
      <div className="bg-texture" />

      <header className="header">
        <h1>Scholarship Opportunities</h1>
        <p>Discover funding opportunities for your education</p>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="Search Scholarships..." />
        <select>
          <option>All Categories</option>
          <option>Academic</option>
          <option>Merit</option>
        </select>
      </div>

      <div className="grid">
        <div className="card card-full">
          <div className="card-content">
            <div className="left">
              <h2>National Merit Scholarship</h2>
              <p className="tags">Academic • Renewable</p>

              <p className="desc">
                Awarded to students who demonstrate exceptional academic ability
                and potential for success in rigorous college studies.
              </p>

              <div className="info">
                <div>
                  <label>Amount</label>
                  <p>$2,500 - $10,000</p>

                  <label className="small">Eligibility</label>
                  <p className="small">High PSAT scores, U.S. citizens</p>
                </div>

                <div>
                  <label>Deadline</label>
                  <p>October 15, 2026</p>
                </div>
              </div>

              <button className="apply-btn">Apply Now</button>
            </div>

            <div className="right-gradient"></div>
          </div>
        </div>

        {/* Right top card */}
        <div className="card empty"></div>

        {/* Bottom-left */}
        <div className="card empty"></div>

        {/* Bottom-right */}
        <div className="card empty"></div>
      </div>
    </div>
  );
}
