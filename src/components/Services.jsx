import React from "react";

const Services = () => (
  <section id="services">
    <div className="services container">
      <div className="service-top">
        <h1 className="section-title">sk<span>i</span>lles</h1>
        <p>
          IBM announces plans to acquire the Adobe Workfront consulting unit and assets from Rego Consulting Corporation to further its hybrid cloud and AI strategy.
        </p>
      </div>
      <div className="service-bottom">
        {[
          {
            title: "Medical Benefits and 401(k) Enhancements",
            text: "IBM will improve and simplify its U.S. medical plan in 2023 with enhancements and simplified plan provisions."
          },
          {
            title: "IBM Retiree Medical Plan",
            text: "Coverage under the IBM retiree medical plan for Medicare-eligible participants will transition to a new program administered by UnitedHealthcare."
          }
        ].map((service, index) => (
          <div key={index} className="service-item">
            <div className="icon"><img src="https://img.icons8.com/bubbles/100/000000/services.png" /></div>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
