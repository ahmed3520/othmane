import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <div className="flex header-cont">
      <div className="flex header-row">
        <div className="flex header-title">
          <span>Defendme</span>
        </div>
        <div className="flex header-data">
          <span>Êtes vous avocat(e)?</span>
          <span>Comment ça marche</span>
          <Link to="/login" className="login">
            <span>Log In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
