import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Header from './navbar/Header';
import Footer from './navbar/Footer';
import MenuBar from './navbar/MenuBar';
import Parallax from './Parallax';
import HeaderParallax from './HeaderParallax';
import conference from '../assets/images/conference-wide.jpg';
import admin from '../assets/images/admin.jpg';

import logo from '../assets/images/logo.png';
import logo2 from '../assets/images/logo.png';

import XIcon from '@mui/icons-material/X';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';


import PlaceIcon from '@mui/icons-material/Place';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

import appStore from '../assets/svg/app-store-badge.svg';
import playStore from '../assets/svg/play-store-badge.svg';

import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


import background from '../assets/images/background.png';


import NotificationModal from './modals/NotificationModal';


export default function ContactPage({ 
    isMobile, isMenuOpen, toggleMenu, closeMenu
 }) {

  const [isMessageSending, setIsMessageSending] = useState(false);

  //notification modal
  const [notificationType, setNotificationType] = useState(false);
  const [notificationTitle, setNotificationTitle] = useState("");
  const [notificationMessage, setNotificationMessage] = useState("");
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);
  const openNotificationModal = (type, title, message) => {
    setNotificationType(type);
    setNotificationTitle(title);
    setNotificationMessage(message);

    setIsNotificationModalOpen(true);
  };
  const closeNotificationModal = () => {
    setIsNotificationModalOpen(false);
  };
  //notification modal

  // const [companyName, setCompanyName] = useState('');
  // const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [remark, setRemark] = useState('');
  // const [procurementProcedure, setProcurementProcedure] = useState('');
  // const [file, setFile] = useState(null); // For file input

  
  const validateInputs = () => {
    const missingFields = [];

    // if (!companyName.trim()) missingFields.push('Company Name');
    // if (!address.trim()) missingFields.push('Address');
    if (!phoneNumber.trim()) missingFields.push('Phone Number');
    if (!email.trim()) missingFields.push('Email');
    if (!contactName.trim()) missingFields.push('Contact Name');
    // if (!procurementProcedure.trim()) missingFields.push('Procurement Procedure');
    if (!remark.trim()) missingFields.push('Remark');

    if (missingFields.length > 0) {
        // alert(`Please fill in the following required fields: ${missingFields.join(', ')}`);
        openNotificationModal(false, "EF Gold", `Please fill in the following required fields: ${missingFields.join(', ')}`);
        setIsNotificationModalOpen(true);
        return false;
    }

    return true;
};

const validateCheckboxes = () => {
    const selectedCheckboxes = checkboxes.filter((checkbox) => checkbox.checked);
    if (selectedCheckboxes.length === 0) {
        // alert('Please select at least one product of interest.');
        openNotificationModal(false, "EF Gold", "Please select at least one product of interest.");
        setIsNotificationModalOpen(true);
        return false;
    }
    return true;
};

const isValidNumber = (number) => {
  // Accepts numbers starting with +<country_code> or 0, followed by 7–14 digits
  const numberPattern = /^(?:\+?\d{1,3}|0)\d{7,14}$/;
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
  
  if (isMessageSending) {
    // alert("Please, wait message is sending");
    openNotificationModal(false, "EF Technology", "Please, wait message is sending");
        setIsNotificationModalOpen(true);

    return;
  }
  
  if (!validateInputs() 
    // || !validateCheckboxes()
  ) {
    // alert("Please, enter a valid inputs");
    // openNotificationModal(false, "EF Technology", "Please, enter a valid inputs");
    // setIsNotificationModalOpen(true);
      return;
  }


  if (!isValidNumber(phoneNumber)) {
    // openNotificationModal(false, currentPageName + " Form Error", 'Invalid email address');
    // alert("Please, enter a valid phone number, numbers only.");
    openNotificationModal(false, "EF Technology", "Please, enter a valid phone number, numbers only.");
    setIsNotificationModalOpen(true);
    return;
}

  if (!isValidEmail(email)) {
    // openNotificationModal(false, currentPageName + " Form Error", 'Invalid email address');
    // alert("Please, enter a valid email.");
    openNotificationModal(false, "EF Technology", "Please, enter a valid email.");
    setIsNotificationModalOpen(true);
    return;
}



  // const selectedOptions = checkboxes
  //     .filter((checkbox) => checkbox.checked)
  //     .map((checkbox) => checkbox.label);

  const formData = new FormData();
  // formData.append('company_name', companyName);
  // formData.append('address', address);
  formData.append('phone_number', phoneNumber);
  formData.append('email', email);
  formData.append('contact_name', contactName);
  // formData.append('procurement_procedure', procurementProcedure);
  formData.append('remark', remark);
  // formData.append('prodcts_of_interest', 'Gold');//JSON.stringify(selectedOptions));
  // if (file) {
  //     formData.append('upload_file', file);
  // }


  setIsMessageSending(true);
  try {
      const response = await fetch('/mail/send_contact_email.php', {
          method: 'POST',
          body: formData
      });

      const result = await response.json();

      // alert(JSON.stringify(result, null, 2));

      if (result.message == "Message Sent") {

        
          // Reset form
          // setCompanyName('');
          // setAddress('');
          setPhoneNumber('');
          setEmail('');
          setContactName('');
          // setProcurementProcedure('');
          setRemark('');
          // setFile(null);
          // setCheckboxes(checkboxes.map(checkbox => ({ ...checkbox, checked: false })));

          // alert("Message was sent successfully");
          openNotificationModal(true, "EF Technology", "Message was sent successfully");
          setIsNotificationModalOpen(true);
          
      } else {
          // alert("Failed to send message");
          openNotificationModal(false, "EF Technology", "Failed to send message. " + result.message);
          setIsNotificationModalOpen(true);
      }

      setIsMessageSending(false);
  } catch (error) {
    setIsMessageSending(false);

      // console.error("Error sending message:", error);
      // alert("An error occurred while sending the message");
      openNotificationModal(false, "EF Technology", "An error occurred while sending the message");
          setIsNotificationModalOpen(true);
  }
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


        <div className='flex sm:h-full h-screen'>
          <div className='w-full rounded-lg'>

          {isMenuOpen ? <div></div> : <HeaderParallax 
        imageUrl={admin}//"/images/your-image.jpg";
            title={"Contact Us"}
            subtitle={""}
        />}
          


            {/* <Hero  /> */}
            {/* <OurProducts /> */}
            {/* <ChairmansMessage />  */}
            {/* <AboutUs /> */}
            {/* <WorkProcess /> */}







            <div className='px-8 md:px-4 lg:px-16 xl:px-24 2xl:px-80  flex flex-col md:flex-row items-center justify-between mb-20 mt-20' 
            
            style={{
              backgroundImage: `url(${background})`, 
              backgroundAttachment: 'fixed',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
            >
        <div className='flex w-full h-full md:w-1/3 ' >
          <div className='flex flex-col p-4'>
            <div className='text-lg' style={{ fontWeight: '600', cursor: 'pointer' }}>Office Location</div>
            <hr className='my-2' style={{ color: '#EBEA1C'  }}/>
            <div className='flex mr-4'>
              <div className='mr-1'><PlaceIcon style={{ color: '#EBEA1C'  }}/></div>
              <div className='' style={{fontSize: '16px', color: '#777777'  }}>No. 31, Pope John Paul Street, Maitama, F.C.T Abuja, Nigeria.</div>
            </div>

            <div className='text-lg mt-4' style={{ fontWeight: '600', cursor: 'pointer' }}>Office Hours</div>
            <hr className='my-2' style={{ color: '#EBEA1C'  }}/>
            <div className='flex mr-4'>
              <div className='mr-1'><AccessTimeIcon style={{ color: '#EBEA1C'  }} /></div>
              <div className='flex flex-col '>
              <div className='' style={{fontSize: '16px', color: '#777777'  }}>9:00 AM - 5:00 PM</div>
              <div className='' style={{fontSize: '16px', color: '#777777'  }}>Monday - Friday</div>
              </div>
          </div>

          <div className='text-lg mt-4' style={{ fontWeight: '600', cursor: 'pointer' }}>Phone</div>
            <hr className='my-2' style={{ color: '#EBEA1C'  }}/>
            <div className='flex mr-4 cursor-pointer'
            onClick={() => {window.location.href = "tel:+2348091113333";}}
            >
              <div className='mr-1'><CallIcon style={{ color: '#EBEA1C'  }} /></div>
              <div className='hover:text-black text-lightGray' style={{fontSize: '16px' }}>+234 809 111 3333</div>
          </div>

          <div className='text-lg mt-4' style={{ fontWeight: '600', cursor: 'pointer' }}>Email</div>
            <hr className='my-2' style={{ color: '#EBEA1C'  }}/>
            <div className='flex mr-4 cursor-pointer'
            onClick={() => {window.location.href = "mailto:info@eftechnology.net";}}
            >
              <div className='mr-1'><EmailIcon style={{ color: '#EBEA1C'  }} /></div>
              <div className='hover:text-black text-lightGray' style={{fontSize: '16px' }}>info@eftechnology.net</div>
          </div>

          </div>
          
          
        </div>
        <div className='flex w-full  h-full md:w-2/3'>
          <div className='flex flex-col p-4'>
            <div className='text-lg mb-2 font-bold' style={{  }}>Send us a message</div>
            <div className='mb-10' style={{fontSize: '16px', color: '#777777'  }}>Fill the form below to contact us and we will get back to you as soon as possible.</div>

{/* const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [remark, setRemark] = useState('');
   */}
<input
              type='text'
              placeholder='Name'
              className='mt-4 border border-gray-300 rounded-sm py-2 px-2 bg-white'
              onChange={(e) => setContactName(e.target.value)} value={contactName}
              style={{ width: '100%' }}
            />

<div className='flex md:flex-row flex-col'>
<input
              type='text'
              placeholder='Phone Number*'
              className='mt-4 border border-gray-300 rounded-sm py-2 px-2 sm:mr-2 bg-white'
              onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}
              style={{ width: '100%' }}
            />
<input
              type='text'
              placeholder='Email*'
              className='mt-4 border border-gray-300 rounded-sm py-2 px-2  bg-white'
              onChange={(e) => setEmail(e.target.value)} value={email}
              style={{ width: '100%' }}
            />
</div>

{/* <input
              type='text'
              placeholder='Subject'
              className='mt-4 border border-gray-300 rounded-sm py-2 px-2  bg-white'
              // onChange={(e) => setEmail(e.target.value)} value={email}
              style={{ width: '100%' }}
            /> */}


            <div className='flex flex-col sm:flex-row relative '>
            <textarea
              type='text'
              placeholder='Kindly tell us what you want and your procedure*'
              className='pl-4 border border-gray-300 rounded-sm py-2 px-2 w-full my-2 bg-white'
              onChange={(e) => setRemark(e.target.value)} value={remark}
          rows="4"
              style={{  }}
            />
          </div> 



            <div 
              onClick={() => { handleSendMessage() }}
              style={{ borderWidth: '0px',  width: '200px' }}
              className='mt-4 text-center  rounded-sm px-4 py-2  text-sm cursor-pointer bg-theme hover:bg-black hover:text-darkGray'>
              {isMessageSending ? 'Please wait ...' : 'Send Message'}
            </div>

          </div>
          
        </div>

      </div> 




      {/* {
      isMenuOpen ? <></> :
      <div className="flex md:flex-row flex-col  h-auto px-4 lg:px-16 xl:px-24 2xl:px-80 pt-4 md:pb-2 pb-8 items-center w-full">
        
        <div className="flex flex-col p-4 my-4 w-full items-center">
          
          <div className='flex flex-col sm:flex-row relative '>
            <input
              type='text'
              placeholder='Enter your email here'
              className='pl-4 border border-gray-300 rounded-lg py-2 px-2 text-center'
              // onChange={(e) => setEmail(e.target.value)} value={email}
              style={{ width: '320px' }}
            />
            <div 
              // onClick={() => { handleSubscribeToNewsletter() }}
              style={{ borderWidth: '0px', backgroundColor: '#EBEA1C' }}
              className='text-center mt-4 sm:mt-0 sm:ml-2  rounded-sm px-4 py-2  text-sm cursor-pointer'>
              Subscribe
            </div>
          </div>          
        </div>
        
      </div>
      } */}



          </div>
          
        </div>      
        <Parallax 
        imageUrl={conference}//"/images/your-image.jpg";
            title={"Bringing Your Dreams To Reality Using Modern Technology"}
            subtitle={"Ready to begin your journey with us?"}
        />
      <Footer 
        isMobile={isMobile} isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} closeMenu={closeMenu}
      />


      <NotificationModal
              isOpen={isNotificationModalOpen}
              onRequestClose={closeNotificationModal}
              notificationType={notificationType}
              notificationTitle={notificationTitle}
              notificationMessage={notificationMessage}
            />


    </div>
  );
}
