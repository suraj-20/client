import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Testonomials.css';

// import required modules
import { Pagination } from 'swiper/modules';
const img1 = require('../../assets/bill.png')


const Testnomial = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}

        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        autoplay={{ delay: 1000 }} // Set autoplay with a delay of 3 seconds (3000 milliseconds)

      >
        <SwiperSlide></SwiperSlide>
       
      </Swiper>
    </>
  )
}

export default Testnomial