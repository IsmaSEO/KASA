// src/components/Layout/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav">
        <div className="site-logo">
          <Link to="/">
            <img src="/logoKasa.svg" alt="Logo Kasa" />
          </Link>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">À Propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
