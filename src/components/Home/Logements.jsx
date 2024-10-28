// src/components/Home/Logements.jsx
import React from "react";
import logementsData from "../../data/logerments.json"; // Import du JSON
import LogementCard from "./LogementCard";
import "./Logements.css";

function Logements() {
  return (
    <div className="logements-list">
      {logementsData.map(({ id, title, cover }) => (
        <LogementCard key={id} id={id} title={title} cover={cover} />
      ))}
    </div>
  );
}

export default Logements;
