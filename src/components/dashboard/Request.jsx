import React from "react";
import "./request.css";
const Request = ({ image, name, location, date, time }) => {
  return (
    <div className="flex req-cont">
      <div className="req-img">
        <img src={image} alt="request avatar" />
        <div className="req-img-data flex flex-col">
          <p>{name}</p>
          <p>{location}</p>
        </div>
      </div>
      <div className="req-date flex flex-col">
        <p>{date}</p>
        <p>{time}</p>
      </div>
      <div className="req-btns flex">
        <button className="refuse-btn">
          <img src="/assets/redWrong.png" alt="refuse" />
          <span>Refuse</span>
        </button>
        <button className="accept-btn">
          <img src="/assets/greenRight.png" alt="Accept" />
          <span>Refuse</span>
        </button>
      </div>
    </div>
  );
};

export default Request;
