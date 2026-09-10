import React, { useState } from "react";
import "./LoginForm.css";
import { FcGoogle } from "react-icons/fc";
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import { LuStethoscope } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom"; 

function LoginForm() {
  const [role, setRole] = useState("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const handleLogin = (e) => {
    e.preventDefault();
    if (role === "patient") {
      navigate("/dashboard");
    } else {
      navigate("/doctor/dashboard");
    }
  };

  return (
    <div className="login-form-container">
      <div className="form-wrapper">
        <div className="top-links">
          <a href="#">Terms of Service</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Notice of Non-Discrimination</a>
        </div>

        <div className="form-header">
          <h2>Welcome Back</h2>
          <p>Please enter your credentials to access your account</p>
        </div>

        <div className="role-tab-container">
          <button
            type="button"
            className={`role-tab ${role === "patient" ? "active" : ""}`}
            onClick={() => setRole("patient")}
          >
            <FiUser className="tab-icon" /> Patient
          </button>
          <button
            type="button"
            className={`role-tab ${role === "doctor" ? "active" : ""}`}
            onClick={() => setRole("doctor")}
          >
            <LuStethoscope className="tab-icon" /> Doctor
          </button>
        </div>

        <button type="button" className="google-signup-btn">
          <FcGoogle size={20} />
          Continue with Google
        </button>

        <div className="divider">
          <span>OR LOGIN WITH EMAIL</span>
        </div>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="l-input-field">
            <label htmlFor="email">Email Address</label>
            <div className="l-input-group">
              <FiMail className="field-icon" />
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="l-input-field">
            <label htmlFor="password">Password</label>
            <div className="l-input-group">
              <FiLock className="field-icon" />
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className={`submit-btn ${
              role === "patient" ? "primary-red" : "primary-blue"
            }`}
          >
            Sign in as {role === "patient" ? "Patient" : "Doctor"}
          </button>
        </form>

        <div className="form-footer">
          New here?{" "}
          <Link to="/signup" className="login-link">
            Create an account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;