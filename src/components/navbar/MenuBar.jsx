import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';




import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import logo from '../../assets/images/logo.png';

import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { motion, AnimatePresence } from 'framer-motion';


export default function MenuBar({ 
  isMobile, isMenuOpen, toggleMenu, closeMenu
 }) {



    
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const menuItems = [
    { label: 'HOME', href: '/' },
    { label: 'COMPANY', dropdown: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Our Team', href: '/our-team' },
      { label: 'Why Choose Us', href: '/why-choose-us' },
      { label: 'Careers', href: '/careers' },
      { label: 'FAQ', href: '/faq' },
    ] },
    { label: 'PRODUCTS', dropdown: [
      { label: 'Security Products/Services', href: '/security-products' },
      { label: 'EFBroadband', href: '/ef-broadband' },
      { label: 'Communication Gadgets', href: '/communication-gadgets' },
      { label: 'E-Commerce', href: '/e-commerce' },
      { label: 'Cloud Services', href: '/cloud-services' },
      { label: 'EFPhonetaxi', href: '/ef-phone' },
      { label: 'Alert Services', href: '/alert-services' },
      { label: 'Tracker System And Devices', href: '/tracker-systems' },
    ] },
    { label: 'EF GOLD', href: '/ef-gold' },
    { label: 'EF ENERGY', href: '/ef-energy' },
    { label: 'BUSINESSES', dropdown: [
      { label: 'EFPhoneTaxi', href: '/ef-phonetaxi' },
      { label: 'EFWaste Management', href: '/ef-waste-management' },
      { label: 'EFSkyview', href: '/ef-skyview' },
      { label: 'EFContact', href: '/ef-contact' },
      { label: 'EFWireless', href: '/ef-wireless' },
    ] },
    { label: 'MEDIA', dropdown: [
      { label: 'News', href: '/news' },
      { label: 'Articles', href: '/articles' },
      { label: 'Gallery', href: '/gallery' },
    ] },
    { label: 'CONTACT', href: '/contact' },
  ];
  useEffect(() => {
    dropdownRefs.current = menuItems.map(() => React.createRef());
  }, [menuItems]);

  const handleMouseEnter = (index) => {
    setActiveDropdown(index);
    setHoveredIndex(index);
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    setTimeout(() => {
      if (hoveredIndex === null) {
        setActiveDropdown(null);
      }
    }, 100);
  };



  return (
    

<div
        className={`sticky top-0  z-[1000] bg-white"
        }`}
      >
        <div className='px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80 py-2 flex flex-col md:flex-row justify-between items-center bg-white'
        // onMouseEnter={() =>  {
        //   setHoveredIndex(null);
        //   setTimeout(() => {
        //     if (hoveredIndex === null) {
        //       setActiveDropdown(null);
        //     }
        //   }, 100);
        //   }}
        > 
                <div className="flex w-full justify-between items-center">
                  <a href='/'>
                  <img
                    className="block h-20 w-auto max-w-none"
                    src={logo}
                    alt="Logo"
                    onClick={() => {  }}
                    style={{ cursor: 'pointer' }}
                  />
                  </a>
        
                  <div className='ml-0 '>
                  <div className="flex w-full items-center z-50" style={{ height: '40px' }}>
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`cursor-pointer ${index === menuItems.length - 1 ? '' : 'mr-8'} flex relative`}
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={() => handleMouseLeave(index)}
        >
          <a
            className="text-sm text-black cursor-pointer"
            style={{ fontWeight: '600', cursor: 'pointer' }}
            href={item.href}
          >
            {item.label}
          </a>
          {item.dropdown && (
            <KeyboardArrowDownIcon
              className=""
              style={{ width: '20px', height: '20px', paddingTop: '2px' }}
            />
          )}

          <AnimatePresence>
            {activeDropdown === index && item.dropdown && (
              <motion.div
                ref={dropdownRefs.current[index]}
                className="absolute top-full left-0 bg-white shadow-sm rounded-sm p-2 min-w-[240px] mt-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setHoveredIndex(null);
                    setTimeout(() => {
                      if (hoveredIndex === null) {
                        setActiveDropdown(null);
                      }
                    }, 100);
                  }
                }}
              >
                {item.dropdown.map((subItem, subIndex) => (
                  <div>
                  <a
                    key={subIndex}
                    href={subItem.href}
                    className="block p-2 hover:bg-theme hover:text-white rounded-sm cursor-pointer" 
                  >
                    {subItem.label}
                  </a>
                  {/* {subIndex != item.dropdown.length - 1 ? <hr className='-mx-2' style={{ color: '#dddddd' }}/> : <div></div>} */}
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          {/* <hr className='my-2'/> */}
        </div>
      ))}
    </div>
                  </div>
                </div>
        
                
        
        
              </div>
      </div>
  );
}





