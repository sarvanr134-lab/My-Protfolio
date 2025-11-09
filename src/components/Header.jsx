import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const mobile_menu = document.querySelector(".nav-list ul");
    const menu_item = document.querySelectorAll(".nav-list ul li a");
    const header = document.querySelector(".header.container");

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      mobile_menu.classList.toggle("active");
    });

    document.addEventListener("scroll", () => {
      if (window.scrollY > 250) header.style.backgroundColor = "#29323c";
      else header.style.backgroundColor = "transparent";
    });

    menu_item.forEach((item) => {
      item.addEventListener("click", () => {
        hamburger.classList.remove("active");
        mobile_menu.classList.remove("active");
      });
    });
  }, []);

  return (
    <section id="header">
      <div className="header container">
        <div className="nav-bar">
          <div className="brand">
            <a href="#hero"><h1>My<span>Portfolio</span></h1></a>
          </div>
          <div className="nav-list">
            <div className="hamburger"><div className="bar"></div></div>
            <ul>
              <li><a href="#hero" data-after="Home">Home</a></li>
              <li><a href="#about" data-after="About">About</a></li>
              <li><a href="#services" data-after="Service">Skills</a></li>
              <li><a href="#projects" data-after="Projects">Projects</a></li>
              <li><a href="#contact" data-after="Contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
