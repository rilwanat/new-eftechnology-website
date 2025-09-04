import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';


import skyview from '../assets/images/skyview2.jpg';
import background from '../assets/images/background.png';


function AboutUs({ }) {

  const navigate = useNavigate();
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
    return (
        <div className="px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80 py-2 mt-4     mb-20"
        
        style={{
          backgroundImage: `url(${background})`, 
          backgroundAttachment: 'fixed',
          backgroundSize: 'contain',
          backgroundPosition: 'center',
        }}
        
        >          

<div className=' flex flex-col md:flex-row items-center justify-between mt-8 '>
          <div className='flex flex-col w-full md:w-1/2 justify-start  mx-2 p-4 min-h-[270px]'>
            <div className="mb-4" style={{ fontWeight: '600', fontSize: '16px' }}>Who We Are</div>
            <div className='bg-theme mb-2' style={{ width: '60px', height: '2px' }}></div>
            <div className=" " style={{fontSize: '16px', color: '#777777'  }}>
            EF Network Ltd is a multinational technology company, founded in 1995 that is a major global player in the green products, wireless/virtual technologies, broadband, cyber-security, tracking systems-personal, home, auto and public safety, communication gadgets, cloud services and e-commerce.
            </div>
          </div>
          <div className='flex flex-col w-full md:w-1/2 justify-center  mx-2 p-4 '>
            <img className="w-full h-full object-scale-down border-2 rounded-lg " src={skyview} alt="" />
          </div>

        </div>



      </div>
    );
}

export default AboutUs;