import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const login = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", { email, password });
      if (res.data.role === "company") nav("/admin");
      else nav("/dashboard");
    } catch (err) {
      alert("Invalid login or not approved yet");
    }
    setLoading(false);
  };

  return (
    <div className="login-wrapper">

      {/* Animated Background */}
      <div className="bg-animation"></div>

      {/* LEFT SIDE */}
      <div className="login-image">
        <img 
          src="https://img.freepik.com/free-vector/business-team-discussing-ideas_74855-4380.jpg" 
          alt="sales" 
        />
      </div>

      {/* RIGHT SIDE */}
      <div className="login-container">

        <div className="glass-card">
          <h2 className="title">Welcome Back 👋</h2>
          <p className="subtitle">Login to continue your journey</p>

          <div className="input-box">
            <input 
              placeholder="Email" 
              onChange={e => setEmail(e.target.value)} 
            />
          </div>

          <div className="input-box">
            <input 
              type="password" 
              placeholder="Password" 
              onChange={e => setPassword(e.target.value)} 
            />
          </div>

          <button onClick={login} disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </button>

          <p className="signup-text">
            Don't have an account?
            <span onClick={() => nav("/signup")}> Signup</span>
          </p>
        </div>

      </div>
    </div>
  );
}