import React from "react";

const Contact = () => (
  <section id="contact">
    <div className="contact container">
      <h1 className="section-title">Contact <span>info</span></h1>
      <div className="contact-items">
        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/phone.png" /></div>
          <div className="contact-info">
            <h1>Phone</h1>
            <h2>+91 9361102449</h2>
          </div>
        </div>
        {/* <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/new-post.png"/></div>
          <div className="contact-info">
            <h1>Email</h1>
            <h2>sarvanr134@gamil.com</h2>
          </div>
        </div> */}
        <div className="contact-item">
          <div className="icon">
            <a href="mailto:sarvanr134@gmail.com">
              <img
                src="https://img.icons8.com/bubbles/100/000000/new-post.png"
                alt="Email Icon"
                style={{ cursor: 'pointer' }}
              />
            </a>
          </div>
          <div className="contact-info">
            <h1>Email</h1>
            <h2>sarvanr134@gmail.com</h2>
          </div>
        </div>

        <div className="contact-item">
          <div className="icon"><img src="https://img.icons8.com/?size=100&id=108812&format=png&color=000000" /></div>
          <div className="contact-info">
            <h1>Linkedin</h1>
            <h2>+91 9876543210</h2>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
