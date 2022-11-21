import React from "react";
import Header from "../common/header/Header";
import Category from "./Category";
import Search from "./Search";
import "./lawyers.css";
import LawyerCard from "./Card";
import { ReactComponent as PickDate } from "../../assets/svg/pickDate.svg";
import { lawyerCardData } from "../../data/data";
import Footer from "../common/footer/Footer";
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
            <div className="category-data">
              <div className="category-title">
                <h1>Availabilités</h1>
              </div>
              <div className="category-date-cont">
                <span>A partir du</span>
                <div className="category-date">
                  <div className="flex category-date-wr">
                    <PickDate />
                    <p>Wed, Nov 16</p>
                  </div>
                </div>
              </div>
              <div className="category-date-cont date-to">
                <span>Au</span>
                <div className="category-date">
                  <div className="flex category-date-wr">
                    <PickDate />
                    <p>Wed, Nov 16</p>
                  </div>
                </div>
              </div>
              <div className="btn-search-category">
                <button>Search</button>
              </div>
            </div>
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
      <Footer />
    </>
  );
};

export default Lawyers;
