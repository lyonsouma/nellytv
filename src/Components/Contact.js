import React, { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import emailjs from 'emailjs-com';

import '../Assets/Styles/Dashboard.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_wiqxfyd', // Replace with your service ID
        'template_hg4xvsh', // Replace with your template ID
        {
          to_name: 'oumalyons26@gmail.com', // Replace with your recipient email
          from_name: email,
          message: `Name: ${name}<br/> Phone No: ${phone}<br/> Email: ${email}<br/> Message: ${msg}`,
        },
        'GVZj4Ayj3-6vbPyeB' // Replace with your user ID
      )
      .then((response) => {
        console.log('Email sent:', response);
      })
      .catch((error) => {
        console.error('Email could not be sent:', error);
      });
  };

  // setName('');
  // setPhone('');
  // setEmail('');
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
      <form onSubmit={sendEmail} className="mt-4">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <input
              className="underlined-input"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <input
              className="underlined-input"
              type="text"
              placeholder="Your contact"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <input
              className="underlined-input"
              type="email"
              placeholder="Your mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <textarea
              className="underlined-input"
              rows="4"
              placeholder="Message"
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="text-center mt-3">
          <button type="submit" className="btn">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
