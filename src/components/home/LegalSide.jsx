import React from "react";

const LegalSide = ({ filter, setFilter, title, filterIndex }) => {
  return (
    <div
      className={`legal-filter-data-slide ${
        filter == title ? "active-side-filter" : null
      }`}
      onClick={(e) => setFilter(title)}
    >
      <div className="legal-filter-index">
        <p>{("0" + filterIndex).slice(-2)}.</p>
      </div>
      <div className="legal-filter-title">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default LegalSide;
