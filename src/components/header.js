import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <h2 className="nav-links">
      <Link to="/kirti-portfolio">Kirti Wadhwani</Link>
    </h2>
    <nav>
      <ul className="nav-links">
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/resume">Resume</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
