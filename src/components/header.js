import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImg from "../assets/logo.png";
import "../styles/header.css"; // Add a CSS file for styles

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-container">
        <h2 className="logo">
          <img src={logoImg} alt="logo" />
          <Link to="/kirti-portfolio">Kirti Wadhwani</Link>
        </h2>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <Link to="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link to="/resume" onClick={() => setIsMenuOpen(false)}>
              Resume
            </Link>
          </li>
          <li>
            <Link to="/gallery" onClick={() => setIsMenuOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
