// src/pages/Home/Home.jsx
import React from "react";
import Logements from "../../components/Home/Logements";
import Banner from "../../components/Shared/Banner";
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
