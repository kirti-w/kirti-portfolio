import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.jpg";
import "../styles/about.css";

const About = () => (
  <section className="biography">
    <div className="bio-container">
      <h1>My Story</h1>
      <img src={profile} alt="Kirti" className="bio-photo" />

      <section id="about">
        <h2>About Me</h2>
        <p>
          Hello, I’m <strong>Kirti</strong>, a{" "}
          <strong>Senior Full Stack .NET Developer</strong> with over{" "}
          <strong>15 years of experience</strong> designing and delivering
          enterprise-grade software solutions. I’ve worked with organizations
          ranging from startups to large multinational enterprises across
          domains such as{" "}
          <strong>Finance, Government, and Healthcare/Pharmacy</strong>, helping
          teams build{" "}
          <strong>scalable, secure, and maintainable applications</strong>.
        </p>

        <p>
          My technical expertise centers around{" "}
          <strong>Microsoft technologies</strong> including{" "}
          <strong>
            .NET, C#, ASP.NET MVC, Web API, Microservices, and Microsoft Azure
          </strong>
          , along with modern front-end frameworks like <strong>Angular</strong>
          . I enjoy working across the full stack—translating complex business
          requirements into <strong>clean, reliable code</strong> while
          continuously improving{" "}
          <strong>performance, architecture, and developer experience</strong>.
        </p>

        <p>
          Originally from <strong>India</strong>, I moved to{" "}
          <strong>North America</strong> in 2018 and am currently based in{" "}
          <strong>Rochester, NY</strong>. I’m also advancing my technical and
          architectural foundation by pursuing an{" "}
          <strong>M.S. in Software Development</strong> at{" "}
          <strong>Boston University</strong>.
        </p>

        <p>
          What drives me most is <strong>problem-solving</strong>—whether it’s
          modernizing legacy systems, automating workflows, or mentoring team
          members. I bring a strong <strong>analytical mindset</strong>,{" "}
          <strong>attention to detail</strong>, and a passion for{" "}
          <strong>continuous learning</strong> to every project I work on.
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
          Thank you for visiting my portfolio! Feel free to download my resume
          <a
            href="/kirti-portfolio/resume.pdf"
            download="Kirti_Wadhwani_Resume.pdf">
            Download Resume
          </a>
          or get in touch via the
          <Link to="/contact">Contact</Link> page.
        </p>
      </section>
    </div>
  </section>
);

export default About;
