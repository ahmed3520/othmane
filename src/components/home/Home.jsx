import React from "react";
import "./home.css";
const Home = () => {
  function handleSearch(e) {
    e.preventDefault();
    console.log("Search");
  }
  return (
    <div className="flex flex-col home-cont">
      <div className="flex home-wr flex-col">
        <div className="home-main-title">
          <h1>
            Find a solution
            <br></br>
            to your problem
          </h1>
          <p>A platform for finding lawyers.</p>
        </div>
        <div className="home-main-search flex">
          <select name="legal" id="legal">
            <option value="legal">My legal issue</option>
          </select>
          <select name="Where?" id="where">
            <option value="Where?">Where?</option>
          </select>
          <button className="home-search flex" onClick={handleSearch}>
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
