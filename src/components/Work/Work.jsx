import React from 'react'
import { FaUserAlt } from "react-icons/fa";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BiSolidPlaneAlt } from "react-icons/bi";
import './Work.css'

const Work = () => {
  return (
<div className='hulk'>

<div className="heading">
        <h1>How it works</h1>
        </div>
  <div className="main-work-container">

    <section className='work-container'>
        
    <div className="work-icon">
    <FaUserAlt />
    </div>

    <div className="sub-head">
        <h2>Quickly get expert assistance</h2>
    </div>

    <p className='desc'>If you want to book a cheap flight ticket or need answers to any travel-related
         questions, our customer support team is available to assist you via phone.</p>
        
    </section>


    <section className='work-container'>
        
    <div className="work-icon">
    <HiOutlineMailOpen />
    </div>

    <div className="sub-head">
        <h2>Get flight options to your inbox</h2>
    </div>

    <p className='desc'>Our Travel Manager will send you customized itineraries with various flight options in 
    just a few minutes. We will work out the best flight for you!</p>
        
    </section>


    <section className='work-container'>
        
    <div className="work-icon">
    <BiSolidPlaneAlt />
    </div>

    <div className="sub-head">
        <h2>Book your travel with ease</h2>
    </div>

    <p className='desc'>Select a flight deal and enjoy a secure payment process. Receive e-tickets via email.
    
     The customer care team will help you with any questions.</p>
        
    </section>
   
  </div>
</div>
  )
}

export default Work