// Footer.jsx
import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      {/* Top Section */}
      <div className="footer-top">
        
        <div className="footer-brand">
          <h2>Sales<span>Hub</span></h2>
          <p>Your smart platform for verified selling & earning.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/dashboard">Dashboard</a>
          <a href="/products">Products</a>
          <a href="/signup">Signup</a>
        </div>

        <div className="footer-links">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© 2026 SalesHub | All Rights Reserved</p>
      </div>

    </footer>
  );
}