import React from "react";
import'../CSS/Nav.css'

const Navbar = () => {
  return (
    <header className="row py-1 justify-content-center">
      <ul className="nav col-lg-10 col-sm-12 justify-content-between justify-content-md-end " id="navbar">
        <li className="nav-item">
          <a href="#banner" className="nav-link px-1 px-md-4">Home</a>
        </li>
        <li className="nav-item">
          <a href="#projects" className="nav-link px-1 px-md-4">Project</a>
        </li>
        {/* <li className="nav-item">
          <a href="#experience" className="nav-link px-1 px-md-3">Experience</a>
        </li> */}
        <li className="nav-item">
          <a href="#aboutme" className="nav-link px-1 px-md-4">About me</a>
        </li>
        <li className="nav-item">
          <a
            href="https://github.com/I3right"
            target="_blank"
            className="nav-link px-1"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
