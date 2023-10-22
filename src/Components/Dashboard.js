import React, { useState } from 'react';
import Logo from '../Assets/Images/logoz.png';
import '../Assets/Styles/Dashboard.css';
import { Link as ScrollLink } from 'react-scroll';
import { FaPhoneVolume} from "react-icons/fa6";

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
                <h6 className='phone-contact'><FaPhoneVolume className='mx-2'/>+254111689847</h6>
            </div>

          </div>
        </nav>
      </div>
      <div className='row'>
        <section id='home' className='home-container'>
          <div className="container-fluid">
            {/* Your Home content */}
          </div>
        </section>

        <section id="about-us" className='mt-5'>
          <div className="container">
            <h3>About Us</h3>
            {/* Your About Us content */}
          </div>
        </section>

        <section id="service" className='bg-warning mt-5'>
          <div className="container">
            <h1>Service</h1>
            {/* Your Service content */}
          </div>
        </section>
        <section id="contact" className='contact mt-5'>
          <div className='container-fluid'>
            <h1>Contact</h1>
            {/* Your Contact content */}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Dashboard;
