import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { FaCalendarAlt } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { DatePicker } from "react-datepicker"; // Import react-datepicker
import "react-datepicker/dist/react-datepicker.css";
import "./Search.scss";

const Search = () => {
  // const [checkInDate, setCheckInDate] = useState(null);
  // const [checkOutDate, setCheckOutDate] = useState(null);
  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
      <div className="search container section">
        <div className="sectionContainer grid">
          <div className="btns flex">
            <div className="singleBtn">
              <span>Economy</span>
            </div>

            <div className="singleBtn">
              <span>Business</span>
            </div>

            <div className="singleBtn">
              <span>FirstClass</span>
            </div>
          </div>

          <div className="searchInputs flex">
            <div className="singleInput flex">
              <div className="iconDiv">
                <HiLocationMarker className="icon" />
              </div>

              <div className="texts">
                <h4>Location</h4>
                <input type="text" placeholder="Where do you want to go?" />
              </div>
            </div>

            <div className="singleInput flex">
              <div className="iconDiv">
                <HiOutlineUserGroup className="icon" />
              </div>

              <div className="texts">
                <h4>Travellers</h4>
                <input type="text" placeholder="Add guests" />
              </div>
            </div>

            <div className="singleInput flex">
              <div className="iconDiv">
                <FaCalendarAlt className="icon" />
              </div>

              <div className="texts">
                <h4>Check In</h4>
                <input type="date" name="" id="" />
                {/* <DatePicker
                  selected={checkInDate}
                  onChange={(date) => setCheckInDate(date)}
                  dateFormat="MM/dd/yyyy"
                  placeholderText="Select check-in date"
                /> */}
              </div>
            </div>

            <div className="singleInput flex">
              <div className="iconDiv">
                <FaCalendarAlt className="icon" />
              </div>

              <div className="texts">
                <h4>Check Out</h4>
                <input type="date" name="" id="" />
                {/* <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} /> */}
              </div>
            </div>

            <div className="btnss btnBlock flex">
              <CiSearch className="search-icon" /> Search Flights
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
