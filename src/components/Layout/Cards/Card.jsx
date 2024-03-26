import React from 'react'
import './Card.css'
import { Link } from "react-router-dom";

const Card = ({item}) => {

 
  return (
    <>
   
    <div className="featuredItem">
      <Link to={"/searchflight"} className="featuredItem">
        <img
          src={item.image}
          alt={item.name}
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>{item.name}</h1>
          <h2>{item.flights} Flights</h2>
        </div>
      </Link>
    </div>
      
    


    </>

  )
}

export default Card