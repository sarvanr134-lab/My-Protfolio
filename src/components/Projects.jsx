import React from "react";
import img1 from "../assets/Event_management.png";
import Netflix_banner from "../assets/netflix_banner.jpg"

const Projects = () => (
  <section id="projects">
    <div className="projects container">
      <div className="projects-header">
        <h1 className="section-title">
          Recent <span>Projects</span>
        </h1>
      </div>

      <div className="all-projects">
        {/* --- Project 1 --- */}
        <div className="project-item">
          <div className="project-info">
            <h1>Event Management System</h1>
            <h2>Coding is Love</h2>
            <p>
              An event management system built with React, Node.js, and MongoDB
              for seamless event planning and organization.
            </p>
            <a
               href="https://event-management-cnxy4sn4e-saravanakumars-projects-ff578837.vercel.app/"
              // href="https://fuel-management-system-a5vw.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="view-btn">View Project</button>
            </a>
          </div>
          <div className="project-img">
            <img src={img1} alt="Project 1" />
          </div>
        </div>

        {/* --- Project 2 --- */}
        <div className="project-item">
          <div className="project-info">
            <h1>Project 2</h1>
            <h2>Netflix Clone</h2>
            <p>
             Building Netflix clone 
            </p>
            <a
              href="https://saravana-netflix-clone.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="view-btn">View Project</button>
            </a>
          </div>
          <div className="project-img">
            <img src={Netflix_banner} alt="Project 2" />
          </div>
        </div>

        {/* --- Project 3 --- */}
        <div className="project-item">
          <div className="project-info">
            <h1>Project 3</h1>
            <h2>Portfolio Website</h2>
            <p>
              A personal portfolio built with React and Tailwind CSS showcasing
              projects and skills.
            </p>
            <a
              href="https://yourportfolio.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="view-btn">View Project</button>
            </a>
          </div>
          <div className="project-img">
            <img src={img1} alt="Project 3" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
