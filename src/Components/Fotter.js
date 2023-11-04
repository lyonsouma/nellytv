import React from 'react';
import '../Assets/Styles/Dashboard.css';
import Logo from '../Assets/Images/logoz.png';
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube, FaWhatsapp, FaPhoneVolume, FaEnvelope } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className='container-fluid p-0'>
      <div className='row footer-container bg-light'>
        <div className='col-lg-3 text-center'>
          <img className="logo mt-5" src={Logo} alt="Logo" style={{ width: '30%', height: '15vh' }} />
        </div>

        <div className='col-lg-5 mt-3'>
          <h5>Contact Us</h5>
          <div className='contact-footer-links'>
            <FaWhatsapp className='mx-3' />
            <h6 >+254 799 166341</h6>
          </div>
          <div className='contact-footer-links'>
            <FaPhoneVolume className='mx-3' />
            <h6 >+254 799 166341</h6>
          </div>
          <div className='contact-footer-links'>
            <FaEnvelope className='mx-3' />
            <h6 >nelsonademba32@gmail.com</h6>
          </div>
        </div>

        <div className='col-lg-4 mt-3'>
          <h5>Follow Us</h5>
          <div className='footer-links'>
            <a href='https://www.facebook.com/Nellytv254' target='blank'><FaFacebook /></a>
            <h6 >Facebook</h6>
          </div>
          <div className='footer-links'>
            <a href='https://instagram.com/nellytv254?igshid=OGQ5ZDc2ODk2ZA==' target='blank'><FaInstagram /></a>
            <h6 >Instagram</h6>
          </div>
          <div className='footer-links'>
            <a href='https://www.youtube.com/@nellytv9286' target='blank'><FaYoutube /></a>
            <h6 >Youtube</h6>
          </div>
          <div className='footer-links'>
            <a href='https://www.tiktok.com/@nellytv254?_t=8gyVXJVgzji&_r=1' target='blank'><FaTiktok /></a>
            <h6 >Tiktok</h6>
          </div>
        </div>
      </div>
      <section>
        <div className='bg-light row copyright'>
          <div className='text-center text-dark mt-3 mb-3'>&copy; {new Date().getFullYear()} Nellytv254. All rights reserved.</div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
