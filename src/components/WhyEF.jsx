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
        <div className="px-4 md:px-4 lg:px-16 xl:px-24 2xl:px-80 py-2 mt-4">          

<div className=' flex flex-col md:flex-row  mt-8 '>



          <div className='flex flex-col w-full md:w-1/2 justify-start  mx-2 p-4 '>
            <div className="mb-4 mt-4" style={{ fontWeight: '600', fontSize: '16px' }}>Why E.F Technology</div>
            <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div>
            <div className=" "  style={{fontSize: '16px', color: '#777777'  }}>
            The quality of our solutions cannot be compromised. We take pride in our project delivery methodology because quality assurance is our destination.
            For us, quality means more than just a bug-free deliverable; it means providing a solution that delivers tangible value, drives growth, and gives you a competitive edge. We achieve this by fostering a transparent partnership, aligning our goals with yours, and ensuring that every line of code serves your strategic objectives.
            </div>
          </div>

          <div className='flex w-full md:w-1/2  mx-2 p-4  '>
            
            <img className="w-full h-full object-scale-down rounded-lg shadow-lg " src={why} alt="" />
          </div>
          
        </div>



      </div>
    );
}

export default WhyEF;