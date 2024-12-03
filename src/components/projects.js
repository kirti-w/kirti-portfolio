import React from "react";
import "../styles/projects.css"; // Optional CSS for styling
import crisImg from "../assets/cris.svg";
import worksafebcImg from "../assets/worksafebc.svg";
import { useState } from "react";

import cityImg from "../assets/city.svg";

const ProjectCard = ({ project, onClick }) => (
  <div className="project-card" onClick={() => onClick(project)}>
    <img src={project.image} alt={project.title} className="project-image" />
    <h3 className="project-title">{project.title}</h3>
    <p className="project-description">{project.description}</p>
  </div>
);

const Lightbox = ({ project, onClose }) => (
  <div className="lightbox-overlay" onClick={onClose}>
    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
      <img src={project.image} alt={project.title} className="lightbox-image" />
      <h3 className="lightbox-title">{project.title}</h3>
      <p className="lightbox-description">{project.description}</p>
      <ul className="lightbox-duties">
        {project.duties.map((duty, index) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
      <button className="lightbox-close" onClick={onClose}>
        Close
      </button>
    </div>
  </div>
);

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openLightbox = (project) => setSelectedProject(project);
  const closeLightbox = () => setSelectedProject(null);

  return (
    <div className="projects-container">
      {projectData.map((project, index) => (
        <ProjectCard key={index} project={project} onClick={openLightbox} />
      ))}
      {selectedProject && (
        <Lightbox project={selectedProject} onClose={closeLightbox} />
      )}
    </div>
  );
};

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
