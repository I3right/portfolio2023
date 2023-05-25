import React from "react";
import '../CSS/Quote.css'

const MyQuote = () => {
  return (
    <section className="quote-container row">
      <div className="quote d-flex align-items-center justify-content-between">
        <p>
          Discovered <span>passion for web development</span> in 2021 and
          started learning on freeCodeCamp.org Then participated in a Junior
          Software Developer (Fullstack) Bootcamp by Generation Thailand.
           where I learned technical and behavior skills, as well as Agile
          methodologies. Now, I'm passionate developing my technical and soft
          skills to <span>become better software</span>
          developer
        </p>

        {/* <div id="contact-btn" >
          <div id="pin"></div>
          <button>Contact</button>
        </div> */}
      </div>
    </section>
  );
};

export default MyQuote;
