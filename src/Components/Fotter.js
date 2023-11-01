import React from 'react';
import '../Assets/Styles/Dashboard.css'; 
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='container-fluid footer-container'>
      <div className='row'>
        <div className='col-lg-7 col-md-7 col-sm-6'>
          <h2>Quick links</h2>
          <a href=''>Home</a>
          <a href=''>About</a>
          <a href=''>Service</a>
          <a href=''>Contact</a>
        </div>
        
        <div className='col-lg-4 col-md-4 col-sm-6 text-end'>
          <a className='footer-links' href='https://www.facebook.com/Nellytv254' target='blank'><FaFacebook/></a>
          <a className='footer-links' href='https://instagram.com/nellytv254?igshid=OGQ5ZDc2ODk2ZA=='  target='blank'><FaInstagram/></a>
          <a className='footer-links' href='https://www.youtube.com/@nellytv9286' target='blank'><FaYoutube/></a>
          <a className='footer-links' href='https://www.tiktok.com/@nellytv254?_t=8gyVXJVgzji&_r=1' target='blank'><FaTiktok/></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
