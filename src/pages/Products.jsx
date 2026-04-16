// Products.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./products.css";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/api/products/all")
      .then(res => setProducts(res.data));
  }, []);

  const filtered = products.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="products-page">

      {/* HEADER */}
      <div className="products-header">
        <h2>Explore Products 🛍️</h2>
        <p>Choose products & start selling</p>

        {/* SEARCH */}
        <input
          className="search"
          placeholder="Search products..."
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* GRID */}
      <div className="products-grid">
        {filtered.length > 0 ? (
          filtered.map((p, index) => (
            <div
              className="product-card"
              key={p._id}
              style={{ animationDelay: `${index * 0.08}s` }}
            >

              {/* IMAGE */}
              <div className="product-img">
                <img
                  src="https://img.freepik.com/free-vector/product-quality-concept-illustration_114360-7301.jpg"
                  alt="product"
                />
              </div>

              {/* INFO */}
              <div className="product-info">
                <h3>{p.name}</h3>
                <p className="price">₹{p.price}</p>
                <p className="commission">{p.commission}% Commission</p>

                <button className="sell-btn">Sell Now</button>
              </div>

            </div>
          ))
        ) : (
          <div className="empty">
            <p>No products found 😕</p>
          </div>
        )}
      </div>

    </div>
  );
}