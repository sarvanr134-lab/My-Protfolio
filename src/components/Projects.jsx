import React from "react";
import img1 from "../assets/img1.jpg";

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
            <h1>Project 1</h1>
            <h2>Coding is Love</h2>
            <p>
              AI-powered chatbot via a web application that answers frequently
              asked questions.
            </p>
            <a
              href="https://yourprojectlink.com"
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
            <h2>Smart Learning</h2>
            <p>
              Interactive learning app built with React and Node.js for
              personalized education.
            </p>
            <a
              href="https://anotherprojectlink.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="view-btn">View Project</button>
            </a>
          </div>
          <div className="project-img">
            <img src={img1} alt="Project 2" />
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
