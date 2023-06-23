import React from "react";
import "../CSS/Projects.css";
import Twitter from "./project/Twitter";
import Colmar from "./project/Colmar";
import Airbnb from "./project/Airbnb";
import Yunwhang from "./project/Yunwhang";
import FindYourHat from "./project/FindYourHat";


const Projects = () => {
  return (
    <section className="projects-container row " id="projects">
      <h2 className="section-name h2-margin">projects</h2>
      <div className="projects col-sm-12 col-lg-12">
        <div className="miniproject-group">
          <Yunwhang/>
          <Colmar/>
          <FindYourHat/>
          <Airbnb/>
          {/* <Twitter/> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
