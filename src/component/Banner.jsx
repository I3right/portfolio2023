import React from "react";
import profilePicture from '../assets/picture/IMG_5283.jpg'
import '../css/Banner.css'

const Banner = () => {
  return (
    <section className="banner-container row justify-content-center" id="banner">
      <div className="banner col-sm-12 col-lg-11 justify-content-between">
        <div className="banner-text">
          <h1 id="name">Jirayu<br/>Kuna</h1>
          <h3>Web developer</h3>
        </div>
        <figure className="profile-picture">
          <img src={profilePicture} alt="Profile picture" />
        </figure>
      </div>
    </section>
  );
};

export default Banner;
