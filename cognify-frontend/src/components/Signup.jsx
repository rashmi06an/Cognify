import React from "react";
import "./Signup.css";

const Signup = () => {

  const handleSignup = async (e) => {
    e.preventDefault();

    const name = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    console.log("API URL:", import.meta.env.VITE_API_URL);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const text = await res.text();
      console.log("RAW RESPONSE:", text);

      const data = text ? JSON.parse(text) : {};

      if (res.ok) {
        alert("Signup successful! You can now log in.");
        e.target.reset();
      } else {
        alert(data.message || "Signup failed.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    }
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
            <input type="text" placeholder="Password" required />
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
