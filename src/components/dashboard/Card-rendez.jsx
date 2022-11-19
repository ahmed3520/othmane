import React from "react";
import "./cardRendez.css";
const Card = ({ data, setFilter, filter }) => {
  return (
    <div
      className={`rendez-card-cont ${data?.index == filter && "active-rendez"}`}
      onClick={(e) => setFilter(data?.index)}
    >
      <div className="rendez-card-wr">
        <div className="rendez-card-img">
          <img src={data?.image} alt="" />
        </div>
        <div className="rendez-card-data flex flex-col">
          <p>{data?.name}</p>
          <p>{data?.location}</p>
          <p>{data?.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
