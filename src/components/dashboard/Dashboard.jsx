import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import Request from "./Request";
import SideBar from "./SideBar";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <SideBar />
      <div className="dashboard-content">
        <div className="dashboard-content-wr">
          <div className="dashboard-content-header">
            <Link to={"/"} className="dashboard-content-header-book">
              <img src="/assets/svg/plus.png" alt="book" />
              <span>Book an Rendez-vous</span>
            </Link>
          </div>
          <h2>Requests</h2>
          <div className="dashboard-content-requests">
            <div className="dashboard-content-requests-wr">
              <Request />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
