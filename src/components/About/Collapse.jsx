// src/components/About/Collapse.jsx
import React, { useState } from "react";
import "./Collapse.css";

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={handleToggle}>
        <h2>{title}</h2>
        <i
          className={`fas fa-chevron-up chevron-icon ${isOpen ? "open" : ""}`}
        ></i>
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
