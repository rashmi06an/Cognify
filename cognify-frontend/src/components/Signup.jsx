import React from "react";
import "./Signup.css";

const Signup = () => {
  return (
    <div className="signup-page">
      <div className="signup-card">
        <h1 className="signup-title">JOIN THE COGNIFY COMMUNITY</h1>
        <div className="signup-divider" />
        <h2 className="signup-subtitle">Lets Build Your  Career</h2>

        <form className="signup-form">
          <div className="signup-row">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
          </div>
          <div className="signup-row">
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone Number" />
          </div>
          <div className="signup-row">
            <input type="text" placeholder="Subject" />
          </div>
          <div className="signup-row">
            <textarea rows="4" placeholder="Tell Us Something..." />
          </div>

          <button type="submit" className="signup-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
