import React from "react";
import cover from "../../assets/video/Untitled video - Made with Clipchamp.mp4";
import giff from "../../assets/giff/Untitled video - Made with Clipchamp.gif";

const FindYourHat = () => {
  return (
    <div className="twitter miniproject">
      <figure>
        <img src={giff} alt="twitter-landingpage" />
        {/* <video width="320" height="240" controls src={cover} type="video/mp4"></video> */}
      </figure>
      <figcaption>
        <div className="card-head d-flex justify-content-between align-items-center ">
          <h3><strong>Javascript</strong></h3>
          <p><small>JSD4</small></p>
        </div>
        <div className="card-sub-head">
          <h4>Find Your Hat</h4>
        </div>
        <div className="card-body">
          <p>Pure javaScript maze game.That have two services. First is generate map by let user to choose mapsize, difficult level. Second is Movement by get user in put to controll character to end point.</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <h4>HTML | CSS</h4>
          <div className="card-btn">
            <a href="https://landingpage-airbnb-jirayu.vercel.app/" target="blank"><i className="fa-regular fa-circle-play"></i></a>
            <a href="https://github.com/I3right/landingpage-airbnb" target="blank"><i className="fa-brands fa-github"></i></a>
          </div>
        </div>

      </figcaption>
    </div>
  );
};

export default FindYourHat;
