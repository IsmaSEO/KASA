// src/pages/About/About.jsx
import React from "react";
import Collapse from "../../components/About/Collapse";
import Banner from "../../components/Home/Banner";
import "./About.css";

const aboutData = [
  { title: "Fiabilité", content: "Les annonces postées sur Kasa garantissent une fiabilité totale." },
  { title: "Respect", content: "La bienveillance fait partie des valeurs fondatrices de Kasa." },
  { title: "Service", content: "Nos équipes sont à votre disposition pour une expérience parfaite." },
  { title: "Sécurité", content: "La sécurité est la priorité de Kasa." }
];

function About() {
  return (
    <div className="about-page">
      <Banner 
        image="/bannerHeroAbout.jpg"
      />
      <div className="about">
        {aboutData.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />
        ))}
      </div>
    </div>
  );
}

export default About;
