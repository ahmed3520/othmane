import React from "react";
import { Link } from "react-router-dom";
import { rendezVousData } from "../../data/data";
import Card from "./Card-rendez";
import SideBar from "./SideBar";
import "./rendezVous.css";
import RequestData from "./RequestData";

const Rendez = () => {
  const [filter, setFilter] = React.useState(rendezVousData[0]?.index);
  return (
    <div className="dashboard flex">
      <SideBar />
      <div className="rendez-vous-cont flex flex-col">
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
            <Card data={data} setFilter={setFilter} filter={filter} />
          ))}
        </div>
      </div>
      <div className="rendex-vous-appointments">
        <RequestData index={filter} data={rendezVousData} />
      </div>
    </div>
  );
};

export default Rendez;
