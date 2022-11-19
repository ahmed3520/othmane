import React from "react";
import "./sidebar.css";
import { BrowserRouter as Router, Link, useLocation } from "react-router-dom";
import { ReactComponent as HomeSvg } from "../../assets/svg/diabled/home.svg";
import { ReactComponent as CalenderSvg } from "../../assets/svg/diabled/calender.svg";
import { ReactComponent as MessageSvg } from "../../assets/svg/diabled/message.svg";
import { ReactComponent as LayoutSvg } from "../../assets/svg/diabled/layout.svg";
import { ReactComponent as ActiveHome } from "../../assets/svg/active/home.svg";
import { ReactComponent as ActiveCalender } from "../../assets/svg/active/calender.svg";
import { ReactComponent as ActiveMessage } from "../../assets/svg/active/message.svg";
import { ReactComponent as ActiveLayout } from "../../assets/svg/active/layout.svg";
import { ReactComponent as Logout } from "../../assets/svg/logout.svg";

const SideBar = () => {
  const location = useLocation().pathname;
  console.log("search", location);
  return (
    <div className="sidebar-cont">
      <div className="sidebar-wr">
        <div className="sidebar-cont-upper">
          <div className="sidebar-logo">
            <img src="/assets/logo.png" alt="logo" border="0" />
          </div>
          <div className="sidebar-menu">
            <ul>
              <li
                className={`${location == "/dashboard" && "active-dashboard"}`}
              >
                <a href="/dashboard">
                  {location == "/dashboard" ? <ActiveHome /> : <HomeSvg />}
                  <span>Dashboard</span>
                </a>
              </li>
              <li
                className={`${
                  location == "/rendez-vous" && "active-dashboard"
                }`}
              >
                <a href="/rendez-vous">
                  {location == "/rendez-vous" ? (
                    <ActiveCalender />
                  ) : (
                    <CalenderSvg />
                  )}
                  <span>Rendez-vous</span>
                </a>
              </li>
              <li
                className={`${location == "/messages" && "active-dashboard"}`}
              >
                <a href="/messages">
                  {location == "/messages" ? <ActiveMessage /> : <MessageSvg />}
                  <span>Messages</span>
                </a>
              </li>
              <li
                className={`${location == "/parametres" && "active-dashboard"}`}
              >
                <a href="/parametres">
                  {location == "/parametres" ? <ActiveLayout /> : <LayoutSvg />}
                  <span>Paramètres </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="sidebar-cont-lower">
          <div className="sidebar-cont-lower-wr">
            <div className="sidebar-cont-lower-wr-img">
              <img src="/images/lawyer.png" alt="user" />
            </div>
            <div className="sidebar-cont-lower-wr-data flex flex-col">
              <span>By good morning,</span>
              <p>Leslie Alexander</p>
            </div>
          </div>
          <div className="sidebar-cont-lower-logout flex">
            <Logout />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
