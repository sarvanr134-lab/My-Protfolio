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
        <h2>Software Technical Trainer</h2>
        <p>Qualified Software Trainee seeking a position in which to put my education, skills and experience to work with a well-established organization.</p>
      </div>
    </div>
  </section>
);

export default About;
