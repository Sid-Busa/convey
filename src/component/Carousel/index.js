import React from "react";
import Slider from "react-slick";
import './style.css'
import Card from "../Card";
import {data} from './data'

const Castom = () => {
  const config = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    swipeToSlide: true,
    focusOnSelect: true,
    centerPadding: '200px',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '100px',
          slidesToShow: 1
        }
      },

      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '60px',
          slidesToShow: 1
        }
      }
    ]
  };
  return <Slider {...config}>
    {data.map((item) => (
      <div key={item.chapter} className="items" >
        <Card 
          chapter={item.chapter}
          duration={item.duration}
          title={item.title}
          points={item.points}
        />
      </div>
    ))}
</Slider>
};

export default Castom;
