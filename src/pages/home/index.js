import React, { memo } from "react";
import "./home.css";
import { images } from "../../components/images";

const Home = () => {
  return (
    <section id="#" className="home-container">
      {/* <div className="home-content">
            <div className="home-title">Making AI Work</div>
        </div>
        <div className="home-image-container">
            <img className="home-img" src={images['top-banner-img-2.jpeg']} alt="Careers" />
        </div> */}
      <div className="home-body">
        <div className="home-content">
          <div className="home-title">Making AI Work</div>
        </div>
        <div className="home-image-container">
            <img className="home-img" src={images['top-banner-img-2.jpeg']} alt="Careers" />
        </div>
      </div>
    </section>
  );
};

export default memo(Home);
