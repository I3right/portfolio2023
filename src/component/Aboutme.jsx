import React from "react";
import "../CSS/Aboutme.css";

const Aboutme = () => {
  return (
    <section className="aboutme-container row">
      <h2 id="aboutme" className="section-name h2-margin">
        About me
      </h2>
      <div className="aboutme col-sm-12 col-lg-12 d-flex justify-content-around">
        <a
          href="https://drive.google.com/file/d/1i2wleevVtpZavPEJuBnp2O9FzxWiT3Eh/view?usp=share_link"
          className="btn btn-dark"
          target="blank"
        >
          <i className="fa-regular fa-file"></i>
          <span>Resume</span>
        </a>
        <a href="" className="btn btn-dark">
          <i className="fa-regular fa-envelope"></i>
          <span>Email</span>
        </a>
        <a
          href="https://www.linkedin.com/in/jirayukuna/"
          className="btn btn-dark"
          target="blank"
        >
          <i className="fa-brands fa-linkedin"></i>
          <span>LinkedIn</span>
        </a>
        <a
          href="https://github.com/I3right"
          target="blank"
          className="btn btn-dark"
        >
          <i className="fa-brands fa-github"></i>
          <span>GitHub</span>
        </a>
      </div>
    </section>
  );
};

export default Aboutme;
