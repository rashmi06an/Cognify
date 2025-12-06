import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;

    setLoading(true);

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        navigate("/dashboard");
      } else {
        alert(data.message || "Invalid credentials");
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-title">WELCOME BACK TO COGNIFY</h1>
        <div className="auth-divider" />
        <h2 className="auth-subtitle">Log in to continue your journey</h2>

        <form className="auth-form" onSubmit={handleLogin}>
          <div className="auth-row single">
            <input type="email" placeholder="Email" required />
          </div>
          <div className="auth-row single">
            <input type="password" placeholder="Password" required />
          </div>

          <div className="auth-meta">
            <label className="remember">
              <input type="checkbox" />
              <span>Remember me</span>
            </label>
            <button type="button" className="link-button">
              Forgot password?
            </button>
          </div>

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? (
              <div className="loader"></div>
            ) : (
              "Login"
            )}
          </button>

          <p className="auth-note">
            New to Cognify?{" "}
            <Link to="/signup" className="auth-link">
              Create new account
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
