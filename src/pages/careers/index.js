import React, { memo, useEffect, useRef } from "react";
import "./careers.css";
import { images } from "../../components/images";

const Careers = ({ refs: ref }) => {
  const handleApplyNowClick = () => {
    window.location.href = "mailto:info@aistra.com";
  };

  return (
    <section id="careers" className="careers-container">
      <div className="careers-body">
        <div className="careers-content">
          <div className="careers-badge">Careers</div>
          <div className="careers-title">We're taking AI to the stars</div>
          <div className="careers-desc">
            Aistra Labs is led by a team of Business Operations Stalwarts, SaaS
            Builders, and Management Consultants from across the globe. We are
            on a mission to help businesses prepare for, adapt to, and adopt AI.
            We run an open and flat organization. We are remote first but meet
            often to make sure that we get to know each other better and
            celebrate our successes. We operate in a continuously evolving space
            which brings both challenges and rewards. We are on a constant
            lookout for talented individuals to join our growing team.
          </div>
          <div onClick={handleApplyNowClick} className="careers-btn-container">
            <img
              className="btn-img"
              src={images["apply-now-btn.svg"]}
              alt="Apply now"
            />
          </div>
        </div>
        <div className="careers-image-container">
          <img
            className="careers-img"
            src={images["careers-img.png"]}
            alt="Careers"
          />
        </div>
      </div>
    </section>
  );
};

export default memo(Careers);
