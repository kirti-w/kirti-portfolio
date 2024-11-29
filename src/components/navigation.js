import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav className="navigation">
    <ul>
      <li>
        <Link to="/">Biography</Link>
      </li>
      <li>
        <Link to="/interests">Interests</Link>
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
);

export default Navigation;
