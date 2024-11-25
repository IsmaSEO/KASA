// src/components/Logement/Carrousel.jsx
import React, { useState } from "react";
import "./Carrousel.css";

function Carrousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gestion du passage à l'image suivante
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Gestion du retour à l'image précédente
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carrousel">
      {images.length > 1 && (
        <>
          <button
            className="carrousel-arrow left"
            onClick={handlePrevious}
            aria-label="Image précédente"
          >
            ❮
          </button>
          <button
            className="carrousel-arrow right"
            onClick={handleNext}
            aria-label="Image suivante"
          >
            ❯
          </button>
        </>
      )}
      <div className="carrousel-image">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="carrousel-img"
        />
      </div>
      {images.length > 1 && (
        <div className="carrousel-counter">
          {currentIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

export default Carrousel;
