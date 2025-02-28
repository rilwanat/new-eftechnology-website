import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from './navbar/Header';
import Footer from './navbar/Footer';
import MenuBar from './navbar/MenuBar';
import HeaderParallax from './HeaderParallax';
import conference from '../assets/images/conference-wide.jpg';

import gold from '../assets/images/gold/gold.jpg';
import gold1 from '../assets/images/gold/gold1.png';
import gold2 from '../assets/images/gold/gold2.png';
import gold3 from '../assets/images/gold/gold3.png';
import gold4 from '../assets/images/gold/gold4.png';
import gold5 from '../assets/images/gold/gold5.png';
import gold6 from '../assets/images/gold/gold6.png';
import gold7 from '../assets/images/gold/gold7.png';
import gold8 from '../assets/images/gold/gold8.png';

import logo from '../assets/images/logo.png';


import background from '../assets/images/background.png';


import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';





export default function EFGoldPage({ 
    isMobile, isMenuOpen, toggleMenu, closeMenu
 }) {


  const goldImages = [
    gold1,
    gold2,
    gold3,
    gold4,
    gold5,
    gold6,
    gold7,
    gold8,
  ];
  // const [currentSlides, setCurrentSlides] = useState(Array(goldImages.length).fill(0));
  // const [zoomedItemId, setZoomedItemId] = useState(null);

  const [checkboxes, setCheckboxes] = useState([
    { id: 1, label: 'JET-A1', checked: false },
    { id: 2, label: 'EN590', checked: false },
    { id: 3, label: '6D', checked: false },
    { id: 4, label: 'D2', checked: false },
    { id: 5, label: 'LNG', checked: false },
    { id: 6, label: 'LPG', checked: false },
    { id: 7, label: 'CNG', checked: false },
    { id: 8, label: 'PET COKE', checked: false },
  ]);

  const handleCheckboxChange = (id) => {
    setCheckboxes((prevCheckboxes) =>
      prevCheckboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked: !checkbox.checked } : checkbox
      )
    );
  };


  

  const [companyName, setCompanyName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [remark, setRemark] = useState('');
  const [file, setFile] = useState(null); // For file input

  
  const validateInputs = () => {
    const missingFields = [];

    if (!companyName.trim()) missingFields.push('Company Name');
    if (!address.trim()) missingFields.push('Address');
    if (!phoneNumber.trim()) missingFields.push('Phone Number');
    if (!email.trim()) missingFields.push('Email');
    if (!contactName.trim()) missingFields.push('Contact Name');
    if (!remark.trim()) missingFields.push('Remark');

    if (missingFields.length > 0) {
        alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
        return false;
    }

    return true;
};

const validateCheckboxes = () => {
    const selectedCheckboxes = checkboxes.filter((checkbox) => checkbox.checked);
    if (selectedCheckboxes.length === 0) {
        alert('Please select at least one product of interest.');
        return false;
    }
    return true;
};

const isValidNumber = (number) => {
  const numberPattern = /^\d+$/;
  return numberPattern.test(number);
};


const isValidateNigerianNumber = (ngPhoneNumber) => {
  const nigerianPhonePattern = /^\+234(70|80|81|90|91)\d{8}$/;
  return nigerianPhonePattern.test(ngPhoneNumber);
};

const isValidEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
};


const handleSendMessage = async () => {
  if (!validateInputs() 
    // || !validateCheckboxes()
  ) {
      return;
  }


  if (!isValidNumber(number)) {
    // openNotificationModal(false, currentPageName + " Form Error", 'Invalid email address');
    alert("Please, enter a valid phone number, numbers only.");
    return;
}

  if (!isValidEmail(email)) {
    // openNotificationModal(false, currentPageName + " Form Error", 'Invalid email address');
    alert("Please, enter a valid email.");
    return;
}



  // const selectedOptions = checkboxes
  //     .filter((checkbox) => checkbox.checked)
  //     .map((checkbox) => checkbox.label);

  const formData = new FormData();
  formData.append('companyName', companyName);
  formData.append('address', address);
  formData.append('phoneNumber', phoneNumber);
  formData.append('email', email);
  formData.append('contactName', contactName);
  formData.append('remark', remark);
  // formData.append('selectedOptions', JSON.stringify(selectedOptions));
  if (file) {
      formData.append('file', file);
  }

  try {
      const response = await fetch('https://eftechnology.net/new-eftechnology-php/send-mail.php', {
          method: 'POST',
          body: formData
      });

      const result = await response.json();

      if (result.success) {
          alert("Message was sent successfully");
          // Reset form
          setCompanyName('');
          setAddress('');
          setPhoneNumber('');
          setEmail('');
          setContactName('');
          setRemark('');
          setFile(null);
          setCheckboxes(checkboxes.map(checkbox => ({ ...checkbox, checked: false })));
      } else {
          alert("Failed to send message");
      }
  } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred while sending the message");
  }
};







const settings = {
  dots: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};


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
        imageUrl={gold}//"/images/your-image.jpg";
            title={"EF Gold"}
            subtitle={""}
        />}
          


{/* <HeroGold /> */}

            {/* <Hero  /> */}
            {/* <OurProducts /> */}
            {/* <ChairmansMessage />  */}
            {/* <AboutUs /> */}
            {/* <WorkProcess /> */}


            <div className="px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80 py-2"
            
            
                                                          style={{
                                                            backgroundImage: `url(${background})`, 
                                                            backgroundAttachment: 'fixed',
                                                            backgroundSize: 'contain',
                                                            backgroundPosition: 'center',
                                                          }}
                                                          >


<p className='my-8' style={{fontSize: '16px', color: '#777777'  }}>
We have been in the gold business for over 17 years, serving various African countries. Our gold is sold on a <strong>CIF</strong> or <strong>FOB</strong> basis, and we provide air transport to all destinations except sanctioned countries.

We operate in the following listed countries: Angola, Benin Republic, Burkina Faso, Democratic Republic of the Congo (DRC), Equatorial Guinea, Ethiopia, Ghana, Guinea Conakry, Kenya, Liberia, Libya, Mali, Mauritania, Mauritius, Mozambique, Namibia, Sao Tomé, Senegal, Sierra Leone, South Africa, South Sudan, Tanzania, Togo, Uganda, Zimbabwe
</p>





<div className='flex w-full h-full items-center justify-center mt-4'
>
      <div  className='w-full' style={{  }}>
        <Slider {...settings}>
          {goldImages.map((image, index) => (
            <div key={index} 
            className='flex w-full items-center justify-center px-2  ' >
              <img 
              // className='border-2 border-theme'
                src={image}
                alt={`Slide ${index + 1}`}
                style={{ width: '100%', height: 'auto', objectFit: 'contain' }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>







 
          <div className='flex flex-col justify-center mt-8 mb-2'>
            <p className=' mb-2' style={{ color: '', fontWeight: '600', fontSize: '24px' }}>Send us a message</p>
            <div className='bg-theme mb-2' style={{ width: '80px', height: '4px' }}></div>
          </div>

          <p className=' mb-2' style={{fontSize: '16px', color: '#777777'  }}>Fill the form below to contact us and we will get back to you as soon as possible.</p>
          {/* <p className=' mb-2' style={{fontSize: '16px', color: '#777777'  }}>Select product(s) of interest:</p> */}
          
{/*           
          <div>
          <div className="flex p-4 border rounded-sm">
      <h2 className="text-lg font-semibold mb-2">Select Options:</h2>
      <div className='flex-col md:flex-row flex'>
      {checkboxes.map((checkbox) => (
        <div key={checkbox.id} className="flex items-center mb-2 md:mb-0 mr-6">
          <input
            type="checkbox"
            id={`checkbox-${checkbox.id}`}
            checked={checkbox.checked}
            onChange={() => handleCheckboxChange(checkbox.id)}
            className="mr-2"
            style={{ width: '30px', height: '30px' }}
          />
          <label htmlFor={`checkbox-${checkbox.id}`} className=''>{checkbox.label}</label>
        </div>
      ))}
      </div>

      <div className = "mt-4">
        <p>Selected Options:</p>
        <ul>
          {checkboxes.filter(checkbox => checkbox.checked).map(checkedBox => (
            <li key = {checkedBox.id}>{checkedBox.label}</li>
          ))}
        </ul>
      </div>
    </div>
          </div> */}



          <div className='flex flex-col sm:flex-row relative mt-4 '>
            <input
              type='text'
              placeholder='Company Name*'
              className='pl-4 border border-gray-300 rounded-sm py-2 px-2 w-full  my-2 bg-white'
              value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
              style={{  }}
            />
          </div>   

          <div className='flex flex-col sm:flex-row relative  '>
            <input
              type='text'
              placeholder='Address*'
              className='pl-4 border border-gray-300 rounded-sm py-2 px-2 w-full my-2 bg-white'
              value={address}
          onChange={(e) => setAddress(e.target.value)}
              style={{  }}
            />
          </div>  

          <div className='flex flex-col sm:flex-row relative'>
            <input
              type='text'
              placeholder='Phone Number*'
              className='pl-4 border border-gray-300 rounded-sm py-2 px-2 w-full sm:mr-2   my-2 bg-white'
              value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
              style={{  }}
            /> 
            <input
              type='text'
              placeholder='Email*'
              className='pl-4 border border-gray-300 rounded-sm py-2 px-2 w-full sm:ml-2   my-2 bg-white'
              value={email}
          onChange={(e) => setEmail(e.target.value)}
              style={{  }}
            />
          </div> 

          <div className='flex flex-col sm:flex-row relative  '>
            <input
              type='text'
              placeholder='Contact Name*'
              className='pl-4 border border-gray-300 rounded-sm py-2 px-2 w-full my-2 bg-white'
              value={contactName}
          onChange={(e) => setContactName(e.target.value)}
              style={{  }}
            />
          </div>  

          <div className='flex flex-col sm:flex-row relative  '>
            <input
              type='file'
              placeholder='Select File*'
              className='pl-4 border border-gray-300 rounded-sm py-2 px-2 w-full my-2  cursor-pointer bg-white'
              onChange={(e) => setFile(e.target.files[0])} // Store the selected file
              style={{  }}
            />
          </div> 

          <div className='flex flex-col sm:flex-row relative '>
            <input
              type='text'
              placeholder='Type in your remark*'
              className='pl-4 border border-gray-300 rounded-sm py-2 px-2 w-full my-2 bg-white'
              value={remark}
          onChange={(e) => setRemark(e.target.value)}
              style={{  }}
            />
          </div> 


          <div 
              onClick={() => { handleSendMessage() }}
              style={{ borderWidth: '0px', backgroundColor: '#CBD67A', width: '200px', color: '#424218' }}
              className='mt-4  text-center rounded-sm px-4 py-2  text-sm cursor-pointer mb-20'>
              Send Message 
            </div>

      </div>



            

          </div>
        </div>      
      <Footer 
        isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu}
      />


    </div>
  );
}
