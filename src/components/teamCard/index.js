import React, { memo } from "react";
import "./teamCard.css";
import { images } from "../images";

const TeamCard = ({ imageUrl, name, designation, linkedinUrl }) => {
  return (
    <div className="team-card-container">
        <div className="image-container">
            <img src={imageUrl} alt={name} className="card-image" />
        </div>
        <div className="card-content">
            <div className="content-body">
                <div className="card-name">{name}</div>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="linkedin-link">
                    <img src={images['linkedin-logo.svg']} alt={name} className="linkedin-logo" />
                </a>                
            </div>
            <div className="card-desc">{designation}</div>
        </div>
    </div>
  );
};

export default memo(TeamCard);
