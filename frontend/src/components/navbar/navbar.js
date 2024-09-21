import React from "react";
import "../navbar/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="#" className="logo">
          Kapada
        </a>
      </div>
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/womens">Women's</Link>
        </li>
        <li>
          <a href="#">Men's</a>
        </li>
        <li>
          <a href="#">Kids</a>
        </li>

        <li>
          <a href="#">Contact</a>
        </li>
      </ul>
      <div className="navbar-icons">
        <a href="#" className="login">
          Login / Register
        </a>
        <a href="#" className="search-icon">
          <i className="fas fa-search"></i>
        </a>
        <a href="#" className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
