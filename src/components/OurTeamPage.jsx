import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from './navbar/Header';
import Footer from './navbar/Footer';
import MenuBar from './navbar/MenuBar';
import Parallax from './Parallax';
import HeaderParallax from './HeaderParallax';
import conference from '../assets/images/conference-wide.jpg';

import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

import gideon from '../assets/images/team/team-gideon.png';
import team from '../assets/images/team/team.png';

import background from '../assets/images/background.png';

export default function OurTeamPage({ 
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


          {isMenuOpen ? <div></div> :  <HeaderParallax 
        imageUrl={conference}//"/images/your-image.jpg";
            title={"Our Team"}
            subtitle={""}
        />}




          <div className="px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80 py-2 mb-20"
          
                          style={{
                            backgroundImage: `url(${background})`, 
                            backgroundAttachment: 'fixed',
                            backgroundSize: 'contain',
                            backgroundPosition: 'center',
                          }}
                          
                          >
          <div className='flex justify-center mt-12 mb-2'>
            {/* <p className=' mb-2' style={{ color: '', fontWeight: '600', fontSize: '24px' }}>Our Team</p> */}
          </div>







        <div className=' flex flex-col md:flex-row items-center justify-between mt-4 '>
          <div className='flex flex-col w-full md:w-1/3 justify-center items-center rounded-md shadow-md m-2 p-4 bg-white min-h-[200px]'>
          
          <img
                          className="block h-60 w-60 mb-2 mt-4"
                          src={gideon}
                          alt="Logo"
                          onClick={() => { navigate('/'); }}
                          style={{ cursor: 'pointer' }}
                        />
          <div className="mb-1" style={{ fontWeight: '600', fontSize: '16px' }}>Gideon Egbuchulam</div>
          <span className="mb-3" style={{ color: '#cbd67a' }} >{'Chairman/Chief Executive Officer'.toUpperCase()}</span>
            
            <div className="px-8 text-center mb-4"  style={{fontSize: '16px', color: '#777777'  }}>
            Mr. Egbuchulam has developed solutions to many of Nigeria’s infrastructure needs.
            </div>
            
          </div>
          <div className='flex flex-col w-full md:w-1/3 justify-center items-center rounded-md shadow-md m-2 p-4 bg-white min-h-[200px]'>
          <img
                          className="block h-60 w-60 mb-2 mt-4"
                          src={team}
                          alt="Logo"
                          onClick={() => { navigate('/'); }}
                          style={{ cursor: 'pointer' }}
                        />
            <div className="mb-1" style={{ fontWeight: '600', fontSize: '16px' }}>John Nix</div>
            <span  className="mb-3" style={{ color: '#cbd67a' }} >{'Chief Financial Officer (CFO)'.toUpperCase()}</span>
            <div className="px-8 text-center mb-4"  style={{fontSize: '16px', color: '#777777'  }}>
            Mr. Nix is the Chief Financial Officer (CFO) of E.F. Network Ltd.
            </div>
            
          </div>
          <div className='flex flex-col w-full md:w-1/3 justify-center items-center rounded-md shadow-md m-2 p-4 bg-white min-h-[200px]'>
          <img
                          className="block h-60 w-60 mb-2 mt-4"
                          src={team}
                          alt="Logo"
                          onClick={() => { navigate('/'); }}
                          style={{ cursor: 'pointer' }}
                        />
            <div className="mb-1" style={{ fontWeight: '600', fontSize: '16px' }}>John Hardy</div>
            <span className="mb-3"  style={{ color: '#cbd67a' }} >{'Chief Operating Officer (COO)'.toUpperCase()}</span>
            <div className="px-8 text-center mb-4"  style={{fontSize: '16px', color: '#777777'  }}>
            Business leader with unique blend of engineering, sales, operations and..
            </div>
            
          </div>

        </div>

        <div className=' flex flex-col md:flex-row items-center justify-between mt-4 '>
          <div className='flex flex-col w-full md:w-1/3 justify-center items-center rounded-md shadow-md m-2 p-4 bg-white min-h-[200px]'>
          <img
                          className="block h-60 w-60 mb-2 mt-4"
                          src={team}
                          alt="Logo"
                          onClick={() => { navigate('/'); }}
                          style={{ cursor: 'pointer' }}
                        />
          <div className="mb-1" style={{ fontWeight: '600', fontSize: '16px' }}>.</div>
          <span className="mb-3"  style={{ color: '#cbd67a' }} >.</span>
            
            <div className="px-8 text-center mb-4"  style={{fontSize: '16px', color: '#777777'  }}>
            We use technology to improve the normal conventional systems. 
            </div>
            
          </div>
          <div className='flex flex-col w-full md:w-1/3 justify-center items-center rounded-md shadow-md m-2 p-4 bg-white min-h-[200px]'>
          <img
                          className="block h-60 w-60 mb-2 mt-4"
                          src={team}
                          alt="Logo"
                          onClick={() => { navigate('/'); }}
                          style={{ cursor: 'pointer' }}
                        />
            <div className="mb-1" style={{ fontWeight: '600', fontSize: '16px' }}>Varadarajan Narayanan</div>
            <span className="mb-3"  style={{ color: '#cbd67a' }} >{'Chief Information Officer (CIO)'.toUpperCase()}</span>
            <div className="px-8 text-center mb-4"  style={{fontSize: '16px', color: '#777777'  }}>
            Electrical Engineer with 20+ in Industrial Electronics, Instrumentation and control..
            </div>
            
          </div>
          <div className='flex flex-col w-full md:w-1/3 justify-center items-center rounded-md shadow-md m-2 p-4 bg-white min-h-[200px]'>
          <img
                          className="block h-60 w-60 mb-2 mt-4"
                          src={team}
                          alt="Logo"
                          onClick={() => { navigate('/'); }}
                          style={{ cursor: 'pointer' }}
                        />
            <div className="mb-1" style={{ fontWeight: '600', fontSize: '16px' }}>Tom Manliclic</div>
            <span className="mb-3"  style={{ color: '#cbd67a' }} >{'Chief Technology Officer (CTO)'.toUpperCase()}</span>
            <div className="px-8 text-center mb-4"  style={{fontSize: '16px', color: '#777777'  }}>
            Technically-savvy professional with a career reflecting strong leadership.
            </div>
            
          </div>

        </div>





      </div>


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
