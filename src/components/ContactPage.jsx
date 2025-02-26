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

export default function ContactPage({ 
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
            title={"Contact Us"}
            subtitle={""}
        />}
          


            {/* <Hero  /> */}
            {/* <OurProducts /> */}
            {/* <ChairmansMessage />  */}
            {/* <AboutUs /> */}
            {/* <WorkProcess /> */}







            <div className='px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80  flex flex-col md:flex-row items-center justify-between mb-20 mt-20' 
            
            style={{
              backgroundImage: `url(${background})`, 
              backgroundAttachment: 'fixed',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
            >
        <div className='flex w-full h-full md:w-1/3 ' >
          <div className='flex flex-col p-4'>
            <div className='text-lg' style={{ fontWeight: '600', cursor: 'pointer' }}>Office Location</div>
            <hr className='my-2' style={{ color: '#CBD67A'  }}/>
            <div className='flex mr-4'>
              <div className='mr-1'><PlaceIcon style={{ color: '#CBD67A'  }}/></div>
              <div className='' style={{fontSize: '16px', color: '#777777'  }}>No. 31, Pope John Paul Street, maitama, FCT Abuja</div>
            </div>

            <div className='text-lg mt-4' style={{ fontWeight: '600', cursor: 'pointer' }}>Office Hours</div>
            <hr className='my-2' style={{ color: '#CBD67A'  }}/>
            <div className='flex mr-4'>
              <div className='mr-1'><AccessTimeIcon style={{ color: '#CBD67A'  }} /></div>
              <div className='flex flex-col '>
              <div className='' style={{fontSize: '16px', color: '#777777'  }}>9:00 AM - 5:00 PM</div>
              <div className='' style={{fontSize: '16px', color: '#777777'  }}>Monday - Friday</div>
              </div>
          </div>

          <div className='text-lg mt-4' style={{ fontWeight: '600', cursor: 'pointer' }}>Phone</div>
            <hr className='my-2' style={{ color: '#CBD67A'  }}/>
            <div className='flex mr-4'>
              <div className='mr-1'><CallIcon style={{ color: '#CBD67A'  }} /></div>
              <div className='' style={{fontSize: '16px', color: '#777777'  }}>+234 809 111 3333</div>
          </div>

          <div className='text-lg mt-4' style={{ fontWeight: '600', cursor: 'pointer' }}>Email</div>
            <hr className='my-2' style={{ color: '#CBD67A'  }}/>
            <div className='flex mr-4'>
              <div className='mr-1'><EmailIcon style={{ color: '#CBD67A'  }} /></div>
              <div className='' style={{fontSize: '16px', color: '#777777'  }}>info@eftechnology.net</div>
          </div>

          </div>
          
          
        </div>
        <div className='flex w-full  h-full md:w-2/3'>
          <div className='flex flex-col p-4'>
            <div className='text-lg mb-2 font-bold' style={{  }}>Send us a message</div>
            <div className='mb-10' style={{fontSize: '16px', color: '#777777'  }}>Fill the form below to contact us and we will get back to you as soon as possible.</div>

<input
              type='text'
              placeholder='Name'
              className='mt-4 border border-gray-300 rounded-sm py-2 px-2 bg-white'
              // onChange={(e) => setEmail(e.target.value)} value={email}
              style={{ width: '100%' }}
            />

<div className='flex md:flex-row flex-col'>
<input
              type='text'
              placeholder='Phone Number*'
              className='mt-4 border border-gray-300 rounded-sm py-2 px-2 sm:mr-2 bg-white'
              // onChange={(e) => setEmail(e.target.value)} value={email}
              style={{ width: '100%' }}
            />
<input
              type='text'
              placeholder='Email*'
              className='mt-4 border border-gray-300 rounded-sm py-2 px-2  bg-white'
              // onChange={(e) => setEmail(e.target.value)} value={email}
              style={{ width: '100%' }}
            />
</div>

<input
              type='text'
              placeholder='Subject'
              className='mt-4 border border-gray-300 rounded-sm py-2 px-2  bg-white'
              // onChange={(e) => setEmail(e.target.value)} value={email}
              style={{ width: '100%' }}
            />

<input
              type='text'
              placeholder='Type in your message'
              className='mt-4 border border-gray-300 rounded-sm py-2 px-2  bg-white'
              // onChange={(e) => setEmail(e.target.value)} value={email}
              style={{ width: '100%' }}
            />



            <div 
              // onClick={() => { handleSubscribeToNewsletter() }}
              style={{ borderWidth: '0px', backgroundColor: '#CBD67A', color: '#424218', width: '200px' }}
              className='mt-4 text-center  rounded-sm px-4 py-2  text-sm cursor-pointer'>
              Send Message
            </div>

          </div>
          
        </div>

      </div> 




      {/* {
      isMenuOpen ? <></> :
      <div className="flex md:flex-row flex-col  h-auto px-4 lg:px-16 xl:px-24 2xl:px-80 pt-4 md:pb-2 pb-8 items-center w-full">
        
        <div className="flex flex-col p-4 my-4 w-full items-center">
          
          <div className='flex flex-col sm:flex-row relative '>
            <input
              type='text'
              placeholder='Enter your email here'
              className='pl-4 border border-gray-300 rounded-lg py-2 px-2 text-center'
              // onChange={(e) => setEmail(e.target.value)} value={email}
              style={{ width: '320px' }}
            />
            <div 
              // onClick={() => { handleSubscribeToNewsletter() }}
              style={{ borderWidth: '0px', backgroundColor: '#CBD67A' }}
              className='text-center mt-4 sm:mt-0 sm:ml-2  rounded-sm px-4 py-2  text-sm cursor-pointer'>
              Subscribe
            </div>
          </div>          
        </div>
        
      </div>
      } */}



          </div>
          
        </div>      
        <Parallax 
        imageUrl={conference}//"/images/your-image.jpg";
            title={"Bringing Your Dreams To Reality Using Modern Technology"}
            subtitle={"Ready to begin your journey with us?"}
        />
      <Footer 
        isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu}
      />


    </div>
  );
}
