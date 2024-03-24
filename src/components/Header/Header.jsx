import React, { useState } from 'react';
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { FaCar, FaPlane, FaSearch, FaTaxi } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { FaBed, FaCalendarAlt, FaUser } from 'react-icons/fa';
import './Header.css';
const img = require('../assets/images/agents2.4 (1).png')
const img1 = require('../assets/images/wowfare-blue.png');

const Header = ({ type }) => {
  const [destination, setDestination] = useState('');
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
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
      [name]: operation === 'i' ? options[name] + 1 : options[name] - 1,
    }));
  };

  const handleSearch = () => {
    // Add functionality here
  };

  return (
    <>
      <Navbar className="nav" fluid>
        <Navbar.Brand href="https://flowbite-react.com">
          <Link to={'/'}><img src={img1} className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /></Link>
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white"></span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">name@flowbite.com</span>
            </Dropdown.Header>
            <Dropdown.Item>Flights</Dropdown.Item>
            <Dropdown.Item>Hotels</Dropdown.Item>
            <Dropdown.Item>Cars</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#" active>
            Flights
          </Navbar.Link>
          <Navbar.Link href="#">Help Center</Navbar.Link>
          <Navbar.Link href="#">My Trips</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>

      <div className="bottom">
        <Link to={'/contact'}><h2>
          Ring, ring, win! Dial us and get <span style={{ color: 'yellow', fontWeight: '800' }}>EXTRA $35</span> on your flight ticket
        </h2></Link>
      </div>

      <div className="header">
        <div className="headerContainer">
          <div className="headerList">
            <div className="headerListItem active">
              <FaPlane />
              <Link to={'/flights'} className='span'>Flights</Link>
            </div>

            <div className="headerListItem">
              <FaBed />
              <Link to={'/hotels'} className='span'>Hotels</Link>
            </div>

            <div className="headerListItem">
              <FaCar />
              <Link to={'/cars'} className='span'>Car Rental</Link>
            </div>

            <div className="headerListItem">
              <FaTaxi />
              <Link to={'/taxi'} className='span'>Airport Taxi</Link>
            </div>
          </div>

          <h1  style={{ fontFamily: 'sans-serif', fontSize: '2rem', fontWeight: 'bold' }} className="headerTitle">
            A lifetime of discounts? It's Genius.<br/>
            Choose from <span style={{color:'yellow'}}>400+ Airlines</span>
          </h1>
           <p style={{margin:'0.8rem 1rem'}}>Dial up one of 120 proficient travel specialists</p>
          <div style={{display:'flex',marginTop:'17px',alignItems:'center'}} className="contact">
          <img className='img-3' style={{width:'80px'}} src={img} alt="" />
           <Link><h1 style={{fontWeight:'bolder',fontSize:'2rem', marginLeft:'20px'}}>(833) 436-0717</h1></Link>
          </div>
          <p className="headerDesc">
            Get rewarded for your travels – unlock instant savings of 10% or more with a free Lamabooking account
          </p>
          <button className="headerBtn">Sign in / Register</button>

          <div className="headerSearch">
            <div className="headerSearchItem">
              <FaSearch  className="headerIcon" />
              <input
                type="text"
                placeholder="Where do you want to go?"
                className="headerSearchInput"
                onChange={(e) => setDestination(e.target.value)}
                style={{color:'black'}}
              />
            </div>

            <div className="headerSearchItem">
              <FaSearch  className="headerIcon" />
              <input
                type="text"
                placeholder="Destination?"
                className="headerSearchInput"
                onChange={(e) => setDestination(e.target.value)}
                style={{color:'black'}}
              />
            </div>

            <div className="headerSearchItem">
              <FaCalendarAlt  className="headerIcon" />
              <span
                onClick={() => setOpenDate(!openDate)}
                className="headerSearchText"
              >{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
                date[0].endDate,
                "MM/dd/yyyy"
              )}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDate([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={date}
                  className="date"
                  minDate={new Date()}
                />
              )}
            </div>
            <div className="headerSearchItem">
              <FaUser className="headerIcon" />
              <span
                onClick={() => setOpenOptions(!openOptions)}
                className="headerSearchText"
              >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
              {openOptions && (
                <div className="options">
                  <div className="optionItem">
                    <span className="optionText">Adult</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.adult <= 1}
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.adult}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("adult", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="optionItem">
                    <span className="optionText">Children</span>
                    <div className="optionCounter">
                      <button
                        disabled={options.children <= 0}
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "d")}
                      >
                        -
                      </button>
                      <span className="optionCounterNumber">
                        {options.children}
                      </span>
                      <button
                        className="optionCounterButton"
                        onClick={() => handleOption("children", "i")}
                      >
                        +
                      </button>
                    </div>
                  </div>

                </div>
              )}
            </div>

            <div className="headerSearchItem">
              <button className="headerBtn" onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </>
  );
};

export default Header;
