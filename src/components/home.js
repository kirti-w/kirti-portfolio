import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="hero">
    <div className="intro">
      <h2>Hey, I'm Kirti Wadhwani</h2>
      <p>
        Passionate Full Stack Developer with expertise in building dynamic,
        user-focused applications by seamlessly integrating front-end innovation
        and robust back-end architecture.
      </p>
      <div className="hero-buttons">
        <Link to="/about" className="btn">
          About Me
        </Link>
        <Link to="/contact" className="btn btn-secondary">
          Contact
        </Link>
      </div>
    </div>
  </div>
);

export default Home;
