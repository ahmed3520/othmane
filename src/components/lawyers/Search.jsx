import React from "react";
import "./search.css";
const Search = () => {
  function handleSearch() {
    console.log("search");
  }
  return (
    <div className="search-cont">
      <div className="search-wr">
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
  );
};

export default Search;
