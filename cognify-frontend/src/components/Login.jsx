import React from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // In a real app, we would validate credentials here
    navigate("/dashboard");
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

          <button type="submit" className="auth-btn">
            Login
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
