import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import logo from '../assets/images/logo.png';

const EFGoldPage = () => {
  const images = [logo, logo, logo, logo]; // Use your images here

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '80%' }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} style={{ display: 'flex', justifyContent: 'center' }}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default EFGoldPage;