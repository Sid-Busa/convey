import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './style.css'

// import required modules
import { EffectCards, Navigation, Pagination, } from 'swiper/modules';
import Card from './Card';

export default function Swip() {
  return (
    <>
      <div className='swip-title-container' >
        <h4> Testimonials </h4>
      </div>
      <div className='left-coma-container' >
        <img src='/left-com.png' alt='left-com' />
      </div>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards,Navigation, Pagination]}
        className="mySwiper"
        navigation={true}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
        <SwiperSlide>
          <Card />
        </SwiperSlide>
      </Swiper>
      <div className='right-coma-container' >
        <img src='/right-coma.png' alt='left-com' />
      </div>
    
    </>
  );
}
