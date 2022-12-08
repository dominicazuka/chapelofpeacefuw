import React, {useRef, useState} from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles 
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { CardMedia, Box } from '@mui/material';


function Slider () {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="mySwiper mt-5"
      >
        <SwiperSlide>
          <Box sx={{height:"100vh"}}>
            <CardMedia
                  component="img"
                  height="100%"
                  image="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt="first slide"
                />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{height:"100vh"}}>
            <CardMedia
                  component="img"
                  height="100%"
                  image="https://swiperjs.com/demos/images/nature-2.jpg"
                  alt="first slide"
                />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{height:"100vh"}}>
            <CardMedia
                  component="img"
                  height="100%"
                  image="https://swiperjs.com/demos/images/nature-3.jpg"
                  alt="first slide"
                />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box sx={{height:"100vh"}}>
            <CardMedia
                  component="img"
                  height="100%"
                  image="https://swiperjs.com/demos/images/nature-4.jpg"
                  alt="first slide"
                />
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
