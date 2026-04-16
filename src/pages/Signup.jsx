// Signup.jsx
import React, { useState } from "react";
import axios from "axios";
import "./signup.css";

export default function Signup() {
  const [data, setData] = useState({});

  const submit = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/signup", data);
      alert("Submitted for approval");
    } catch (err) {
      alert("Error submitting form");
    }
  };

  return (
    <div className="signup-wrapper">

      {/* LEFT IMAGE SIDE */}
      <div className="signup-left">
        <img
          src="https://img.freepik.com/free-vector/business-deal-concept-illustration_114360-1573.jpg"
          alt="signup"
        />
        <div className="overlay-text">
          <h2>Join SalesHub 🚀</h2>
          <p>Connect • Sell • Earn</p>
        </div>
      </div>

      {/* RIGHT FORM */}
      <div className="signup-right">
        <div className="form-box">
          <h2>Create Account</h2>
          <p>Start your journey today</p>

          <input
            placeholder="Full Name"
            onChange={e => setData({ ...data, name: e.target.value })}
          />

          <input
            placeholder="Email Address"
            onChange={e => setData({ ...data, email: e.target.value })}
          />

          <input
            type="password"
            placeholder="Password"
            onChange={e => setData({ ...data, password: e.target.value })}
          />

          <select onChange={e => setData({ ...data, role: e.target.value })}>
            <option value="owner">Product Owner</option>
            <option value="salesperson">Salesperson</option>
          </select>

          <button onClick={submit}>Submit</button>
        </div>
      </div>

    </div>
  );
}