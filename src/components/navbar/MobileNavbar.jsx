import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faTimes } from '@fortawesome/free-solid-svg-icons';

import { IconButton } from '@mui/material';

import styles from './MobileNavbar.module.css';
import { NavLink } from 'react-router-dom';
import { navData } from './NavData';

import logo from '../../assets/images/logo.png';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';

import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

import MobileMenu from './MobileMenu';

export default function MobileNavbar({ 
  isMobile, isMenuOpen, toggleMenu, closeMenu
 }) {

  return (
    <div className="w-full fixed top-0 bg-darkTheme  pl-4 text-sm" style={{  }}>
      <div className="flex justify-between py-2">
        
      <div className="flex ">
        

        <div className="flex items-center">
          <img
            className="block h-12 w-auto max-w-none mr-2"
            src={logo} 
            alt="Logo"
            // onClick={toggleMenu}
            // onClick={() => {navigate('/');}}
            style={{ cursor: 'pointer' }}
          />

<div className='text-theme' style={{ fontWeight: '600', cursor: 'pointer', }}>E.F NETWORK ORGANISATION</div>
        </div>
      </div>

        <div className="flex items-center mr-4 " style={{  }}>
          <div className="mr-4 md:flex justify-end" style={{}}>
            <div className="text-right">
              {/* <p className="text-sm font-bold md:">{storedAdminDetails && storedAdminDetails.Email}</p> */}
              {/* <p className="text-sm md:">{'#'}</p> */}
            </div>
          </div>

          {/* <div className='mr-4 flex '>
            <div
              className=" flex items-center justify-center   hover:text-scGreen  mr-2"
              style={{ height: '40px', width: '40px', borderRadius: '4px' }}
              // onClick={() => { logout(); }}
              >
              <SearchIcon className=" cursor-pointer " />
            </div>
            <div
              className=" flex items-center justify-center   hover:text-scGreen "
              style={{ height: '40px', width: '40px', borderRadius: '4px' }}
              // onClick={() => { logout(); }}
              >
              <PersonIcon className=" cursor-pointer " />
            </div>
          </div> */}

          <IconButton
          edge="start"
          aria-label="menu"
          sx={{ color: 'white', marginRight: 2 }} 
          onClick={toggleMenu}
        >
          <div style={{ width: '20px', height: '24px' }}>
            <div className='bg-white' style={{ width: '20px', height: '2px', marginTop: '4px', marginBottom: '6px' }}></div>
            <div className='bg-white' style={{ width: '20px', height: '2px', marginBottom: '6px' }}></div>
            <div className='bg-white' style={{ width: '20px', height: '2px', }}></div>
          </div>
        </IconButton>

        </div>


      </div>


      {/* Mobile menu */}
      {isMenuOpen && (
        <MobileMenu 
          isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu}
        />
      )}
    </div>
  );
}
