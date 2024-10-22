// src/Router.js
import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// Import des pages
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Logement from "./pages/Logement/Logement";
import NotFound from "./pages/NotFound/NotFound";

// Import des composants de layout (Navbar et Footer)
import Footer from "./components/Layout/Footer";
import Navbar from "./components/Layout/Navbar";

// Styles CSS spécifiques (si nécessaire)
import "./components/Layout/Footer.css";
import "./components/Layout/Navbar.css";
import "./pages/Home/Home.css";

function AppRouter() {
  return (
    <Router>
      <div className="app-container">
        {/* Navbar visible sur toutes les pages */}
        <Navbar />

        {/* Définition des routes de l’application */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/logement/:id" element={<Logement />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* Footer visible sur toutes les pages */}
        <Footer />
      </div>
    </Router>
  );
}

export default AppRouter;
