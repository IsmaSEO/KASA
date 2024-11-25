// src/components/Logement/StarRating.jsx
import React from "react";
import "./StarRating.css";

function StarRating({ rating }) {
  const stars = Array(5).fill(0);

  return (
    <div className="star-rating">
      {stars.map((_, index) => (
        <i
          key={index}
          className={`fa-star ${index < rating ? "filled" : "empty"} fa`}
        ></i>
      ))}
    </div>
  );
}

export default StarRating;
