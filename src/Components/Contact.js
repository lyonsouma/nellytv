import React from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import '../Assets/Styles/Dashboard.css'; 

const Contact = () => {
  return (
    <div className="container text-center content">
      <h3 className="text-center text-light mt-5">Contact</h3>
      <div className="mt-2 text-center text-light">
        <p>
          <FaLocationDot />
        </p>
        <p>Nakuru, Kenya</p>
        <p>+254111689847</p>
        <p>E-mail: adembanelson@gmail.com</p>
      </div>
      <div className="mt-4">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <input className="underlined-input" type="text" placeholder="Your name" />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <input className="underlined-input" type="text" placeholder="Your contact " />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <input className="underlined-input" type="email" placeholder="Your mail" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <textarea className="underlined-input" rows="4" placeholder="Message"></textarea>
          </div>
        </div>
        <div className="text-center mt-3">
          <button className="btn ">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
