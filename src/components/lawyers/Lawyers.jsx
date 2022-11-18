import React from "react";
import Header from "../common/header/Header";
import Category from "./Category";
import Search from "./Search";
import "./lawyers.css";
import LawyerCard from "./Card";
import { lawyerCardData } from "../../data/data";
const Lawyers = () => {
  const [category, setCategory] = React.useState("All categories");
  const [language, setLanguage] = React.useState("English");
  const categoryData = [
    {
      index: 1,
      text: "All categories",
    },
    {
      index: 2,
      text: "Legal consultancy",
    },
    {
      index: 3,
      text: "Property law",
    },
    {
      index: 4,
      text: "Criminal law",
    },
    {
      index: 5,
      text: "Family law",
    },
  ];
  const languagesData = [
    {
      index: 1,
      text: "English",
    },
    {
      index: 2,
      text: "Germany",
    },
    {
      index: 3,
      text: "French",
    },
    {
      index: 4,
      text: "Spanish",
    },
  ];
  return (
    <>
      <Header customClassName={"dark-header"} />
      <Search />
      <div className="lawyers-list-cont">
        <div className="lawyers-list-wr flex">
          <div className="lawyers-list-category">
            <Category
              title={"Categories"}
              data={categoryData}
              setFilter={setCategory}
              filter={category}
            />
            <Category
              title={"Langues"}
              data={languagesData}
              setFilter={setLanguage}
              filter={language}
            />
          </div>
          <div className="lawyers-list-data">
            <div className="lawyers-list-data-numbers">
              <p>Spesialists: 24</p>
            </div>
            <LawyerCard
              image={lawyerCardData?.image}
              lawyerName={lawyerCardData?.name}
              serviceType={lawyerCardData?.serviceType}
              rating={lawyerCardData?.rating}
              numberOfRev={lawyerCardData?.numberOfRev}
              desc={lawyerCardData?.describtion}
              nextAvailibility={lawyerCardData?.nextAvailibility}
              location={lawyerCardData?.location}
              phone={lawyerCardData?.phone}
            />
            <LawyerCard
              image={lawyerCardData?.image}
              lawyerName={lawyerCardData?.name}
              serviceType={lawyerCardData?.serviceType}
              rating={lawyerCardData?.rating}
              numberOfRev={lawyerCardData?.numberOfRev}
              desc={lawyerCardData?.describtion}
              nextAvailibility={lawyerCardData?.nextAvailibility}
              location={lawyerCardData?.location}
              phone={lawyerCardData?.phone}
            />
            <LawyerCard
              image={lawyerCardData?.image}
              lawyerName={lawyerCardData?.name}
              serviceType={lawyerCardData?.serviceType}
              rating={lawyerCardData?.rating}
              numberOfRev={lawyerCardData?.numberOfRev}
              desc={lawyerCardData?.describtion}
              nextAvailibility={lawyerCardData?.nextAvailibility}
              location={lawyerCardData?.location}
              phone={lawyerCardData?.phone}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Lawyers;
