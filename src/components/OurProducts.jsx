import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';


import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import CampaignIcon from '@mui/icons-material/Campaign';
import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import SecurityIcon from '@mui/icons-material/Security';

import background from '../assets/images/background.png';



function OurProducts({ }) {

  const navigate = useNavigate();
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
    return (
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
          







        <div className=' flex flex-col md:flex-row items-center justify-between mt-4 '>
          <div className='flex flex-col w-full md:w-1/2 justify-center items-center rounded-md shadow-md m-2 p-8 bg-white min-h-[200px]'>
          <LocationSearchingIcon className="mb-4" style={{ width: '40px', height: '40px', color: '#CBD67A' }}/>
            <div className="mb-2" style={{ fontWeight: '600', fontSize: '16px' }}>Tracker Systems and Devices</div>
            <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div>
            <div className="px-8 text-center" style={{ fontSize: '16px', color: '#777777'   }}>
              Our top notch trackers are designed to give you the best security in your home, automobile, and in public.
            </div>
            <a href='/tracker-systems' className="mt-4 cursor-pointer text-darkTheme hover:text-theme" style={{ fontWeight: '600', fontSize: '16px' }}>Read More</a>
          </div>
          <div className='flex flex-col w-full md:w-1/2 justify-center items-center rounded-md shadow-md m-2 p-8 bg-white min-h-[200px]'>
          <CampaignIcon className="mb-4" style={{ width: '40px', height: '40px', color: '#CBD67A' }}/>
            <div className="mb-2" style={{ fontWeight: '600', fontSize: '16px' }}>Alert Services</div>
            <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div>
            <div className="px-8 text-center" style={{ fontSize: '16px', color: '#777777'   }}>
              Providing Emergency Alert service to nations, state or local government using state of the art technology.
            </div>
            <a href='/alert-services' className="mt-4 cursor-pointer text-darkTheme hover:text-theme" style={{ fontWeight: '600', fontSize: '16px' }}>Read More</a>
          </div>

        </div>


        <div className=' flex flex-col md:flex-row items-center justify-between'>
          <div className='flex flex-col w-full md:w-1/2 justify-center items-center rounded-md shadow-md m-2 p-8 bg-white min-h-[200px]'>
          <SpeakerPhoneIcon className="mb-4" style={{ width: '40px', height: '40px', color: '#CBD67A' }}/>
            <div className="mb-2" style={{ fontWeight: '600', fontSize: '16px' }}>Communication Gadgets</div>
            <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div>
            <div className="px-8 text-center" style={{ fontSize: '16px', color: '#777777'   }}>
              We specialize in the customization of Mobile phones, global walkie-talkie and trackers.
            </div>
            <a href='/communication-gadgets' className="mt-4 cursor-pointer text-darkTheme hover:text-theme" style={{ fontWeight: '600', fontSize: '16px' }}>Read More</a>
          </div>
          <div className='flex flex-col w-full md:w-1/2 justify-center items-center rounded-md shadow-md m-2 p-8 bg-white min-h-[200px]'>
          <ShoppingCartIcon className="mb-4" style={{ width: '40px', height: '40px', color: '#CBD67A' }}/>
            <div className="mb-2" style={{ fontWeight: '600', fontSize: '16px' }}>E-Commerce</div>
            <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div>
            <div className="px-8 text-center" style={{ fontSize: '16px', color: '#777777'   }}>
              Providing exquisite virtual shopping experiences, to customers and business directories in Africa.
            </div>
            <a href='/e-commerce' className="mt-4 cursor-pointer text-darkTheme hover:text-theme" style={{ fontWeight: '600', fontSize: '16px' }}>Read More</a>
          </div>

        </div>


        <div className=' flex flex-col md:flex-row items-center justify-between '>
          <div className='flex flex-col w-full md:w-1/2 justify-center items-center rounded-md shadow-md m-2 p-8 bg-white min-h-[200px]'>
          <NetworkWifiIcon className="mb-4" style={{ width: '40px', height: '40px', color: '#CBD67A' }}/>
            <div className="mb-2" style={{ fontWeight: '600', fontSize: '16px' }}>EFBroadband</div>
            <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div>
            <div className="px-8 text-center" style={{ fontSize: '16px', color: '#777777'   }}>
              Providing high-speed internet connectivity services for homes and offices (both outdoor and indoor).
            </div>
            <a href='/ef-broadband' className="mt-4 cursor-pointer text-darkTheme hover:text-theme" style={{ fontWeight: '600', fontSize: '16px' }}>Read More</a>
          </div>
          <div className='flex flex-col w-full md:w-1/2 justify-center items-center rounded-md shadow-md m-2 p-8 bg-white min-h-[200px]'>
          <SecurityIcon className="mb-4" style={{ width: '40px', height: '40px', color: '#CBD67A' }}/>
            <div className="mb-2" style={{ fontWeight: '600', fontSize: '16px' }}>Security Products/Services</div>
            <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div>
            <div className="px-8 text-center" style={{ fontSize: '16px', color: '#777777'  }}>
              We provide products and services to nations' security forces for civil defence and protection.
            </div>
            <a href='/security-products' className="mt-4 cursor-pointer text-darkTheme hover:text-theme" style={{ fontWeight: '600', fontSize: '16px' }}>Read More</a>
          </div>

        </div>

      </div>
    );
}

export default OurProducts;