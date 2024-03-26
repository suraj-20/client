import React from "react";
import "./SearchedFligh.css";
import MainForm from "../../SearchedFlighPageComponents/MainFormSection/MainForm";
// import mainImage from "../../Assets/Images/deeplink-bg.jpg";
import Header from "../../SearchedFlighPageComponents/Header/Header";
import RecentDeals from "../../SearchedFlighPageComponents/RecentCheapDeals/RecentDeals";
import StepSection from "../../SearchedFlighPageComponents/StepsSection/StepSection";
import StarSection from "../../SearchedFlighPageComponents/StarsSection/StarSection";
import ReviewSection from "../../SearchedFlighPageComponents/ReviewsSection/ReviewSection";
import Popup from "../../SearchedFlighPageComponents/Popup/Popup";

const SearchedFligh = () => {
  return (
    <div className="searchedFlight">
      <Popup />
      <div className="searchedFlightContainer">
        {/* <img className="mainImage" src={mainImage} alt="" /> */}
        <Header />
        <MainForm />
      </div>
      <div className="recentCheapDealsSection">
        <RecentDeals />
      </div>
      <div className="stepSection">
        <StepSection />
      </div>
      <div className="reviewAndStarSection">
        <div className="bothSection">
          <StarSection />
          <ReviewSection />
        </div>
      </div>
    </div>
  );
};

export default SearchedFligh;
