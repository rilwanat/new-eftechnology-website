import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

import p1 from '../assets/images/partners/gtb.png';
import p2 from '../assets/images/partners/zenith.png';
import p3 from '../assets/images/partners/google.jpg';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import conference from '../assets/images/conference-wide.jpg';

function OurPartners({ }) {

  const navigate = useNavigate();
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  


  
    const partnerImages = [
      p1,
      p2,
      p3,
    ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
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
        <div className="px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80 py-2 mt-4">          

<div className=' flex flex-col md:flex-row items-center justify-between mt-2 '>
          <div className='flex flex-col w-full md:w-1/2 justify-start  mx-2 p-4 '>
            <div className="mb-4" style={{ fontWeight: '600', fontSize: '16px' }}>OUR PARTNERS</div>
            
          </div>
          <div className='flex flex-col w-full md:w-1/2 justify-center  mx-2 p-4'>
          
          <div className='flex w-full h-full items-center justify-center mt-4'
>
      <div  className='w-full' style={{  }}>
        <Slider {...settings}>
          {partnerImages.map((image, index) => (
            <div key={index} 
            className='flex w-full items-center justify-center px-2  ' >
              <img 
              // className='border-2 border-theme'
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>


          </div>

        </div>



      </div>
    );
}

export default OurPartners;