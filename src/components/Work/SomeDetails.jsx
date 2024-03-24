import React from 'react'
import './SomeDetails.css'
import { FaPhoneAlt,FaUserFriends,FaHeart } from "react-icons/fa";
import { BiSolidPlaneAlt } from "react-icons/bi";
import { IoDiamondSharp } from "react-icons/io5";
import { LuTicket } from "react-icons/lu";
const consult = require('../assets/images/consultants-2.2.png')

const SomeDetails = () => {
  return (
    <div className='main-details'>
        
        <section className='main-some-section'>

            <div className="main-some-heading">
                <h1>Meet Your Personal Travel Advisor!</h1>
            </div>

            <div className="desc">
                <p>At Wowfare, we’re all about making travel easy and stress-free.
                     As a trusted and reliable travel agency in the US, 
                     we’re committed to finding you the most affordable airfares
                      for all your travel needs – whether you’re planning a 
                      vacation, business trip, or family visit.  Plus, our 
                      travel experts can access exclusive deals and unpublished
                       fares you won’t find anywhere else. We can offer you
                        excellent prices by tapping into our longstanding 
                        partnerships with airlines.
                     This means we can access exclusive deals and discounts
                      not typically available to the public. </p>
            </div>

            <div className="sub-some-div">

                <img className='consult-img' src={consult} alt="" />
                <h2 className='h2-k'>Contact one of 120 travel specialists, each boasting <br />
                 over ten years of experience in the industry.</h2>
                <div className="btn-8">
                    <div className="icon-10"><FaPhoneAlt /></div>
                <button className='number'>(833)436-0717</button>
                </div>
            </div>
            <hr className='hr'/>

            <div className="some-details-main-footer">

            <div className="some-details-footer">
                <div className="icon-11">
                <FaUserFriends />
                </div>
                <div className="some-details-other-details">
                    <span className='some-details-span'>2,100+</span>
                    <span>Online Agents</span>
                </div>
            </div>

            <div className="some-details-footer">
                <div className="icon-11">
                <BiSolidPlaneAlt />
                </div>
                <div className="some-details-other-details">
                    <span className='some-details-span'>900,000+</span>
                    <span>Airfares booked</span>
                </div>
            </div>

            <div className="some-details-footer">
                <div className="icon-11">
                <IoDiamondSharp />
                </div>
                <div className="some-details-other-details">
                    <span className='some-details-span'>10,000+</span>
                    <span>Special offers</span>
                </div>
            </div>

            <div className="some-details-footer">
                <div className="icon-11">
                <LuTicket />
                </div>
                <div className="some-details-other-details">
                    <span className='some-details-span'>3+ MLN</span>
                    <span>Ticket purchased</span>
                </div>
            </div>

            <div className="some-details-footer">
                <div className="icon-11">
                <FaHeart />
                </div>
                <div className="some-details-other-details">
                    <span className='some-details-span'>800,000+</span>
                    <span>Satisfied Customers</span>
                </div>
            </div>

            </div>
        </section>
    </div>
  )
}

export default SomeDetails