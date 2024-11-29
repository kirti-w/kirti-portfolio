import React from "react";

const Home = () => (
  <section className="hero">
    <div className="intro">
      <h1>Hi, I'm Kirti</h1>
      <p>A Biologist-Turned-IT Enthusiast</p>
      <div className="hero-buttons">
        <a href="projects.html" className="btn">
          View My Projects
        </a>
        <a href="contact.html" className="btn btn-secondary">
          Contact Me
        </a>
      </div>
    </div>
    <img src="assets/profile.jpg" alt="Kirti" className="hero-img" />
  </section>
);

export default Home;
