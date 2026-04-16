import React from 'react'
import { Route, Routes} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Admin from './pages/Admin';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';

export default function App() {
  return (
<div>
   <Navbar />
    <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/admin" element={<Admin/>} />
    </Routes>
    <Footer/>
    </div >
  )
}
