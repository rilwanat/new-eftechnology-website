import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';


import conference from '../assets/images/conference-wide.jpg';
import why from '../assets/images/why.png';

function WhyEF({ }) {

  const navigate = useNavigate();
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
    return (
        <div className="px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80 py-2 mt-4">          

<div className=' flex flex-col md:flex-row items-center justify-between mt-2 '>
<div className='flex flex-col w-full md:w-1/2 justify-center  mx-2 p-4 min-h-[420px]'>
            
            <img className="w-full h-full object-scale-down  shadow-lg" src={why} alt="" />
          </div>


          <div className='flex flex-col w-full md:w-1/2 justify-start  mx-2 p-4 min-h-[420px]'>
            <div className="mb-4 mt-4" style={{ fontWeight: '600', fontSize: '16px' }}>Why E.F Technology</div>
            <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div>
            <div className=" "  style={{fontSize: '16px', color: '#777777'  }}>
            The quality of our solutions cannot be compromised. We take pride in our project delivery methodology because quality assurance is our destination.
            </div>
          </div>
          
        </div>



      </div>
    );
}

export default WhyEF;