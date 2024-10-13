import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure to import your CSS

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">IMR MART</div>
      <div className="navbar-items">
        <span className="hm-icon-label">All</span> 
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="search-button">Search</button>
        <Link to="/login" className="navbar-button">Login</Link>
        <Link to="/show-now" className="navbar-button">Show Now</Link>
        <Link to="/cart" className="navbar-button">Cart</Link>
        <Link to="/orders" className="navbar-button">Your Orders</Link> 
        <Link to="/contact" className="navbar-button">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;