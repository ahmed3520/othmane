import React, { useRef, useEffect } from "react";
import "./home.css";
import { cardData } from "../../data/data";
import Card from "./Card";
import useDrag from "../common/useDrag";
import { useDraggable } from "react-use-draggable-scroll";
import LegalInfo from "./LegalInfo";
const Home = () => {
  function handleSearch(e) {
    e.preventDefault();
    console.log("Search");
  }

  useEffect(() => {
    const slider = document.querySelector(".items");
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener("mousedown", (e) => {
      isDown = true;
      slider.classList.add("active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener("mouseleave", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mouseup", () => {
      isDown = false;
      slider.classList.remove("active");
    });
    slider.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
      console.log(walk);
    });
  }, []);
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
      <div id="container" class="container">
        <main class="grid-item main">
          <div class="items">
            {cardData.map((data, index) => (
              <Card data={data} key={index} />
            ))}
          </div>
          <div class="home-start-cont">
            <button className="home-start">Get started</button>
          </div>
        </main>
      </div>
      <LegalInfo />
    </div>
  );
};

export default Home;
