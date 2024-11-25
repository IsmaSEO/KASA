// src/components/Shared/Collapse.jsx
import React, { useState } from "react";
import "./Collapse.css";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <div
        className="collapse-header"
        onClick={handleToggle}
        onKeyPress={(e) => { if (e.key === "Enter" || e.key === " ") handleToggle(); }} // Gestion des touches
        role="button"
        tabIndex={0} // Rendre l'élément focusable
        aria-expanded={isOpen} // Indique si le contenu est ouvert
      >
        <h2>{title}</h2>
        <i className={`fas fa-chevron-up chevron-icon ${isOpen ? "open" : ""}`} aria-hidden="true"></i>
      </div>
      {isOpen && (
        <div className="collapse-content">
          {content}
        </div>
      )}
    </div>
  );
}

export default Collapse;
