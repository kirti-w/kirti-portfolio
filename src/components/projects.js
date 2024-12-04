import React from "react";
import "../styles/projects.css"; // Optional CSS for styling
import crisImg from "../assets/cris.svg";
import worksafebcImg from "../assets/worksafebc.svg";
import translinkImg from "../assets/translink.svg";
import { useState } from "react";
import cityImg from "../assets/city.jpg";

const ProjectCard = ({ project, onClick }) => (
  <div className="project-card" onClick={() => onClick(project)}>
    <div className="project-image-div">
      <img src={project.image} alt={project.title} className="project-image" />
    </div>
    <h3 className="project-title">{project.title}</h3>
    <p className="project-description">{project.description}</p>
  </div>
);

const Lightbox = ({ project, onClose }) => (
  <div className="lightbox-overlay" onClick={onClose}>
    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
      <img src={project.image} alt={project.title} className="lightbox-image" />
      <div className="lightbox-title">{project.description}</div>
      <div style={{ textAlign: "left", fontWeight: "bold" }}>
        Role and Responsibilities:
      </div>
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
    <>
      <div className="page-title">My Featured Projects</div>
      <div className="projects-container">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} onClick={openLightbox} />
        ))}
        {selectedProject && (
          <Lightbox project={selectedProject} onClose={closeLightbox} />
        )}
      </div>
    </>
  );
};

const projectData = [
  {
    image: translinkImg,
    title: "Full stack development for a major transportation provider.",
    description:
      "Translink is Metro Vancouver's transportation network, serving residents and visitors with public transit, major roads, bridges and Trip Planning.",

    duties: [
      "Full stack development using Microsoft technologies like ASP.NET MVC, .net core, C# and SQL Server.",
      "Refactored and improved maintainability, efficiency, and readability of legacy code.",
      "Performance improvement and tuning of many slow running SQL queries and web page optimizations.",
      "Implemented new features / integration of their systems.",
    ],
  },
  {
    image: crisImg,
    title:
      "Full stack development and refactoring using modern cloud technologies and best security practices.",
    description:
      "36Eight is a startup organization having a flagship product CRIS for Medical Cannabis Recommendation system based on AI / Machine Learning.",
    duties: [
      "Front end development using cutting edge frameworks like Angular, .net core, C#, Microsoft Azure, etc.",
      "Refactored and improved maintainability, efficiency and readability of legacy code and turned around the overall quality of web application.",
      "Implemented security to match the best recommended standards.",
      "Automated unit testing using Jasmine and Karma.",
      "Using cutting edge cloud technologies like Microsoft Azure / App Services/ functions / Oauth and CI/  CD pipelines.",
    ],
  },
  {
    image: worksafebcImg,
    title:
      "Lead Developer to deliver high-quality solutions using modern frameworks, cloud technologies, and best practices.",
    description:
      "WorkSafeBC is the exclusive workers' compensation insurer in BC, Canada covering more than 200,000 registered employers and 2.3 million workers.",
    duties: [
      "Leading a team of 4 developers and delegating tasks, liaising with business analyst and other stakeholders to ensure user stories are well defined and implemented with high standards.",
      "Full stack development using cutting edge frameworks like Angular, ngrx, .net core, C#.",
      "Using cutting edge cloud technologies like Microsoft Azure and leveraging search indexes using CQRS, microservices, etc.",
      "Constant commitment to great attention to detail and ensuring high quality code.",
    ],
  },
  {
    image: cityImg,
    title:
      "Full stack development of a business license web application for the City of Edmonton and performance tuning.",
    description:
      "City of Edmonton is the capital of the province of Alberta and holds all main provincial areas of government such as the Provincial Legislature of Alberta.",
    duties: [
      "Worked on developing a web application where users can apply for new business licenses or apply for renewal of the business licenses thereby reducing the time for the City of Edmonton employees in processing the applications.",
      "Architect, Design and development of multiple modules across the product at City Of Edmonton.",
      "Responsible for the full stack (front end development, application logic, services, data persistence, etc).",
      "Supervised junior developers on designing and implementing some of the most critical modules across the product.",
      "Did automated unit testing on the product.",
      "Did Performance tuning for various bottlenecks occurring in one of the existing systems.",
    ],
  },
];

export default Projects;
