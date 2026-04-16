// Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav-container">
      
      {/* Logo */}
      <div className="nav-logo">
        Sales<span>Hub</span>
      </div>

      {/* Links */}
      <div className={`nav-links ${open ? "show" : ""}`}>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/products">Products</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/">LogIn</Link>
        <Link to="/signup" className="signup-btn">SignUp</Link>
      </div>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <div className={open ? "line open" : "line"}></div>
        <div className={open ? "line open" : "line"}></div>
        <div className={open ? "line open" : "line"}></div>
      </div>

    </nav>
  );
}