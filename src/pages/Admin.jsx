// Admin.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/auth/all")
      .then(res => setUsers(res.data));

    axios.get("http://localhost:5000/api/products/pending")
      .then(res => setProducts(res.data));
  }, []);

  const approveUser = (id) => {
    axios.put(`http://localhost:5000/api/auth/approve/${id}`)
      .then(() => window.location.reload());
  };

  const approveProduct = (id) => {
    axios.put(`http://localhost:5000/api/products/approve/${id}`)
      .then(() => window.location.reload());
  };

  return (
    <div className="admin-layout">

      {/* SIDEBAR */}
      <div className="sidebar">
        <h2>SalesHub</h2>
        <p>Admin Panel</p>
        <ul>
          <li>Dashboard</li>
          <li>Users</li>
          <li>Products</li>
          <li>Settings</li>
        </ul>
      </div>

      {/* MAIN CONTENT */}
      <div className="main">

        {/* TOP BAR */}
        <div className="topbar">
          <input 
            placeholder="Search users..." 
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="admin-profile">👤 Admin</div>
        </div>

        {/* STATS */}
        <div className="stats">
          <div className="stat">Users: {users.length}</div>
          <div className="stat">Products: {products.length}</div>
          <div className="stat">Pending: {users.length + products.length}</div>
        </div>

        {/* USERS */}
        <h3>Pending Users</h3>
        <div className="grid">
          {users
            .filter(u => u.name.toLowerCase().includes(search.toLowerCase()))
            .map(u => (
              <div className="card" key={u._id}>
                <h4>{u.name}</h4>
                <p>{u.role}</p>
                <div className="btns">
                  <button onClick={() => approveUser(u._id)}>Approve</button>
                  <button className="reject">Reject</button>
                </div>
              </div>
            ))}
        </div>

        {/* PRODUCTS */}
        <h3>Pending Products</h3>
        <div className="grid">
          {products.map(p => (
            <div className="card" key={p._id}>
              <h4>{p.name}</h4>
              <p>₹{p.price}</p>
              <div className="btns">
                <button onClick={() => approveProduct(p._id)}>Approve</button>
                <button className="reject">Reject</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}