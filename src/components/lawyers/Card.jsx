import React from "react";
import { Link } from "react-router-dom";
import "./card.css";
const LawyerCard = ({
  image,
  lawyerName,
  serviceType,
  numberOfRev,
  rating,
  desc,
  nextAvailibility,
  location,
  phone,
}) => {
  return (
    <div className="flex flex-col lw-card-cont">
      <div className="lw-card-wr">
        <div className="lw-card-header">
          <img src={image} alt="lawyer" className="lw-card-img" />
          <div className="lw-image-header-data">
            <div className="lw-image-header-title">
              <h6>{lawyerName}</h6>
            </div>
            <div className="lw-image-header-service-type">
              <img src="/assets/right-icon.png" alt="right" />
              <h6>{serviceType}</h6>
            </div>
            <div className="lw-image-header-rating">
              <div
                className="Stars"
                style={{ "--rating": rating }}
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
              <img src="/assets/location-icon.png" alt="location" />
              <span>{location}</span>
            </div>
            <div className="lawyer-phone">
              <img src="/assets/phone-icon.png" alt="phone" />
              <span>{phone}</span>
            </div>
          </div>
        </div>
        <hr></hr>
        <div className="lawyer-footer">
          <div className="lawyer-footer-data">
            <div className="lawyer-available">
              <span>Next availibility:</span>
              <span>{nextAvailibility}</span>
            </div>
            <Link to={"/"} className="book-now">
              <span>Take an appointment</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerCard;
