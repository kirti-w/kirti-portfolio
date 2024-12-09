import React from "react";
import "../styles/resume.css"; // Add a CSS file for styles

const Resume = () => (
  <>
    <div className="page-title">Resume</div>

    <div className="resume">
      <div>
        <h2>PROFILE</h2>
      </div>

      <div>
        Full stack developer with a MS in Software Development having over 15
        years of experience in designing & developing distributed, multi-tiered,
        and highly scalable systems on Microsoft technologies like .NET, MVC,
        C#, Microsoft Azure and other modern UI frameworks like Angular and
        React.
        <hr />
      </div>

      <div className="work-ex">
        <h2>WORK EXPERIENCE</h2>
      </div>

      <div className="multi-rows">
        <div className="flex">
          <h4>TRANSLINK</h4>
          <small>Full Stack Developer | Apr 2022 – Dec 2022</small>
        </div>
        <div>
          Developed and optimized full-stack solutions using Microsoft
          technologies (ASP.NET MVC, .NET Core, C#, SQL Server), refactored
          legacy code, improved performance of SQL queries and web pages, and
          implemented new features and integrations.
        </div>
      </div>

      <div className="multi-rows">
        <div className="flex">
          <h4>36Eight Technologies</h4>
          <small>Full Stack Developer | Oct 2019 – Mar 2022</small>
        </div>
        <div>
          Developed and maintained modern, secure, and efficient web
          applications using cutting-edge frameworks and technologies, including
          Angular, React, .NET Core, C#, Microsoft Azure (App Services,
          Functions, OAuth), Jasmine, Karma, and CI/CD pipelines, while
          improving legacy code quality and implementing best security
          standards.
        </div>
      </div>

      <div className="multi-rows">
        <div className="flex">
          <h4>WorksafeBC</h4>
          <small>Technical Lead | Sep 2018 – Sep 2019</small>
        </div>
        <div>
          Led a team of 4 developers, collaborating with stakeholders to deliver
          high-quality full-stack solutions using Angular, NgRx, .NET Core, C#,
          and Azure, while leveraging CQRS, microservices, and search indexes.
        </div>
      </div>

      <div className="multi-rows">
        <div className="flex">
          <h4>Matchbyte</h4>
          <small>Front end Developer | Nov 2017 – May 2018</small>
        </div>
        <div>
          Developed and integrated responsive front-end designs using modern
          frameworks like AngularJS, React, and ES6/ES7, while maintaining
          high-quality, ESLint-compliant code, collaborating with teams,
          managing multiple projects, and meeting client deployment deadlines.
        </div>
      </div>

      <div className="multi-rows">
        <div className="flex">
          <h4>City of Edmonton</h4>
          <small>Full Stack Developer | Mar 2014 – Jun 2015</small>
        </div>
        <div>
          Led the development of a business licensing web application for the
          City of Edmonton, handling full-stack responsibilities, designing and
          optimizing critical modules, supervising junior developers,
          implementing automated testing, and improving system performance.
        </div>
        <hr />
      </div>

      <div>
        <h2>EDUCATION</h2>
      </div>

      <div>
        <div className="multi-rows">
          <h4>Master of Science in Software Development - Boston University</h4>
          <small>2024-2025</small>
        </div>

        <div className="multi-rows education">
          <h4>
            Masters in Computer Software and Applications - KJ SIMSR, Mumbai
          </h4>
          <small>2002-2004</small>
        </div>

        <hr />
      </div>

      <div>
        <h2>CERTIFICATIONS</h2>
      </div>

      <div>
        <div className="multi-rows">
          <h4>Scrum Training</h4>
          <small>2018</small>
        </div>

        <div className="multi-rows education">
          Attended a 2 day Scrum Team Training held at WorksafeBC.
        </div>

        <hr />
      </div>
    </div>
  </>
);

export default Resume;
