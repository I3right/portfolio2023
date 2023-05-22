import React from "react";
import cover from "../../assets/picture/Yunwhang-cover.jpg";

const Yunwhang = () => {
  return (
    <div className="twitter miniproject">
      <figure>
        <img src={cover} alt="twitter-landingpage" />
      </figure>
      <figcaption>
        <div className="card-head d-flex justify-content-between align-items-center ">
          <h3><strong>Final Project</strong></h3>
          <p><small>JSD4</small></p>
        </div>
        <div className="card-sub-head">
          <h4>Yunwhang : web Activity tracker</h4>
        </div>
        <div className="card-body">
          <p>Web application call Yunwhang design with Figma and  build with MERN stack.</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <h4>MERN | Bootstrap </h4>
          <div className="card-btn">
            <a href="https://fuiyohtest1.vercel.app/" target="blank"><i className="fa-regular fa-circle-play"></i></a>
            <a href="https://github.com/I3right/Project_F_1" target="blank"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>

      </figcaption>
    </div>
  );
};

export default Yunwhang;
