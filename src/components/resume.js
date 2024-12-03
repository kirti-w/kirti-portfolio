import React from "react";
import "../styles/resume.css"; // Add a CSS file for styles

const Resume = () => (
  <>
    <h1>My Resume</h1>

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
          Developed and optimized full-stack solutions using Microsoft
          technologies (ASP.NET MVC, .NET Core, C#, SQL Server), refactored
          legacy code, improved performance of SQL queries and web pages, and
          implemented new features and integrations.
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
          <h4>36Eight Technologies</h4>
          <small>Full Stack Developer | Oct 2019 – Mar 2022</small>
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
          Developed and optimized full-stack solutions using Microsoft
          technologies (ASP.NET MVC, .NET Core, C#, SQL Server), refactored
          legacy code, improved performance of SQL queries and web pages, and
          implemented new features and integrations.
        </div>
      </div>
    </div>
  </>
);

export default Resume;
