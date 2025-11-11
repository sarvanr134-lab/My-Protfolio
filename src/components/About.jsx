import React from "react";
import img2 from "../assets/img2.jpg";

const About = () => (
  <section id="about">
    <div className="about container">
      <div className="col-left">
        <div className="about-img">
          <img src={img2} alt="Profile" />
        </div>
      </div>
      <div className="col-right">
        <h1 className="section-title">About <span>me</span></h1>
        <h2>Front End Developer</h2>
        <p>Aspiring Front-End Developer eager to apply my skills in creating modern, responsive, and visually appealing web interfaces in a growth-oriented organization.</p>
      </div>
    </div>
  </section>
);

export default About;
