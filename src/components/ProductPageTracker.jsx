import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from './navbar/Header';
import Footer from './navbar/Footer';
import MenuBar from './navbar/MenuBar';
import Parallax from './Parallax';
import HeaderParallax from './HeaderParallax';
import conference from '../assets/images/conference-wide.jpg';
import admin from '../assets/images/admin.jpg';

import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import logo from '../assets/images/logo.png';
import appStore from '../assets/svg/app-store-badge.svg';
import playStore from '../assets/svg/play-store-badge.svg';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

import stars from '../assets/images/stars.png';

import Hero from './Hero';
import background from '../assets/images/background.png';

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { motion, AnimatePresence } from 'framer-motion';

import OurProducts from './OurProducts';
import ChairmansMessage from './ChairmansMessage';
import AboutUs from './AboutUs';
import WorkProcess from './WorkProcess';

export default function ProductPageTracker({ 
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


        <div className='flex'>
          <div className='w-full rounded-lg'>


          {isMenuOpen ? <div></div> : <HeaderParallax 
        imageUrl={admin}//"/images/your-image.jpg";
            title={"Tracker Systems"}
            subtitle={""}
        />}
        
            {/* <Hero  /> */}
            {/* <OurProducts /> */}
            {/* <ChairmansMessage />  */}
            {/* <AboutUs /> */}
            {/* <WorkProcess /> */}


            <div className="flex sm:flex-row flex-col px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80 py-2 mb-12"
        
        style={{
          backgroundImage: `url(${background})`, 
          backgroundAttachment: 'fixed',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
        
        >
  <div className='w-full sm:w-7/10 flex flex-col  justify-center mt-12 mb-2'>
    <p className=' mb-2' style={{ color: '', fontWeight: '600', fontSize: '24px' }}>Tracker System and Devices</p>
    <div className='bg-theme mb-2' style={{ width: '80px', height: '4px' }}></div>
    <div className=" pr-8" style={{ fontSize: '16px', color: '#777777'   }}>
    Experience unbeatable security and peace of mind with our state-of-the-art Tracker 
    System and Devices. Whether it's your home, vehicle, or personal safety, our cutting-edge 
    technology ensures you're always in control—anytime, anywhere. With 24/7 real-time tracking 
    and precision accuracy, your assets are never out of sight. Trust E.F Network to deliver 
    top-tier solutions that redefine protection. Discover the difference where innovation meets 
    reliability—because your safety deserves nothing less than the best.
    </div>
  </div>

  <div className="w-full sm:w-3/10 flex flex-col  mt-12 mb-2 border border-theme p-8 bg-gray-100">
  <p className=' mb-2' style={{ color: '', fontWeight: '600', fontSize: '18px' }}>OTHER SERVICES</p>
    <div className='bg-theme mb-2' style={{ width: '80px', height: '2px' }}></div>
    <div className=" mt-1" style={{ fontSize: '16px', color: '#777777'   }}><a href='#'>PriceCheck24</a></div>
    <div className=" mt-1" style={{ fontSize: '16px', color: '#777777'   }}><a href='/alert-services'>Alert Services</a></div>
    <div className=" mt-1" style={{ fontSize: '16px', color: '#777777'   }}><a href='/communication-gadgets'>Communication Gadgets</a></div>
    <div className=" mt-1" style={{ fontSize: '16px', color: '#777777'   }}><a href='/e-commerce'>E-Commerce</a></div>
    <div className=" mt-1" style={{ fontSize: '16px', color: '#777777'   }}><a href='/ef-broadband'>EF Broadcast</a></div>
    <div className=" mt-1" style={{ fontSize: '16px', color: '#777777'   }}><a href='/security-products'>Security Products/Service</a></div>
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
