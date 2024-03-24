import React from 'react'
import './Banner.css'

const logo1 = require('../../assets/images/airindia.png')
const logo2 = require('../../assets/images/amrican.png')
const logo3 = require('../../assets/images/japan.jpg')
const logo4 = require('../../assets/images/philipines.png')
const logo5 = require('../../assets/images/uk.png')
const logo6 = require('../../assets/images/ita.png')


const Banner = () => {
  return (
    <div className='banner-main-div-k'>

        <section className='banner-section-k'>

            <h1 className='banner-h1-k'>Our Exclusive Cooperation with Airlines</h1>

            <div className="desc-K-k">
                <p>Wowfare is a reputable travel company and reliable advisor with over a 
                    decade of experience collaborating with a wide range of airlines and 
                    travel agencies. Wowfare was founded in 2007 and is proud of enduring
                     relationships with top airlines and carriers. Our exclusive contracts 
                     prevent us from displaying the specifics of our discounted fares. 
                     However, don’t worry – simply fill out our request form and one of
                      our friendly Wowfare travel experts will reach out to you shortly
                       with the best itinerary and price for your flight. 
                       We can’t wait to help you plan your next journey!</p>
            </div>

            <div className="banner-main-img-k">
                <div className="banner-img-k">
                    <img src={logo1} alt="" />
                </div>

                <div className="banner-img-k">
                    <img src={logo2} alt="" />
                </div>

                <div className="banner-img-k">
                    <img src={logo3} alt="" />
                </div>

                <div className="banner-img-k">
                    <img src={logo4} alt="" />
                </div>

                <div className="banner-img-k">
                    <img src={logo5} alt="" />
                </div>

                <div className="banner-img-k">
                    <img src={logo6} alt="" />
                </div>

               
            </div>
        </section>
    </div>
  )
}

export default Banner