// Dashboard.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

export default function Dashboard() {
  const nav = useNavigate();
  const [dark, setDark] = useState(false);

  return (
    <div className={dark ? "dashboard dark" : "dashboard"}>

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>SalesHub</h2>
        <ul>
          <li onClick={() => nav("/dashboard")}>Dashboard</li>
          <li onClick={() => nav("/products")}>Products</li>
          <li>Sales</li>
        </ul>
      </div>

      {/* MAIN */}
      <div className="main-content">

        {/* TOPBAR */}
        <div className="topbar">
          <h3>Dashboard</h3>
          <div className="top-right">
            <button onClick={() => setDark(!dark)}>
              {dark ? "☀️" : "🌙"}
            </button>
            <div className="profile">👤 User</div>
          </div>
        </div>

        {/* HEADER */}
        <div className="dashboard-header">
          <div className="header-text">
            <h2>Welcome Back 👋</h2>
            <p>Track your sales & explore opportunities</p>
            <button onClick={() => nav("/products")}>
              Explore Products
            </button>
          </div>

          <div className="header-img">
            <img
              src="https://img.freepik.com/free-vector/business-growth-concept-illustration_114360-1718.jpg"
              alt="dashboard"
            />
          </div>
        </div>

        {/* STATS */}
        <div className="stats-section">
          <div className="stat-card">💰 ₹25,000<br />Total Earnings</div>
          <div className="stat-card">📦 12<br />Products Sold</div>
          <div className="stat-card">🔥 5<br />Active Deals</div>
        </div>

      </div>
    </div>
  );
}