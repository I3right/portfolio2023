import React from "react";
import cover from "../../assets/picture/colmar-cover.jpg";

const Colmar = () => {
  return (
    <div className="twitter miniproject">
      <figure>
        <img src={cover} alt="twitter-landingpage" />
      </figure>
      <figcaption>
        <div className="card-head d-flex justify-content-between align-items-center ">
          <h3><strong>Static page</strong></h3>
          <p><small>JSD4</small></p>
        </div>
        <div className="card-sub-head">
          <h4>Practice Colmar academy clone</h4>
        </div>
        <div className="card-body">
          <p>Landing page practice HTML and CSS(vanila) by recreate Colmar academy homepage with responsive design for mobile </p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <h4>HTML | CSS </h4>
          <div className="card-btn">
            <a href="https://landingpage-colmar-jirayu.vercel.app/" target="blank"><i className="fa-regular fa-circle-play"></i></a>
            <a href="https://github.com/I3right/practice_colmar" target="blank"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>

      </figcaption>
    </div>
  );
};

export default Colmar;
