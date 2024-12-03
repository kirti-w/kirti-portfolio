import React from "react";
import "../styles/projects.css"; // Optional CSS for styling
import crisImg from "../assets/cris.svg";
import worksafebcImg from "../assets/worksafebc.svg";
import cityImg from "../assets/city.svg";

const ProjectCard = ({ image, title, description, duties }) => (
  <div className="project-card">
    <img src={image} alt={title} className="project-image" />
    <h4 className="project-title">{title}</h4>
    <p className="project-description">{description}</p>
    <ul className="project-duties">
      {duties.map((duty, index) => (
        <li key={index}>{duty}</li>
      ))}
    </ul>
  </div>
);

const Projects = () => (
  <>
    <h2 className="page-title">My Projects</h2>
    <div className="projects-container">
      {projectData.map((project, index) => (
        <ProjectCard
          key={index}
          image={project.image}
          title={project.title}
          description={project.description}
          duties={project.duties}
        />
      ))}
    </div>
  </>
);

const projectData = [
  {
    image: crisImg,
    title: "Website Development for a major transportation provider",
    description:
      "Translink is Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.",

    duties: ["Designed UI", "Optimized performance", "Integrated APIs"],
  },
  {
    image: worksafebcImg,
    title: "Website Development for a major transportation provider",
    description:
      "Translink is Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.",
    duties: ["Designed UI", "Optimized performance", "Integrated APIs"],
  },
  {
    image: worksafebcImg,
    title: "Website Development for a major transportation provider",
    description:
      "Translink is Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.",
    duties: ["Designed UI", "Optimized performance", "Integrated APIs"],
  },
  {
    image: worksafebcImg,
    title: "Website Development for a major transportation provider",
    description:
      "Translink is Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.",
    duties: ["Designed UI", "Optimized performance", "Integrated APIs"],
  },
];

export default Projects;
