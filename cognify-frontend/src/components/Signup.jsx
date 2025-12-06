import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    setLoading(true);

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      if (res.ok) {
        alert("Signup successful! Redirecting to Login...");
        navigate("/login");
      } else {
        alert(data.message || "Signup failed.");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1 className="signup-title">JOIN THE COGNIFY COMMUNITY</h1>
        <div className="signup-divider" />
        <h2 className="signup-subtitle">Let's Build Your Career</h2>

        <form className="signup-form" onSubmit={handleSignup}>
          <div className="signup-row">
            <input type="text" placeholder="Enter Your Name" required />
          </div>

          <div className="signup-row">
            <input type="email" placeholder="Email" required />
          </div>

          <div className="signup-row">
            <input type="password" placeholder="Password" required />
          </div>

          <button type="submit" className="signup-btn" disabled={loading}>
            {loading ? <div className="loader"></div> : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
