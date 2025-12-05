import React, { useEffect, useState } from "react";
import "./ScholarshipPage.css";

export default function ScholarshipPage() {
  const [scholarships, setScholarships] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadScholarships() {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          alert("Session expired. Please login again.");
          window.location.href = "/login";
          return;
        }

        const res = await fetch(`${import.meta.env.VITE_API_URL}/api/gemini/recommend`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();

        if (data.success && data.recommendation?.scholarships) {
          setScholarships(data.recommendation.scholarships);
        } else {
          setScholarships([]);
        }
      } catch (err) {
        console.error("Failed to load scholarships:", err);
        setScholarships([]);
      } finally {
        setLoading(false);
      }
    }

    loadScholarships();
  }, []);

  if (loading) {
    return (
      <div className="scholarship-page">
        <h2 style={{ textAlign: "center", color: "white" }}>Loading scholarships...</h2>
      </div>
    );
  }

  if (scholarships.length === 0) {
    return (
      <div className="scholarship-page">
        <h2 style={{ textAlign: "center", color: "white" }}>
          No scholarship recommendations available yet.
        </h2>
      </div>
    );
  }

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

        {/* Main Featured Scholarship — the FIRST item */}
        <div className="card card-full">
          <div className="card-content">
            <div className="left">
              <h2>{scholarships[0].title}</h2>
              <p className="tags">{scholarships[0].tags?.join(" • ")}</p>

              <p className="desc">{scholarships[0].description}</p>

              <div className="info">
                <div>
                  <label>Amount</label>
                  <p>{scholarships[0].amount}</p>

                  <label className="small">Eligibility</label>
                  <p className="small">{scholarships[0].eligibility}</p>
                </div>

                <div>
                  <label>Deadline</label>
                  <p>{scholarships[0].deadline}</p>
                </div>
              </div>

              <button className="apply-btn">Apply Now</button>
            </div>

            <div className="right-gradient"></div>
          </div>
        </div>

        {scholarships.slice(1).map((sch, index) => (
          <div className="card" key={index}>
            <div className="card-content small-card">
              <h3>{sch.title}</h3>
              <p className="tags">{sch.tags?.join(" • ")}</p>
              <p className="desc">{sch.description}</p>

              <div className="info small-info">
                <div>
                  <label>Amount</label>
                  <p>{sch.amount}</p>
                </div>

                <div>
                  <label>Deadline</label>
                  <p>{sch.deadline}</p>
                </div>
              </div>

              <button className="apply-btn small-btn">Apply</button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}
