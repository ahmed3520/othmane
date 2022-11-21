import React from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import Request from "./Request";
import SideBar from "./SideBar";
import Redez from "./Redez";
import { ReactComponent as Setting } from "../../assets/svg/setting.svg";
import { rendezVousData } from "../../data/data";
import Calendar from "./Calendar";
const data = [
  {
    day: 9,
    un_available: 1,
  },
  {
    day: 11,
    un_available: 1,
  },
  {
    day: 16,
    available: 2,
  },
  {
    day: 17,
    available: 1,
    pending: 1,
    un_available: 1,
  },
  {
    day: 18,
    pending: 1,
  },
  {
    day: 19,
    available: 2,
  },
  {
    day: 22,
    available: 1,
  },
  {
    day: 23,
    pending: 1,
  },
  {
    day: 24,
    available: 1,
    un_available: 1,
  },
  {
    day: 25,
    available: 1,
  },
  {
    day: 30,
    un_available: 1,
  },
];
const Dashboard = () => {
  return (
    <div className="dashboard flex">
      <SideBar />
      <div className="dashboard-content">
        <div className="dashboard-content-wr">
          <div className="dashboard-content-header">
            <Link to={"/"} className="dashboard-content-header-book">
              <div className="dashboard-content-header-book-wr">
                <img src="/assets/plus.png" alt="book" />
                <span>Book an Rendez-vous</span>
              </div>
            </Link>
          </div>
          <h2>Requests</h2>
          <div className="dashboard-content-requests">
            <div className="dashboard-content-requests-wr">
              <Request
                image={"/images/request_avatar.png"}
                name={"Cody Fisher"}
                location={"New York"}
                date={"October 30, 2017"}
                time={"01:00 PM"}
              />
              <Request
                image={"/images/request_avatar.png"}
                name={"Cody Fisher"}
                location={"New York"}
                date={"October 30, 2017"}
                time={"01:00 PM"}
              />
              <Request
                image={"/images/request_avatar.png"}
                name={"Cody Fisher"}
                location={"New York"}
                date={"October 30, 2017"}
                time={"01:00 PM"}
              />
            </div>
          </div>
          <div className="dashboard-content-footer">
            <h2>Rendez-vous</h2>
            <Setting />
          </div>
          <Redez data={rendezVousData} />
        </div>
      </div>
      <div className="dashboard-content-calender">
        <div className="dashboard-content-calender-wr">
          <div className="dashboard-content-calender-res">
            <div className="dashboard-content-calender-header">
              <div className="dashboard-content-calender-header-wr">
                <div className="user-img">
                  <img src="/images/lawyer.png" alt="user" />
                </div>
                <div className="user-data flex flex-col">
                  <span>By good morning, </span>
                  <p>Leslie Alexander</p>
                </div>
              </div>
            </div>
            <div className="calender-cont">
              <Calendar data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
