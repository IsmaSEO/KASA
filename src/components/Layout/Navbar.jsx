// src/components/Layout/Navbar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <header className="site-header">
      <nav className="site-nav">
        <div className="site-logo">
          <NavLink to="/">
            <img src="/logoKasa.svg" alt="Logo Kasa" />
          </NavLink>
        </div>
        <ul className="nav-list">
          <li className="nav-item">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              Accueil
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
            >
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
