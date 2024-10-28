// src/components/About/Banner.jsx
import React from "react";
import "./Banner.css";

function Banner({ image, text }) {
  return (
    <div className="banner">
      <img
        className="banner-image"
        src={image}
        alt={image}
      />
      <h1 className="banner-text">{text}</h1>
    </div>
  );
}

export default Banner;