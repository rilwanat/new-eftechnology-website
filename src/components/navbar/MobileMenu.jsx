import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import stars from '../../assets/images/stars.png';
import appStore from '../../assets/svg/app-store-badge.svg';
import playStore from '../../assets/svg/play-store-badge.svg';


import styles from './MobileNavbar.module.css';
import { NavLink } from 'react-router-dom';
import { navData } from './NavData';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import styled from '@emotion/styled';
import { motion } from 'framer-motion';
//

import { AppBar, Toolbar, IconButton, Typography, Box, useMediaQuery } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import PersonIcon from '@mui/icons-material/Person';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import CloseIcon from '@mui/icons-material/Close';``

const SlideInMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  z-index: 1000; /* Ensure the menu is on top of other content */
  overflow-x: hidden;
`;
const MenuContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;
const menuItemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.5 } },
};







function MobileMenu({ 
  isMobile, isMenuOpen, toggleMenu, closeMenu
 }) {


  const navigate = useNavigate();
  

  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const toggleAccount = () => {
    setIsAccountOpen(!isAccountOpen);
  };
  







  useEffect(() => {
    
  }, []);



  return (

<div className="navbar-menu relative">
          <div className="navbar-backdrop fixed inset-0" onClick={closeMenu}></div>





<SlideInMenu
    initial={{ x: '-100%' }}
    animate={{ x: isMenuOpen ? 0 : '-100%' }}
    transition={{ duration: 0.4 }}
    className=''
  >
    <MenuContent className=''>
      <div className=''>
        <div className='flex justify-between items-center pl-4 pr-9  bg-gradient-to-r from-theme to-black shadow-lg'>

          <div className='flex items-center'>
          <img
            className="block h-12  my-2 mr-2"
            src={logo}
            alt="Logo"
            onClick={() => {
              navigate('/');
            toggleMenu();
          }}
            style={{ cursor: 'pointer' }}
          />
          <div className='text-lg text-white' style={{ fontWeight: '500', cursor: 'pointer', }}>E.F NETWORK ORGANISATION</div>

          </div>

          <CloseIcon className='text-theme ' onClick={toggleMenu} style={{ cursor: 'pointer', width: '20px', height: '20px',  }}/>
        </div>
        {/* <hr /> */}
        {/* Apply variants to each menu item */}
        <div className='pb-2 ml-0 pt-4'>
        {/* <motion.span
          variants={menuItemVariants}
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          className="text-sm  cursor-pointer block my-0 mx-6"
          onClick={() => {
            navigate('/');
            toggleMenu();
        }}
        >
          Home
        </motion.span> */}

        <motion.span
          variants={menuItemVariants}
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          className="text-lg  cursor-pointer block my-0 mx-6 rounded-lg px-4 py-2 hover:bg-darkTheme hover:text-theme"
          onClick={() => {
            navigate('/about-us');
            toggleMenu();
          }}
        >
          About Us
        </motion.span>

        <motion.span
          variants={menuItemVariants}
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          className="text-lg  cursor-pointer block my-0 mx-6 rounded-lg px-4 py-2 hover:bg-darkTheme hover:text-theme"
          onClick={() => {
            navigate('/our-team');
            toggleMenu();
          }}
        >
          Our Team
        </motion.span>

        <motion.span
          variants={menuItemVariants}
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          className="text-lg  cursor-pointer block my-0 mx-6 rounded-lg px-4 py-2 hover:bg-darkTheme hover:text-theme"
          onClick={() => {
            navigate('/why-choose-us');
            toggleMenu();
          }}
        >
          Why Choose Us
        </motion.span>

        <motion.span
          variants={menuItemVariants}
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          className="text-lg  cursor-pointer block my-0 mx-6 rounded-lg px-4 py-2 hover:bg-darkTheme hover:text-theme"
          onClick={() => {
            navigate('/ef-gold');
            toggleMenu();
          }}
        >
          EF Gold
        </motion.span>

        <motion.span
          variants={menuItemVariants}
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          className="text-lg  cursor-pointer block my-0 mx-6 rounded-lg px-4 py-2 hover:bg-darkTheme hover:text-theme"
          onClick={() => {
            navigate('/ef-energy');
            toggleMenu();
          }}
        >
          EF Energy
        </motion.span>

        <motion.span
          variants={menuItemVariants}
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          className="text-lg  cursor-pointer block my-0 mx-6 rounded-lg px-4 py-2 hover:bg-darkTheme hover:text-theme"
          onClick={() => {
            // navigate('/about-us');
            toggleMenu();
          }}
        >
          Media
        </motion.span>

        <motion.span
          variants={menuItemVariants}
          initial="hidden"
          animate={isMenuOpen ? "visible" : "hidden"}
          className="text-lg  cursor-pointer block my-0 mx-6 rounded-lg px-4 py-2 hover:bg-darkTheme hover:text-theme"
          onClick={() => {
            navigate('/contact');
            toggleMenu();
          }}
        >
          Contact
        </motion.span>
        </div>
        
        

        <div
                            className="background-icon"
                            style={{
                              position: 'absolute',
                              bottom: '30px', right: '30px',
                              transition: 'transform 1.5s ease',
                            }}
                          >
                            <img
            className="block h-32 opacity-25 my-2 mr-2"
            src={logo}
            alt="Logo"
          />

                          </div>





      </div>
    {/* Fixed div at the bottom */}
    <div className="fixed bottom-0 left-0 w-full py-4">
      
<div className='mx-8'>
{/* <hr className='my-2'/> */}



              

</div>


{/* <Footer /> */}


</div>

</MenuContent>
  </SlideInMenu>






        </div>
  );
}

export default MobileMenu;
