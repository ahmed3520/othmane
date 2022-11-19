import React from "react";
import "./rendez.css";
import { ReactComponent as Setting } from "../../assets/svg/more.svg";

const Redez = ({ data }) => {
  return (
    <div className="rendez-table">
      <div className="table-head">
        <div className="head-cont">
          <p></p>
          <p>Name</p>
          <p>Location</p>
          <p>Date</p>
          <p>Time</p>
          <p>Action</p>
        </div>
      </div>
      <div className="table-body-cont">
        {data.map((item, index) => {
          return (
            <div className="table-body" key={index}>
              <div className="lw-img">
                <img src={item.image} alt="" />
              </div>
              <p>{item.name}</p>
              <p>{item.location}</p>
              <p>{item.date}</p>
              <p>{item.time}</p>
              <button className="setting-rend">
                <Setting />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Redez;
