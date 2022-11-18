import React from "react";

const Category = ({ title, data, setFilter, filter }) => {
  return (
    <div className="category-data">
      <div className="category-title">
        <h1>{title}</h1>
      </div>
      <div className="category-data-cont">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={`category-data-item ${
                filter == item.title ? "active-category" : null
              }`}
              onClick={(e) => setFilter(item.title)}
            >
              <span>{data.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
