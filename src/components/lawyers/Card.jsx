import React from "react";
import { Link } from "react-router-dom";

const LawyerCard = ({ image, lawyerName, serviceType, numberOfRev, desc }) => {
  return (
    <div className="flex flex-col lw-card-cont">
      <div className="lw-card-wr">
        <div className="lw-card-header">
          <image src={image} alt="lawyer" className="lw-card-img" />
          <div className="lw-image-header-data">
            <div className="lw-image-header-title">
              <h6>{lawyerName}</h6>
            </div>
            <div className="lw-image-header-service-type">
              <img src="%PUBLIC_URL%/assets/right-icon.png" alt="right" />
              <h6>{serviceType}</h6>
            </div>
            <div className="lw-image-header-rating">
              <div
                className="Stars"
                style={{ "--rating": "4.4" }}
                aria-label="Rating of this product is 2.3 out of 5."
              />
              <span>{numberOfRev}</span>
            </div>
            <div className="lw-image-header-desc">
              <p>{desc.substring(0, 125) + "..."}</p>
              <Link to={"/"} className="readmore">
                <span>Read More</span>
              </Link>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="lawyer-info">
          <div className="lawyer-contact">
            <div className="lawyer-location">
              <img src="%PUBLIC_URL%/assets/location-icon.png" alt="location" />
              <span>Location</span>
            </div>
            <div className="lawyer-phone">
              <img src="%PUBLIC_URL%/assets/phone-icon.png" alt="phone" />
              <span>Phone</span>
            </div>
          </div>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};

export default LawyerCard;
