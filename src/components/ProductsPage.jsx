import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from './navbar/Header';
import Footer from './navbar/Footer';
import MenuBar from './navbar/MenuBar';
import Parallax from './Parallax';
import HeaderParallax from './HeaderParallax';
import conference from '../assets/images/conference-wide.jpg';
import admin from '../assets/images/admin.jpg';
import frontdesk from '../assets/images/frontdesk.jpg';

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

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { motion, AnimatePresence } from 'framer-motion';

import OurProducts from './OurProducts';
import ChairmansMessage from './ChairmansMessage';
import AboutUs from './AboutUs';
import WorkProcess from './WorkProcess';


import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import CampaignIcon from '@mui/icons-material/Campaign';
import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import SecurityIcon from '@mui/icons-material/Security';

import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import DeviceUnknownIcon from '@mui/icons-material/DeviceUnknown';

import background from '../assets/images/background.png';






export default function ProductsPage({ 
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
        imageUrl={frontdesk}//"/images/your-image.jpg";
            title={"Products"}
            subtitle={""}
        />}

        
            {/* <Hero  /> */}
            {/* <OurProducts /> */}
            {/* <ChairmansMessage />  */}
            {/* <AboutUs /> */}
            {/* <WorkProcess /> */}

            <div className="px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80 py-2"
        
                    style={{
                      backgroundImage: `url(${background})`, 
                      backgroundAttachment: 'fixed',
                      backgroundSize: 'contain',
                      backgroundPosition: 'center',
                    }}
        >
          <div className='flex flex-col items-center justify-center mt-12 mb-2'>
            <p className=' mb-2' style={{ color: '', fontWeight: '600', fontSize: '24px' }}>Our Products</p>
            <div className='bg-theme mb-2' style={{ width: '80px', height: '4px' }}></div>
          </div>
          





          <div className=' flex flex-col md:flex-row items-center justify-between '>
          <div className='flex flex-col w-full md:w-1/3 justify-center items-center rounded-md shadow-md m-2 p-8 bg-white min-h-[200px]'>
          <SecurityIcon className="mb-4" style={{ width: '40px', height: '40px', color: '#EBEA1C' }}/>
            <div className="mb-2" style={{ fontWeight: '600', fontSize: '16px' }}>Security Products/Services</div>
            <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div>
            <div className="px-8 text-center" style={{ fontSize: '16px', color: '#777777'  }}>
              We provide products and services to a nation state security forces for civil defence and protection.
            </div>
            <a href='/security-products' className="mt-4 cursor-pointer text-darkTheme hover:text-theme" style={{ fontWeight: '600', fontSize: '16px' }}>Read More</a>
          </div>
          <div className='flex flex-col w-full md:w-1/3 justify-center items-center rounded-md shadow-md m-2 p-8 bg-white min-h-[200px]'>
          <NetworkWifiIcon className="mb-4" style={{ width: '40px', height: '40px', color: '#EBEA1C' }}/>
            <div className="mb-2" style={{ fontWeight: '600', fontSize: '16px' }}>EFBroadband</div>
            <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div>
            <div className="px-8 text-center" style={{ fontSize: '16px', color: '#777777'   }}>
              Providing high-speed internet connectivity services for homes and offices (both outdoor and indoor).
            </div>
            <a href='/ef-broadband' className="mt-4 cursor-pointer text-darkTheme hover:text-theme" style={{ fontWeight: '600', fontSize: '16px' }}>Read More</a>
          </div>
          <div className='flex flex-col w-full md:w-1/3 justify-center items-center rounded-md shadow-md m-2 p-8 bg-white min-h-[200px]'>
          <SpeakerPhoneIcon className="mb-4" style={{ width: '40px', height: '40px', color: '#EBEA1C' }}/>
            <div className="mb-2" style={{ fontWeight: '600', fontSize: '16px' }}>Communication Gadgets</div>
            <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div>
            <div className="px-8 text-center" style={{ fontSize: '16px', color: '#777777'   }}>
              We specialize in the customization of Mobile phones, global walkie-talkie and trackers.
            </div>
            <a href='/communication-gadgets' className="mt-4 cursor-pointer text-darkTheme hover:text-theme" style={{ fontWeight: '600', fontSize: '16px' }}>Read More</a>
          </div>

        </div>




        <div className=' flex flex-col md:flex-row items-center justify-between'>
          
          <div className='flex flex-col w-full md:w-1/3 justify-center items-center rounded-md shadow-md m-2 p-8 bg-white min-h-[200px]'>
          <ShoppingCartIcon className="mb-4" style={{ width: '40px', height: '40px', color: '#EBEA1C' }}/>
            <div className="mb-2" style={{ fontWeight: '600', fontSize: '16px' }}>E-Commerce</div>
            <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div>
            <div className="px-8 text-center" style={{ fontSize: '16px', color: '#777777'   }}>
              Providing exquisite virtual shopping experiences, to customers and business directories in Africa.
            </div>
            <a href='/e-commerce' className="mt-4 cursor-pointer text-darkTheme hover:text-theme" style={{ fontWeight: '600', fontSize: '16px' }}>Read More</a>
          </div>
          <div className='flex flex-col w-full md:w-1/3 justify-center items-center rounded-md shadow-md m-2 p-8 bg-white min-h-[200px]'>
          <CloudUploadIcon className="mb-4" style={{ width: '40px', height: '40px', color: '#EBEA1C' }}/>
            <div className="mb-2" style={{ fontWeight: '600', fontSize: '16px' }}>Cloud Services</div>
            <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div>
            <div className="px-8 text-center" style={{ fontSize: '16px', color: '#777777'   }}>
              Providing unlimited cloud storage services and backup services on data most important to you.
            </div>
            <a href='/cloud-services' className="mt-4 cursor-pointer text-darkTheme hover:text-theme" style={{ fontWeight: '600', fontSize: '16px' }}>Read More</a>
          </div>
          <div className='flex flex-col w-full md:w-1/3 justify-center items-center rounded-md shadow-md m-2 p-8 bg-white min-h-[200px]'>
          <DeviceUnknownIcon className="mb-4" style={{ width: '40px', height: '40px', color: '#EBEA1C' }}/>
            <div className="mb-2" style={{ fontWeight: '600', fontSize: '16px' }}>EFPhonetaxi</div>
            <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div>
            <div className="px-8 text-center" style={{ fontSize: '16px', color: '#777777'   }}>
            An anti-theft system that protects user data and prevents the sale of stolen phones, and arrest of offenders.
            </div>
            <a href='/ef-phone' className="mt-4 cursor-pointer text-darkTheme hover:text-theme" style={{ fontWeight: '600', fontSize: '16px' }}>Read More</a>
          </div>

        </div>


        <div className=' flex flex-col md:flex-row items-center justify-between mt-4 mb-8'>
          
          <div className='flex flex-col w-full md:w-1/3 justify-center items-center rounded-md shadow-md m-2 p-8 bg-white min-h-[200px]'>
          <CampaignIcon className="mb-4" style={{ width: '40px', height: '40px', color: '#EBEA1C' }}/>
            <div className="mb-2" style={{ fontWeight: '600', fontSize: '16px' }}>Alert Services</div>
            <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div>
            <div className="px-8 text-center" style={{ fontSize: '16px', color: '#777777'   }}>
              Providing Emergency Alert service for a nation, state or local government using the state of the art technology.
            </div>
            <a href='/alert-services' className="mt-4 cursor-pointer text-darkTheme hover:text-theme" style={{ fontWeight: '600', fontSize: '16px' }}>Read More</a>
          </div>
          <div className='flex flex-col w-full md:w-1/3 justify-center items-center rounded-md shadow-md m-2 p-8 bg-white min-h-[200px]'>
          <LocationSearchingIcon className="mb-4" style={{ width: '40px', height: '40px', color: '#EBEA1C' }}/>
            <div className="mb-2" style={{ fontWeight: '600', fontSize: '16px' }}>Tracker Systems and Devices</div>
            <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div>
            <div className="px-8 text-center" style={{ fontSize: '16px', color: '#777777'   }}>
              Our top notch trackers are of designed to give you the best security in your home, automobile, and in public.
            </div>
            <a href='/tracker-systems' className="mt-4 cursor-pointer text-darkTheme hover:text-theme" style={{ fontWeight: '600', fontSize: '16px' }}>Read More</a>
          </div>
        </div>
        

      </div>







      {isMobile ? <div></div> :  <Parallax 
        imageUrl={conference}//"/images/your-image.jpg";
            title={"Bringing Your Dreams To Reality Using Modern Technology"}
            subtitle={"Ready to begin your journey with us?"}
        />}


          </div>
        </div>      
      <Footer 
        isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu}
      />


    </div>
  );
}
