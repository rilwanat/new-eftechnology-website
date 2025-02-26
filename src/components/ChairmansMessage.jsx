import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

import VpnLockIcon from '@mui/icons-material/VpnLock';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


function ChairmansMessage({ }) {

  const navigate = useNavigate();
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
    return (
        <div className="px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80 py-2 mt-12">
          
          

        <div className=' flex flex-col md:flex-row items-center justify-between mt-2'>
          <div className='flex flex-col w-full md:w-1/2 justify-center  mx-2 p-4'>
            <div className="mb-4" style={{ fontWeight: '600', fontSize: '16px' }}>The Chairman's Message</div>
            <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div>
            <div className="  " style={{fontSize: '16px', color: '#777777'  }}>
            In the 20th century the world focused on industrialization and analogue, in 21st century it was oil drilling and digital technology, and the future of mankind as we see it, lies with Clean, Green and wireless products/technologies. As a result, through our research and development, EF Group would continuously endeavor to introduce new technologies, acquire companies, develop and implement these products for the benefits of Africa continent. We invite you to join us in our global quest to making the world a better place- a Clean, Green and wireless world.
            </div>
            <div className="mt-4 ml-4 font-bold" style={{ color: '#CBD67A' }}>- Mr. GIDEON EGBUCHULAM</div>
            <div className="mt-1 ml-4" style={{ fontWeight: '600' }}>EF Group Chairman/Chief Executive Officer</div>
          </div>
          <div className='flex flex-col w-full md:w-1/2 justify-center  mx-2 p-4'>
            <div className="flex ">
              <div className="mr-4"><VpnLockIcon style={{ width: '50px', height: '50px', color: '#000000' }} /></div>
              <div className="flex flex-col">
                <div className="mb-2" style={{ fontWeight: '600', fontSize: '16px' }}>Safety</div>
                <div className='bg-theme mb-2' style={{ width: '60px', height: '1px' }}></div>
                <div style={{fontSize: '16px', color: '#777777'  }}>We adhere to the highest ethical standards and operate in a manner that is socially responsible and acceptable“we care how results are achieved”.</div>
              </div>
              
            </div>
            <hr className="my-4" style={{ color: '#dddddd' }}/>
            <div className="flex ">
              <div className="mr-4"><SupportAgentIcon style={{ width: '50px', height: '50px', color: '#000000' }} /></div>
              <div className="flex flex-col">
                <div className="mb-2" style={{ fontWeight: '600', fontSize: '16px' }}>24/7 Live Support</div>
                <div className='bg-theme mb-2' style={{ width: '60px', height: '1px' }}></div>
                <div style={{fontSize: '16px', color: '#777777'  }}>We adhere to the highest ethical standards and operate in a manner that is socially responsible and acceptable“we care how results are achieved”.</div>
              </div>
              
            </div>
          </div>

        </div>


      </div>
    );
}

export default ChairmansMessage;