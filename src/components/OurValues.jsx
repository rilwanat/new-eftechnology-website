import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';


import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import CampaignIcon from '@mui/icons-material/Campaign';
import SpeakerPhoneIcon from '@mui/icons-material/SpeakerPhone';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import SecurityIcon from '@mui/icons-material/Security';

import background from '../assets/images/background.png';


function OurValues({ }) {

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
            <p className=' mb-2' style={{ color: '', fontWeight: '600', fontSize: '24px' }}>Our Values</p>
          </div>







        <div className=' flex flex-col md:flex-row items-center justify-between mt-4  mb-20'>
          <div className='flex flex-col w-full md:w-1/4 justify-center items-center rounded-md shadow-md m-2 p-4 bg-white min-h-[200px]'>
          
          {/* <LocationSearchingIcon className="mb-2" style={{ width: '40px', height: '40px', color: '#CBD67A' }}/> */}
            
            <div className="px-8 text-left py-4">
            <div className="mb-4" style={{ fontWeight: '600', fontSize: '16px' }}>Our Goal</div>
            <div  style={{fontSize: '16px', color: '#777777'  }}>
            Our goal is to ensure that our clients achieve 100% satisfaction in the services we rendered by deploying our vast technical skills and knowledge.
            </div>
            
            </div>
            {/* <div className="mt-4 cursor-pointer" style={{ fontWeight: '600', color: '#CBD67A' }}>Read More</div> */}
          </div>
          <div className='flex flex-col w-full md:w-1/4 justify-center items-center rounded-md shadow-md m-2 p-4 bg-white min-h-[200px]'>
          
            
            {/* <CampaignIcon className="mb-2" style={{ width: '40px', height: '40px', color: '#CBD67A' }}/> */}
            <div className="px-8 text-left py-4">
            <div className="mb-4" style={{ fontWeight: '600', fontSize: '16px' }}>Standard</div>
            <div  style={{fontSize: '16px', color: '#777777'  }}>
            We adhere to the highest ethical standards and operate in a manner that is socially responsible and acceptable“we care how results are achieved”.
            </div>
            
            </div>
            {/* <div className="mt-4 cursor-pointer" style={{ fontWeight: '600', color: '#CBD67A' }}>Read More</div> */}
          </div>
          <div className='flex flex-col w-full md:w-1/4 justify-center items-center rounded-md shadow-md m-2 p-4 bg-white min-h-[200px]'>
          
            
            {/* <CampaignIcon className="mb-2" style={{ width: '40px', height: '40px', color: '#CBD67A' }}/> */}
            <div className="px-8 text-left py-4">
            <div className="mb-4" style={{ fontWeight: '600', fontSize: '16px' }}>Support</div>
            <div  style={{fontSize: '16px', color: '#777777'  }}>
            We adhere to the highest ethical standards and operate in a manner that is socially responsible and acceptable“we care how results are achieved”.
            </div>
            
            </div>
            {/* <div className="mt-4 cursor-pointer" style={{ fontWeight: '600', color: '#CBD67A' }}>Read More</div> */}
          </div>
          <div className='flex flex-col w-full md:w-1/4 justify-center items-center rounded-md shadow-md m-2 p-4 bg-white min-h-[200px]'>
          
            
            {/* <CampaignIcon className="mb-2" style={{ width: '40px', height: '40px', color: '#CBD67A' }}/> */}
            <div className="px-8 text-left py-4">
            <div className="mb-4" style={{ fontWeight: '600', fontSize: '16px' }}>Quality</div>
            <div  style={{fontSize: '16px', color: '#777777'  }}>
            The quality of our solutions cannot be compromised. We take pride in our project delivery methodology because quality assurance is our destination.
            </div>
            
            </div>
            {/* <div className="mt-4 cursor-pointer" style={{ fontWeight: '600', color: '#CBD67A' }}>Read More</div> */}
          </div>

        </div>



      </div>
    );
}

export default OurValues;