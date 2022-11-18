//reactCard.jsx
import React from "react";
import "./card.css";
const Card = ({ data }) => {
  return (
    <div className="flex card-data-cont">
      <div className="flex card-wr">
        <div
          className="card-img"
          style={{ background: `url(${data.cover})` }}
        ></div>
        <div className="card-number">
          <h1>{("0" + data.index).slice(-2)}</h1>
        </div>
        <div className="card-title">
          <h1>{data.title}</h1>
        </div>
        <div className="card-desc">
          <p>{data.describtion}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
