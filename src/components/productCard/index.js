import React, { memo } from "react";
import "./productCard.css";

const ProductCard = ({ imageUrl, header, description, knowMore, style }) => {
  return (
    <div className="product-card-container">
      <div className="card-body">
        <div className="image-container">
          <div className={`${style}`}>
            <img src={imageUrl} alt={header} className="card-image" />
          </div>
        </div>
        <div className="card-content">
          <h2 className="card-header">{header}</h2>
          <div className="card-desc">{description}</div>
          {knowMore && (
            <a
              href={knowMore}
              target="_blank"
              rel="noopener noreferrer"
              className="know-more"
            >
              Know More
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
