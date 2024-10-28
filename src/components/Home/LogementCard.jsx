// src/components/Home/LogementCard.jsx
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import "./LogementCard.css";

function LogementCard({ id, title, cover }) {
  return (
    <Link to={`/logement/${id}`} className="card-link">
      <div className="card">
        <img src={cover} alt={title} className="card-image" />
        <h3 className="card-title">{title}</h3>
      </div>
    </Link>
  );
}

LogementCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default LogementCard;
