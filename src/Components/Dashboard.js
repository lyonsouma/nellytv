import React, { useState } from 'react';
import Logo from '../Assets/Images/logos.png';
import '../Assets/Styles/Dashboard.css';
import { Link as ScrollLink } from 'react-scroll';
import { FaPhoneVolume, FaLocationDot} from "react-icons/fa6";

const Dashboard = () => {
  const [showLinks, setShowLinks] = useState(window.innerWidth >= 992); // Initially show links on larger screens

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  window.addEventListener('resize', () => {
    // Update showLinks when the window is resized
    setShowLinks(window.innerWidth >= 992);
  });

  return (
    <div className="container-fluid">
      <div className='row nav-container'>
        <nav className={`navbar navbar-expand-lg navbar-light ${showLinks ? 'show' : ''}`}>
          <div className="container">
            <a className="navbar-brand" href="#">
              <img className='logo' src={Logo} alt="Logo" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              onClick={toggleLinks}
            >
              {showLinks ? (
                <span className="navbar-toggler-icon">
                  <i className="fas fa-times"></i>
                </span>
              ) : (
                <span className="navbar-toggler-icon"></span>
              )}
            </button>
            <div className={`navbar-collapse ${showLinks ? 'show' : ''}`} id="navbarNav">
              <ul className={`navbar-nav mx-auto ${showLinks ? 'd-lg-flex' : 'd-none d-lg-flex'}`}>
                <li className="nav-item">
                  <ScrollLink
                    to='home'
                    spy={false}
                    smooth={true}
                    duration={100}
                    className='nav-link'
                  >
                    Home
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    to='about-us'
                    spy={false}
                    smooth={true}
                    duration={100}
                    className='nav-link'
                  >
                    About
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    to='service'
                    spy={false}
                    smooth={true}
                    duration={100}
                    className='nav-link'
                  >
                    Service
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink
                    to='contact'
                    spy={false}
                    smooth={true}
                    duration={100}
                    className='nav-link'
                  >
                    Contact
                  </ScrollLink>
                </li>
              </ul>
                <h6 className='phone-contact'><FaPhoneVolume className='mx-2'/>+2 541 116 89 847</h6>
            </div>

          </div>
        </nav>
      </div>
      <div className='row'>
        <section id='home' className='home-container'>
          <div className="container-fluid">
            
          </div>
        </section>

        <section id="about-us" className='mt-5'>
          <div className="container">
            <h3>About Us</h3>
            {/* Your About Us content */}
          </div>
        </section>

        <section id="service" className='mt-5'>
          <div className="container">
            <h1>Service</h1>
            {/* Your Service content */}
          </div>
        </section>

        <section id="contact" className='contact mt-5'>
          <div className='container-fluid'>
            <h3 className='text-center text-light mt-5'>Contact</h3>

            <hr className='text-light mt-5'/>

            <div className='mt-2 text-center text-light'>
                <p><FaLocationDot/></p>
                <p>Nakuru, Kenya</p>
                <p>+254111689847</p>
                <p>E-mail: adembanelson@gmail.com</p>
            </div>

            <div className='container mt-5'>
              <input className='col-lg-4 mx-2' type='text' placeholder='Name'/>
              <input className='col-lg-4 mx-2' placeholder='Phone'/>
              <input className='col-lg-3 mx-2' type='email' placeholder='Email'/>
            </div>

            <textarea className='container form-control mt-5' placeholder='Message'/>

            <div className='mt-5 text-center'>
              <button className='btn'>Send</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
