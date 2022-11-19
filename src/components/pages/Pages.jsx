import React from "react";
import Header from "../common/header/Header.jsx";
import "../../App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import Home from "../home/Home";
import Lawyers from "../lawyers/Lawyers.jsx";
import Dashboard from "../dashboard/Dashboard.jsx";
import Rendez from "../dashboard/Rendez-vous.jsx";
const Pages = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/find-lawyer" element={<Lawyers />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/rendez-vous" element={<Rendez />} />
        </Routes>
      </Router>
    </>
  );
};

export default Pages;
