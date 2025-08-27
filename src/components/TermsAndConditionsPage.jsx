import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from './navbar/Header';
import Footer from './navbar/Footer';
import MenuBar from './navbar/MenuBar';
import Parallax from './Parallax';
import HeaderParallax from './HeaderParallax';
import conference from '../assets/images/conference-wide.jpg';
import admin from '../assets/images/admin.jpg';

import logo from '../assets/images/logo.png';
import logo2 from '../assets/images/logo.png';

import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import appStore from '../assets/svg/app-store-badge.svg';
import playStore from '../assets/svg/play-store-badge.svg';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


import background from '../assets/images/background.png';

export default function TermsAndConditionsPage({ 
    isMobile, isMenuOpen, toggleMenu, closeMenu
 }) {





  

  return (
    <div className='bg-gray-100  text-sm'>
      {/* <div className="absolute inset-0 ">
        <img
          src={stars}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div> */}

      <Header 
        isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu}
      />
      
      
      {isMobile ? <div></div> :  <MenuBar/>}


        <div className='flex sm:h-full h-screen'>
          <div className='w-full rounded-lg'>

          {isMenuOpen ? <div></div> : <HeaderParallax 
        imageUrl={admin}//"/images/your-image.jpg";
            title={"Terms And Conditions"}
            subtitle={""}
        />}
          


            {/* <Hero  /> */}
            {/* <OurProducts /> */}
            {/* <ChairmansMessage />  */}
            {/* <AboutUs /> */}
            {/* <WorkProcess /> */}







            <div className='px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80  flex flex-col md:flex-row items-center justify-between mb-20 mt-20' 
            
            // style={{
            //   backgroundImage: `url(${background})`, 
            //   backgroundAttachment: 'fixed',
            //   backgroundSize: 'contain',
            //   backgroundPosition: 'center',
            // }}
            >
              <div className='flex flex-col'>


              </div>

      </div> 






          </div>
          
        </div>  
        
      <Footer 
        isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu}
      />


    </div>
  );
}
