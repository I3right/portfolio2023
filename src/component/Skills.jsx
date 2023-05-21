import React from "react";
import'../CSS/skills.css'
import Html from "../assets/picture/html.svg";
import Css from "../assets/picture/css.svg";
import Bootstrap from "../assets/picture/bootstrap.svg";
import Javascript from "../assets/picture/javascript.svg";
import Reacts from "../assets/picture/react.svg";
import Nodejs from "../assets/picture/nodejs.svg";
import VScode from "../assets/picture/vscode.svg";
import Git from "../assets/picture/git.svg";
import Github from "../assets/picture/github.svg";
import Figma from "../assets/picture/figma.svg";


const Skills = () => {
  return (
    <section className="skills-container row justify-content-center">
        <h2 id="skills" className="section-name h2-margin">skills</h2>
        <div className="skills col-sm-12 col-lg-12">
        <div className='row align-items-center justify-content-center' id="skills_row1">
          <figure className=" col d-flex justify-content-center"><img src={Html} className="skillsPicture " alt="Html logo" /></figure>
          <figure className=" col d-flex justify-content-center"><img src={Css} className="skillsPicture " alt="Css logo" /></figure>
          <figure className=" col d-flex justify-content-center"><img src={Bootstrap} className="skillsPicture " alt="Bootstrap logo" /></figure>
          <figure className=" col d-flex justify-content-center"><img src={Javascript} className="skillsPicture " alt="Javascript logo" /></figure>
          <figure className=" col d-flex justify-content-center"><img src={Reacts} className="skillsPicture " alt="React logo" /></figure>
        </div>

        <div className='row align-items-center justify-content-center'  id="skills_row2">
          <figure className=" col d-flex justify-content-center"><img src={Nodejs} className="skillsPicture " alt="Nodejs logo" /></figure>
          <figure className=" col d-flex justify-content-center"><img src={VScode} className="skillsPicture " alt="VScode logo" /></figure>
          <figure className=" col d-flex justify-content-center"><img src={Git} className="skillsPicture " alt="Git logo" /></figure>
          <figure className=" col d-flex justify-content-center"><img src={Github} className="skillsPicture " alt="Github logo" /></figure>
          <figure className=" col d-flex justify-content-center"><img src={Figma} className="skillsPicture " alt="Figma logo" /></figure>
        </div>
        </div>
    </section>
  );
};

export default Skills;
