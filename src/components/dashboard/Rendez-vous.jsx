import React from "react";
import { Link } from "react-router-dom";
import { rendezVousData } from "../../data/data";
import Card from "./Card-rendez";
import SideBar from "./SideBar";
import "./rendezVous.css";
import RequestData from "./RequestData";

const Rendez = () => {
  const [filter, setFilter] = React.useState(rendezVousData[0]?.index);
  const [back, setBack] = React.useState(true);
  console.log("filter==>", back);
  return (
    <div className="dashboard rebdez-dashboard flex">
      <SideBar />
      <div
        className={`rendez-vous-cont flex flex-col
      ${!back && "active-rendez-main"}
      `}
      >
        <div className="dashboard-content-header">
          <Link to={"/"} className="dashboard-content-header-book">
            <div className="dashboard-content-header-book-wr">
              <img src="/assets/plus.png" alt="book" />
              <span>Book an Rendez-vous</span>
            </div>
          </Link>
        </div>
        <h2>Rendez-vous</h2>
        <div className="rendez-vous-wr flex flex-col">
          {rendezVousData.map((data, index) => (
            <Card
              data={data}
              setFilter={setFilter}
              filter={filter}
              back={back}
              setBack={setBack}
              key={index}
            />
          ))}
        </div>
      </div>
      <div
        className={`rendex-vous-appointments ${
          back ? "rendex-vous-appointments-back" : ""
        }`}
      >
        <div
          className={`back-btn ${back == true && "active-back-btn"}`}
          onClick={() => setBack(!back)}
        ></div>

        <RequestData
          index={filter}
          data={rendezVousData}
          back={back}
          setBack={setBack}
        />
      </div>
    </div>
  );
};

export default Rendez;
