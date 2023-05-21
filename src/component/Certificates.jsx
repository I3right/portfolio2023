import React from 'react'
import '../CSS/Certificates.css'
import SwiperCard from './SwiperCard';

const Certificates = () => {
    return (
      <section className="certificates-container row">
        <h2 id="certificate" className="section-name h2-margin">certificates</h2>
        <div className="certificate col-sm-12 col-lg-12">
        <SwiperCard/>
        </div>
      </section>
    );
}

export default Certificates