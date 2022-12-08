import React from 'react';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles 
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// import required modules
import { EffectFade, Navigation, Pagination } from "swiper";
import { CardMedia } from '@mui/material';

function MissionOutreachSLider () {
  return (
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
          <CardMedia
                  component="img"
                  height="500"
                  image="https://swiperjs.com/demos/images/nature-1.jpg"
                  alt="first slide"
                />
        </SwiperSlide>
        <SwiperSlide>
          <CardMedia
                  component="img"
                  height="500"
                  image="https://swiperjs.com/demos/images/nature-2.jpg"
                  alt="first slide"
                />
        </SwiperSlide>
        <SwiperSlide>
          <CardMedia
                  component="img"
                  height="500"
                  image="https://swiperjs.com/demos/images/nature-3.jpg"
                  alt="first slide"
                />
        </SwiperSlide>
        <SwiperSlide>
          <CardMedia
                  component="img"
                  height="500"
                  image="https://swiperjs.com/demos/images/nature-2.jpg"
                  alt="first slide"
                />
        </SwiperSlide>
      </Swiper>
  );
}

export default MissionOutreachSLider;
