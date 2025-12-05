import React, { useEffect, useState } from "react";
import "./CareerResults.css";

import ibmImg from "../assets/defaultCollege.png";
import bitsImg from "../assets/defaultCollege.png";
import iimImg from "../assets/defaultCollege.png";
import iiitImg from "../assets/defaultCollege.png";
import iitDelhiImg from "../assets/defaultCollege.png";

const imageMap = {
  "IBM.jpg": ibmImg,
  "BitsPilani.png": bitsImg,
  "IIM_Ahmedabad_New.jpg": iimImg,
  "IIIT_Hyderabad.png": iiitImg,
  "IIT_Delhi.png": iitDelhiImg,
};

const CareerResults = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadResults() {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          alert("Session expired. Please login again.");
          window.location.href = "/login";
          return;
        }

        console.log(token)
        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/gemini/recommend`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          throw new Error("Unable to fetch results");
        }

        const result = await res.json();

        if (!result.success) {
          alert(result.message || "Could not load results");
          return;
        }

        setData(result.recommendation);

      } catch (err) {
        console.error(err);
        alert("Could not load your career recommendations. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadResults();
  }, []);

  if (loading) {
    return (
      <div className="career-results-page">
        <h2 style={{ textAlign: "center", color: "white" }}>Loading results...</h2>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="career-results-page">
        <h2 style={{ textAlign: "center", color: "white" }}>No results found.</h2>
      </div>
    );
  }

  const {
    careers = [],
    featuredCollege = {},
    colleges = [],
    scholarships = [],
  } = data;

  return (
    <div className="career-results-page">
      <div className="career-results-container">

        {/* CAREER MATCHES */}
        <section className="career-matches-section">
          <h2 className="section-title">Your Top Career Matches</h2>

          <div className="career-cards-grid">
            {careers.map((career, index) => (
              <div className="career-card" key={index}>
                <div className="career-card-icon software-eng-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24">
                    <path
                      d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"
                      stroke="currentColor"
                      strokeWidth="2"
                    />
                  </svg>
                </div>

                <h3>
                  {career.title} ({career.matchPercentage}%)
                </h3>
                <p>{career.description}</p>
                <button className="explore-path-btn">Explore Path</button>
              </div>
            ))}
          </div>
        </section>

        {/* FEATURED COLLEGE */}
        <section className="featured-college-section">
          <h2 className="section-title">
            Featured College: {featuredCollege.name || "Top Match"}
          </h2>

          <div className="featured-card">
            <div className="featured-image-container">
              <div
                className="featured-image-placeholder"
                style={{
                  backgroundImage: `url(${
                    imageMap[featuredCollege.image] || iitDelhiImg
                  })`,
                }}
              >
                <span>{featuredCollege.name}</span>
              </div>
            </div>

            <div className="featured-details">
              <div className="rank-badge">{featuredCollege.rank || "Rank N/A"}</div>

              <div className="featured-info-grid">
                <div className="info-item">
                  <span className="info-label">Cut-off:</span>
                  <span className="info-highlight">{featuredCollege.cutoff || "—"}</span>
                </div>

                <div className="info-item">
                  <span className="info-label">Fees:</span>
                  <span className="info-highlight">{featuredCollege.fees || "—"}</span>
                </div>
              </div>

              <div className="career-fit-info">
                <span className="info-label">Career Fit:</span>
                <p>{featuredCollege.careerFit?.join(", ") || "—"}</p>
              </div>

              <div className="popular-courses-info">
                <span className="info-label">Popular Courses:</span>
                <p>{featuredCollege.popularCourses?.join(", ") || "—"}</p>
              </div>

              <button className="view-details-btn">View Details & Apply</button>
            </div>
          </div>
        </section>

        {/* COLLEGES LIST */}
        <section className="college-grid-section">
          <div className="college-grid">
            {colleges.map((college, index) => (
              <div className="college-card" key={index}>
                <div
                  className="college-image-placeholder"
                  style={{
                    backgroundImage: `url(${imageMap[college.image] || ibmImg})`,
                  }}
                />

                <div className="college-card-content">
                  <h3>{college.name}</h3>
                  <span className="college-tag">{college.tag}</span>

                  <div className="college-stats">
                    <div>
                      Cut-off: <strong>{college.cutoff}</strong>
                    </div>
                    <div>
                      Fees: <strong>{college.fees}</strong>
                    </div>
                  </div>

                  <button className="card-view-btn">View Details</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SCHOLARSHIPS */}
        {/* <section className="scholarships-section">
          <h2 className="section-title">Recommended Scholarships</h2>

          <div className="scholarship-list">
            {scholarships.map((sch, index) => (
              <div className="scholarship-card" key={index}>
                <h3>{sch.title}</h3>
                <p className="tags">{sch.tags?.join(" • ")}</p>
                <p className="desc">{sch.description}</p>

                <div className="info">
                  <div>
                    <label>Amount</label>
                    <p>{sch.amount}</p>
                  </div>
                  <div>
                    <label>Deadline</label>
                    <p>{sch.deadline}</p>
                  </div>
                </div>

                <p className="eligibility">
                  <strong>Eligibility:</strong> {sch.eligibility}
                </p>

                <button className="explore-path-btn">Apply Now</button>
              </div>
            ))}
          </div>
        </section> */}

      </div>
    </div>
  );
};

export default CareerResults;
