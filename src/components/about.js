import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";

const About = () => (
  <section class="biography">
    <div class="bio-container">
      <h1>My Story</h1>
      <img src={profile} alt="Kirti" className="bio-photo" />

      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a Full Stack Developer with over 15 years of experience in
          designing and developing distributed, multi-tiered, and highly
          scalable systems. I am currently advancing my expertise by pursuing an
          <strong> M.S. in Software Development at Boston University</strong>.
          My expertise spans a wide range of Microsoft technologies, including{" "}
          <strong>.NET, MVC, C#, Microsoft Azure</strong>, as well as modern UI
          frameworks like <strong>Angular</strong> and <strong>React</strong>.
        </p>
        <p>
          After stepping into the IT world, I discovered my love for{" "}
          <strong>solving problems</strong>, <strong>building software</strong>,
          and learning new <strong>programming languages</strong>. My experience
          spans areas like <strong>web development</strong>,{" "}
          <strong>data analysis</strong>, and <strong>automation</strong>, all
          of which leverage my analytical mindset and attention to detail.
        </p>
      </section>

      <section id="personal">
        <h2>Beyond Work</h2>
        <p>
          Outside of work, I enjoy exploring hiking, listening to music and
          spending time with my family. I believe that{" "}
          <strong>continuous learning</strong> is the key to personal and
          professional growth, and I strive to expand my knowledge daily.
        </p>
        <p>
          Thank you for visiting my portfolio! Feel free to explore my projects,
          gallery, or get in touch via the
          <Link to="/contact"> Contact </Link> page.
        </p>
      </section>
    </div>
  </section>
);

export default About;
