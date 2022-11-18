import React from "react";

const Category = ({ title, data, setFilter, filter }) => {
  console.log(filter);
  return (
    <div className="category-data">
      <div className="category-title">
        <h1>{title}</h1>
      </div>
      <div className="category-data-cont">
        {data.map((item, index) => {
          return (
            <div
              className={`category-data-item ${
                filter == item.text ? "active-category" : null
              }`}
              onClick={(e) => setFilter(item.text)}
            >
              <p key={index}>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
