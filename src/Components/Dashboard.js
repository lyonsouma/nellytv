import React, { useState } from 'react';
import Logo from '../Assets/Images/logoz.png';
import '../Assets/Styles/Dashboard.css';
import { Link as ScrollLink } from 'react-scroll';
import { FaPhoneVolume } from 'react-icons/fa6';
import Contact from './Contact';
import Service from './Service';
import Footer from './Fotter';
import About from './About';


const Dashboard = () => {
  const [showLinks, setShowLinks] = useState(window.innerWidth >= 992);


  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  window.addEventListener('resize', () => {
    // Update showLinks when the window is resized
    setShowLinks(window.innerWidth >= 992);
  });

  return (
    <div className="container-fluid">
      <div className="row nav-container">
        <nav className={`navbar navbar-expand-lg  navbar-light ${showLinks ? 'show' : ''}`} style={{ boxShadow: "1px 1px 4px 1px grey" }}>
          <div className="container">
            <a className="navbar-brand" href="#">
              <img className="logo" src={Logo} alt="Logo" />
            </a>
            <button className="navbar-toggler" type="button" onClick={toggleLinks}>
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
                  <ScrollLink to="home" spy={false} smooth={true} duration={100} className="nav-link">
                    Home
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink to="about-us" spy={false} smooth={true} duration={100} className="nav-link">
                    About
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink to="service" spy={false} smooth={true} duration={100} className="nav-link">
                    Service
                  </ScrollLink>
                </li>
                <li className="nav-item">
                  <ScrollLink to="contact" spy={false} smooth={true} duration={100} className="nav-link">
                    Contact
                  </ScrollLink>
                </li>

              </ul>
              <h6 className="phone-contact">
                <FaPhoneVolume className='mx-2'/>+254 799 166341
              </h6>
            </div>
          </div>
        </nav>
      </div>
      <div className="row">
        <section id="home" className="home-container d-flex justify-content-center align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-center text-light main">WELCOME TO Nelly tv</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="text-center text-light">
                  Here we offer: Photography, Videography, Live streaming and more...
                </p>
              </div>
            </div>
          </div>
        </section>


        <section id="about-us" className="container-fluid mt-5 bg-light " style={{ position: "relative" }}>
          <About />
        </section>

        <section id="service" className="mt-1 bg-light">
          <Service />
        </section>

        <section id="contact" className="contact mt-1">
          <Contact />
        </section>

        <section className="footer mt-1">
          <Footer />
        </section>

  
      </div>
    </div>
  );
};

export default Dashboard;
