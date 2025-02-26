import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

function WorkProcess({ }) {

  const navigate = useNavigate();
  const slideInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };
  
    return (
        <div className="px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80 py-2">
          

          

        <div className=' flex flex-col md:flex-row items-center justify-between mt-2'>
          <div className='flex flex-col w-full md:w-1/2 justify-center items-center rounded-md shadow-md mx-2 p-4'>
            <div className="mb-4" style={{ fontWeight: '600', fontSize: '16px' }}>Tracker System and Devices</div>
            <div className="px-8 text-center">
              Our trackers are of top notch quality, designed to give you the best security in your homes, automobile, personal and public safety.
            </div>
            <div className="mt-4 cursor-pointer">Read More</div>
          </div>
          <div className='flex flex-col w-full md:w-1/2 justify-center items-center rounded-md shadow-md mx-2 p-4'>
            <div className="mb-4" style={{ fontWeight: '600', fontSize: '16px' }}>Alert Services</div>
            <div className="px-8 text-center">
              Providing Emergency Alert service for a nation, state or local government using the state of the art technology. We save life during emergencies.
            </div>
            <div className="mt-4 cursor-pointer">Read More</div>
          </div>

        </div>

        
      </div>
    );
}

export default WorkProcess;