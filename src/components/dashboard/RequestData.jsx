import React from "react";
import "./requestData.css";
import { ReactComponent as Delete } from "../../assets/svg/trash.svg";
import { ReactComponent as Edit } from "../../assets/svg/edit.svg";
import { ReactComponent as Add } from "../../assets/svg/add.svg";
const RequestData = ({ index, data }) => {
  const val = data.filter((data) => data?.index == index);
  console.log("reqdata==>", val);
  return (
    <div className="renez-req-wr ">
      <div className="renez-req-data">
        <div className="renez-req-data-header">
          <div className="renez-req-img">
            <img src={"/images/lawyer2.png"} alt="user image" />
          </div>
          <div className="renez-req-data-cont">
            <p>{val[0]?.name}</p>
            <p>{val[0]?.location}</p>
            <p>{val[0]?.date + "," + val[0]?.time} </p>
            <div className="renez-req-data-btns">
              <button className="renez-req-data-btns">
                <Delete />
              </button>
              <button className="renez-req-data-btns">
                <Edit />
              </button>
              <button className="renez-req-data-btns">
                <Add />
              </button>
            </div>
          </div>
        </div>
        <div className="renez-req-data-body">
          <h2>History of appointments</h2>
          <div className="appointments-cards-cont">
            {val[0]?.appointments.map((item, index) => {
              return (
                <div className="appointments-card flex" key={index}>
                  <span>{index + 1}</span>
                  <div className="card-data-cont-app flex">
                    <p>{item.date}</p>
                    <p>{item.time}</p>
                    <p>{item.location}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestData;
