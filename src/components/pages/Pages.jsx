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
/*
import Footer from "../common/footer/Footer.jsx"
import About from "../about/About"
import Pricing from "../pricing/Pricing"
import Blog from "../blog/Blog"
import Services from "../services/Services"
import Contact from "../contact/Contact"
import Description from "../book/Description"
*/

const Pages = () => {
  return (
    <>
      <Router>
        <Header />

        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default Pages;
