import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';


import conference from '../assets/images/conference-wide.jpg';

function OurPartners({ }) {

  const navigate = useNavigate();
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
    return (
        <div className="px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80 py-2 mt-4">          

<div className=' flex flex-col md:flex-row items-center justify-between mt-2 '>
          <div className='flex flex-col w-full md:w-1/2 justify-start  mx-2 p-4 '>
            <div className="mb-4" style={{ fontWeight: '600', fontSize: '16px' }}>Our Partners</div>
            
          </div>
          <div className='flex flex-col w-full md:w-1/2 justify-center  mx-2 p-4'>
          <div className="mb-4" style={{ fontWeight: '600', fontSize: '16px' }}>Our Partners</div>
            {/* <img className="w-full h-full object-scale-down" src={conference} alt="" /> */}
          </div>

        </div>



      </div>
    );
}

export default OurPartners;