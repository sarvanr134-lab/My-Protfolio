import React from "react";
import bg from "../assets/bg.png";

const Hero = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'Saravanakumar _20250828_173015_0000.pdf';
    link.download = "Saravanakumar _20250828_173015_0000.pdf";
    link.click();
  };
  return(

    <section id="hero" style={{ backgroundImage: `url(${bg})` }}>
    <div className="hero container">
      <div >
        <h1>Hello, <span></span></h1>
        <h1>My Name is <span></span></h1>
        <h1>SARAVANAKUMAR <span></span></h1>
        <a href="#projects" className="cta">Projects below</a>
          <div>
        <button onClick={handleDownload} className="download-btn">
        Download Resume
      </button>
        </div>
      </div>
      
    </div>
  </section>
  );
}

export default Hero;
