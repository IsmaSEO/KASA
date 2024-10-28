// src/pages/Home/Home.jsx
import React from "react";
import Banner from "../../components/Home/Banner";
import Logements from "../../components/Home/Logements";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <Banner 
        image="/bannerHeroHome.jpg"
        text="Chez vous, partout et ailleurs"
        /> {/* Bannière d'accueil */}
        <Logements /> {/* Liste des logements */}
      </div>
    </>
  );
}

export default Home;
