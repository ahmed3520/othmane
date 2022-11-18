import React from "react";
import "./legal.css";
import { legalData } from "../../data/data";
import LegalSide from "./LegalSide";
import { Link } from "react-router-dom";
const LegalInfo = () => {
  const [filter, setFilter] = React.useState("Legal consultancy");
  return (
    <div className="legal-cont">
      <div className="legal-wr">
        <div className="legal-header">
          <div className="legal-header-data">
            <div className="legal-header-title">
              <h1>Popular legal areas</h1>
            </div>
            <div className="legal-header-p">
              <p>
                Lorem ipsum dolor sit amet consectetur. Erat odio sit pulvinar
                donec a.
              </p>
            </div>
          </div>
        </div>
        <div className="legal-filter">
          <div className="legal-filter-sidebar">
            {legalData.map((data, index) => (
              <LegalSide
                filter={filter}
                setFilter={setFilter}
                title={data.title}
                filterIndex={index + 1}
              />
            ))}
          </div>
          {/*Display date here based on filter */}
          <div className="legal-filter-data-cont">
            <p>
              Lorem ipsum dolor sit amet consectetur. Erat odio sit pulvinar
              donec a. Lorem ipsum dolor sit amet consectetur. Erat odio sit
              pulvinar donec a. Lorem ipsum dolor sit amet consectetur. Erat
              odio sit pulvinar donec a. Lorem ipsum dolor sit amet consectetur.
              Erat odio sit pulvinar donec a. Lorem ipsum dolor sit amet
              consectetur.{" "}
            </p>
            <Link to="/find-lawyer" className="find-lw">
              <span>Find a lawyer</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalInfo;
