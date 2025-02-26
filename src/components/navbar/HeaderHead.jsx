import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import logo from '../../assets/images/logo.png';
import appStore from '../../assets/svg/app-store-badge.svg';
import playStore from '../../assets/svg/play-store-badge.svg';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

import stars from '../../assets/images/stars.png';

export default function HeaderHead({ 
  isMobile, isMenuOpen, toggleMenu, closeMenu
 }) {
  const navigate = useNavigate();

  useEffect(() => {
  }, []);


  return (
    <>
      {/* <div className="absolute inset-0 ">
        <img
          src={stars}
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div> */}
      <div className='px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80  flex flex-col md:flex-row items-center justify-between pt-2'  style={{ backgroundColor: '#1D2024' }}>
        <div className='flex w-1/2'>
          <div className='flex mr-8 items-center'>
            {/* <div className='mr-2'><PlaceIcon style={{ width: '18px', height: '20px', color: '#CBD67A'  }} /></div> */}
            <div className='' style={{ fontWeight: '600', cursor: 'pointer', color: '#CBD67A' }}>E.F NETWORK ORGANISATION</div>
          </div>
          <div className='flex mr-8 cursor-pointer'
            onClick={() => {}}
          >
              <div className='mr-2'><EmailIcon style={{ width: '18px', height: '20px', color: '#CBD67A'  }} /></div>
              <div className='flex flex-col' style={{ color: '#eeeeee' }}>
                <div>info@eftechnology.net</div>
              </div>
            </div>
            <div className='flex mr-8 cursor-pointer' 
            onClick={() => {}}
          >
              <div className='mr-2'><CallIcon style={{ width: '18px', height: '20px', color: '#CBD67A'  }} /></div>
              <div className='flex flex-col' style={{ color: '#eeeeee' }}>
                <div>+234 809 111 3333</div>
              </div>
            </div>
        </div>
        <div className='flex items-center justify-end w-1/2 h-full'>
          
        <div className='flex  items-center'>
              
        <div
            className=" flex items-center justify-center   hover:text-themeColor text-themeColor"
            style={{ height: '48px', width: '40px', borderRadius: '4px' }}
            // onClick={() => { logout(); }}
          >
            <a href='https://www.facebook.com/efnetworkltd' target='_blank'>
              <FacebookIcon 
                className='mr-4 cursor-pointer hover:text-themeColor'
                alt="" 
                style={{ width: '20px', height: '20px', objectFit: 'cover', color: '#CBD67A' }}
              />
              </a>
          </div>

          <div
            className=" flex items-center justify-center   hover:text-themeColor text-themeColor"
            style={{ height: '48px', width: '40px', borderRadius: '4px' }}
            // onClick={() => { logout(); }}
          >
            <a href='https://x.com/efnetworkltd' target='_blank'><XIcon   
                className='mr-4 cursor-pointer hover:text-themeColor'
                alt="" 
                style={{ width: '20px', height: '20px', objectFit: 'cover', color: '#CBD67A' }}
              /></a>
          </div>

          <div
            className=" flex items-center justify-center   hover:text-themeColor text-themeColor"
            style={{ height: '48px', width: '40px', borderRadius: '4px' }}
            // onClick={() => { logout(); }}
          >
            <a href='https://www.linkedin.com/company/ef-networks-ltd/posts/?feedView=all' target='_blank'><LinkedInIcon 
                className='mr-4 cursor-pointer hover:text-themeColor'
                alt="" 
                style={{ width: '20px', height: '20px', objectFit: 'cover', color: '#CBD67A' }}
              /></a>
          </div>

          <div
            className=" flex items-center justify-center   hover:text-themeColor text-themeColor"
            style={{ height: '48px', width: '40px', borderRadius: '4px' }}
            // onClick={() => { logout(); }}
          >
            <a href='https://www.instagram.com/efnetworkltd/' target='_blank'><InstagramIcon 
                className='mr-4 cursor-pointer hover:text-themeColor'                
                style={{ width: '20px', height: '20px', objectFit: 'cover', color: '#CBD67A' }}
              /></a>
          </div>
              
              
              
              
              
              
              
            </div>
         
          
        </div>

      </div>



      {/* <div className='px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80 py-2 flex flex-col md:flex-row justify-between items-center bg-amber-400'> 
        <div className="flex w-full justify-between items-center">
          <img
            className="block h-20 w-auto max-w-none"
            src={logo}
            alt="Logo"
            onClick={() => { navigate('/'); }}
            style={{ cursor: 'pointer' }}
          />

          <div className='ml-0'>
            <div className='flex bg-red-400 w-full  items-center z-50' style={{ height: "40px" }}>
              <div className='cursor-pointer mr-8' style={{  }} onClick={() => { 
                navigate('/'); 
                }}>
                <p className='text-sm text-black cursor-pointer' style={{ fontWeight: '600', cursor: 'pointer' }}>HOME</p>
              </div>

              <div className='cursor-pointer mr-8' style={{  }} onClick={() => { 
                // navigate('/login'); 
                }}>
                <p className='text-sm text-black cursor-pointer' style={{ fontWeight: '600', cursor: 'pointer' }}>COMPANY</p>
              </div>

              <div className='cursor-pointer mr-8' style={{  }} onClick={() => { 
                // navigate('/login'); 
                }}>
                <p className='text-sm text-black cursor-pointer' style={{ fontWeight: '600', cursor: 'pointer' }}>PRODUCTS</p>
              </div>

              <div className='cursor-pointer mr-8' style={{  }} onClick={() => { 
                // navigate('/login'); 
                }}>
                <p className='text-sm text-black cursor-pointer' style={{ fontWeight: '600', cursor: 'pointer' }}>EF GOLD</p>
              </div>

              <div className='cursor-pointer mr-8' style={{  }} onClick={() => { 
                // navigate('/login'); 
                }}>
                <p className='text-sm text-black cursor-pointer' style={{ fontWeight: '600', cursor: 'pointer' }}>EF ENERGY</p>
              </div>

              <div className='cursor-pointer mr-8' style={{  }} onClick={() => { 
                // navigate('/login'); 
                }}>
                <p className='text-sm text-black cursor-pointer' style={{ fontWeight: '600', cursor: 'pointer' }}>BUSINESSES</p>
              </div>

              <div className='cursor-pointer mr-8' style={{  }} onClick={() => { 
                // navigate('/login'); 
                }}>
                <p className='text-sm text-black cursor-pointer' style={{ fontWeight: '600', cursor: 'pointer' }}>MEDIA</p>
              </div>

              <div className='cursor-pointer mr-0' style={{  }} onClick={() => { 
                // navigate('/login'); 
                }}>
                <p className='text-sm text-black cursor-pointer' style={{ fontWeight: '600', cursor: 'pointer' }}>CONTACT</p>
              </div>

            </div>
          </div>
        </div>

        


      </div> */}

      
    </>
  );
}
