import React, { useState } from 'react';
import './style.css'; // Create this CSS file for styling
import Card from '../Card'
import { data } from './data';


const CustomCarousel = () => {
  const carouselItems = data

  const [currentIndex, setCurrentIndex] = useState(2);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="custom-carousel">
      <div className="carousel-wrapper">
        <div
          className="carousel"
          style={{
            transform: `translateX(-${currentIndex * (500 + (currentIndex + 55) )}px)`,
          }} 
        >
          <div className='carousel-item' > </div>
          {data.map((item, index) => (
              <div
                key={item.chapter}
                className={`carousel-item ${currentIndex === index ? 'active' : ''}`}
              >
                <Card 
                  chapter={item.chapter}
                  duration={item.duration}
                  title={item.title}
                  points={item.points}
                />
              </div>
            ))}
            <div className='carousel-item' > </div>
        </div>
        <div className="dots">
          {carouselItems.map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomCarousel;
