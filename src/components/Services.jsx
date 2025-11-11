import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
} from "react-icons/fa";

import {SiBootstrap} from "react-icons/si";

const Services = () => (
  <section id="services">
    <div className="services container">
      <div className="service-top">
        <h1 className="section-title">
          Sk<span>i</span>lls
        </h1>
        <p>
          Here are the technologies and tools I’ve worked with to build modern,
          responsive, and scalable web applications.
        </p>
      </div>

      <div className="service-bottom">
        {[
          {
            icon: <FaHtml5 style={{ color: "#e34c26" }} />,
            title: "HTML",
            text: "Building structured and accessible web pages using semantic HTML5.",
          },
          {
            icon: <FaCss3Alt style={{ color: "#264de4" }} />,
            title: "CSS",
            text: "Styling responsive layouts with modern CSS and frameworks like Tailwind.",
          },
          
          {
            icon: <SiBootstrap style={{  color: "#7952B3"}} />,
            title: "Bootstrap",
            text: "Designing responsive and mobile-first web layouts using the Bootstrap framework.",
          },
          {
            icon: <FaJs style={{ color: "#f7df1e" }} />,
            title: "JavaScript",
            text: "Writing interactive and dynamic UI logic using ES6+ features.",
          },
          {
            icon: <FaReact style={{ color: "#61DBFB" }} />,
            title: "React",
            text: "Developing reusable components and SPAs with React and hooks.",
          },
          {
            icon: <FaNodeJs style={{ color: "#68a063" }} />,
            title: "Node.js",
            text: "Creating backend APIs and server-side logic using Express.js.",
          },
          {
            icon: <FaDatabase style={{ color: "#4DB33D" }} />,
            title: "MongoDB",
            text: "Managing NoSQL databases for data-driven applications.",
          },
          
        ].map((service, index) => (
          <div key={index} className="service-item">
            <div className="icon">{service.icon}</div>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
