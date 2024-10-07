"use client"

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TestSlider = () => {
  const images = [
    'top_mod_apex/image.png',
    'top_mod_apex/image2.png',
    'top_mod_apex/table.png',
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="flex justify-center items-center" style={{ height: '400px', width: '100%' }}>
      <Slider {...sliderSettings}>
        {images.map((image, index) => (
          <div key={index} className="flex justify-center items-center">
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="h-full w-auto object-contain"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestSlider;
