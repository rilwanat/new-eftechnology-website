import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';


import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import CampaignIcon from '@mui/icons-material/Campaign';
import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import SecurityIcon from '@mui/icons-material/Security';

import background from '../assets/images/background.png';


function OurServices({ }) {

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
          <div className='flex justify-center mt-12 mb-2'>
            <p className=' mb-2' style={{ color: '', fontWeight: '600', fontSize: '24px' }}>Our Products</p>
          </div>







        <div className=' flex flex-col md:flex-row items-center justify-between mt-4 '>
          <div className='flex flex-col w-full md:w-1/3 justify-center items-center rounded-md shadow-md m-2 p-4 bg-white min-h-[200px]'>
          <div className="mb-4" style={{ fontWeight: '600', fontSize: '16px' }}>What We Do</div>
          <LocationSearchingIcon className="mb-2" style={{ width: '40px', height: '40px', color: '#CBD67A' }}/>
            
            <div className="px-8 text-center"  style={{fontSize: '16px', color: '#777777'  }}>
            We use technology to improve the normal conventional systems. We can help to make your life much better.
            </div>
            {/* <div className="mt-4 cursor-pointer" style={{ fontWeight: '600', color: '#CBD67A' }}>Read More</div> */}
          </div>
          <div className='flex flex-col w-full md:w-1/3 justify-center items-center rounded-md shadow-md m-2 p-4 bg-white min-h-[200px]'>
          
            <div className="mb-4" style={{ fontWeight: '600', fontSize: '16px' }}>Who We Help</div>
            <CampaignIcon className="mb-2" style={{ width: '40px', height: '40px', color: '#CBD67A' }}/>
            <div className="px-8 text-center"  style={{fontSize: '16px', color: '#777777'  }}>
            Government agencies, security personel, IT companies, individuals to improve productivity.
            </div>
            {/* <div className="mt-4 cursor-pointer" style={{ fontWeight: '600', color: '#CBD67A' }}>Read More</div> */}
          </div>
          <div className='flex flex-col w-full md:w-1/3 justify-center items-center rounded-md shadow-md m-2 p-4 bg-white min-h-[200px]'>
          
            <div className="mb-4" style={{ fontWeight: '600', fontSize: '16px' }}>Why Choose Us</div>
            <CampaignIcon className="mb-2" style={{ width: '40px', height: '40px', color: '#CBD67A' }}/>
            <div className="px-8 text-center"  style={{fontSize: '16px', color: '#777777'  }}>
            We have a track record of providing world class services which is why we hav stayed relevant since 1995.
            </div>
            {/* <div className="mt-4 cursor-pointer" style={{ fontWeight: '600', color: '#CBD67A' }}>Read More</div> */}
          </div>

        </div>



      </div>
    );
}

export default OurServices;