import React, { useState } from "react";
import { Navbar } from "flowbite-react";
import { FaCar, FaPlane, FaTaxi } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { FaBed } from "react-icons/fa";
import "./Header.css";
import PopUp from "../Layout/Pop-Up/PopUp";
const img = require("../assets/images/agents2.4 (1).png");
const img1 = require("../assets/images/wowfare-blue.png");

const Header = () => {
  const location = useLocation();
  const isLoginSignupPage = location.pathname === "/loginRegister";

  const [setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const handleOption = (name, operation) => {
    setOptions((prev) => ({
      ...prev,
      [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    }));
  };

  const handleSearch = () => {
    // Add functionality here
  };

  // Don't render the header if on the login/signup page
  if (isLoginSignupPage) {
    return null;
  }

  return (
    <>
      <Navbar className="nav" fluid>
        <Navbar.Brand href="https://flowbite-react.com">
          <Link to={"/"}>
            <img
              src={img1}
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite React Logo"
            />
          </Link>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
        </Navbar.Brand>

        <Navbar.Collapse style={{ marginRight: "8rem" }}>
          <Navbar.Link href="#" active>
            Flights
          </Navbar.Link>
          <Navbar.Link href="#">Help Center</Navbar.Link>
          <Navbar.Link href="#">My Trips</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="bottom">
        <Link className="first-div">
          <h2>
            Ring, ring, win! Dial us and get{" "}
            <span
              className="bottom-span"
              style={{ color: "yellow", fontWeight: "800" }}
            >
              EXTRA $35
            </span>{" "}
            on your flight ticket
          </h2>
        </Link>

        <div className="second-div">
          <PopUp />
        </div>
      </div>

      <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            <div className="headerListItem active">
              <FaPlane />
              <Link to={"/flights"} className="span">
                Flights
              </Link>
            </div>

            <div className="headerListItem">
              <FaBed />
              <Link to={"/hotels"} className="span">
                Hotels
              </Link>
            </div>

            <div className="headerListItem">
              <FaCar />
              <Link to={"/cars"} className="span">
                Car Rental
              </Link>
            </div>

            <div className="headerListItem">
              <FaTaxi />
              <Link to={"/taxi"} className="span">
                Airport Taxi
              </Link>
            </div>
          </div>

          <h1
            style={{
              fontFamily: "sans-serif",
              fontSize: "2rem",
              fontWeight: "bold",
            }}
            className="headerTitle"
          >
            A lifetime of discounts? It's Genius.
            <br />
            Choose from <span style={{ color: "yellow" }}>400+ Airlines</span>
          </h1>
          <p style={{ margin: "0.8rem 1rem" }}>
            Dial up one of 120 proficient travel specialists
          </p>
          <div
            style={{ display: "flex", marginTop: "17px", alignItems: "center" }}
            className="contact"
          >
            <img className="img-3" style={{ width: "80px" }} src={img} alt="" />
            <Link>
              <h1 className="number-button">(833) 436-0717</h1>
            </Link>
          </div>

          <button className="headerBtn">
            <Link to={"/loginRegister"}>Sign in / Register</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
