import React, { useState } from 'react';
import Logo from '../Assets/Images/logoz.png';
import '../Assets/Styles/Dashboard.css';
import { Link as ScrollLink } from 'react-scroll';
import { FaPhoneVolume } from 'react-icons/fa6';
import Contact from './Contact';
import Service from './Service';
import lyons from '../Assets/Images/ly.jpg'

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
      <div className="row nav-container">
        <nav className={`navbar navbar-expand-lg bg-light navbar-light ${showLinks ? 'show' : ''}`}style={{boxShadow:"1px 1px 4px 1px grey"}}>
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
                <FaPhoneVolume className="mx-2" />+2 541 116 89 847
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
        <p className="text-center text-info">
          Here we offer: Photography, Videography, Live streaming and more...
        </p>
      </div>
    </div>
  </div>
</section>


        <section id="about-us" className="container-fluid mt-5 bg-light " style={{position: "relative"}}>
          <div className="row">
            <h3 className='mt-1 text-info'>About Us</h3>
            <div className='container col-lg-8 col-md-7 col-sm-6 bg-light'>
              <p className='mt-5'> 
              NellyTV Recording, Livestreaming, and Shooting Studio is a state-of-the-art multimedia production facility dedicated to creating high-quality video content. With cutting-edge technology and a team of experienced professionals, NellyTV offers comprehensive services for recording, livestreaming, and shooting. Whether it's capturing live events, producing engaging video content, or broadcasting in real-time, NellyTV Studio is your one-stop destination for all your multimedia needs. Their commitment to excellence and creativity ensures that your vision is brought to life with stunning visuals and audio quality, making them a go-to choice for a wide range of projects, from music videos and corporate events to live broadcasts and much more.
              </p>
            </div>
            <div className='col-lg-4 col-md-3 col-sm-2 bg-light'>
              <img className='about-img' src={lyons} alt='image' />
            </div>
          </div>
        </section>

        <section id="service" className="mt-5">
          <Service/>
        </section>

        <section id="contact" className="contact mt-5">
            <Contact/>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
