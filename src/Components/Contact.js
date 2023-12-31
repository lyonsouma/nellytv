import React, { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import emailjs from 'emailjs-com';

import '../Assets/Styles/Dashboard.css';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        'service_u9u7bnf',
         'template_hofvhui', //  template ID
        {
          to_name: 'nelsonademba32@gmail.com', //  recipient email
          from_name: email,
          message: `Name: ${name}\nPhone No: ${phone}\nEmail: ${email}\nMessage: ${msg}`,
        },
        '8b2JEBJkjtmQGUP-Y' // user ID
      )
      .then((response) => {
        console.log('Email sent:', response);
 
        setName('');
        setPhone('');
        setEmail('');
        setMsg('');

        setSuccessMessage('Email sent successfully');

       
        setTimeout(() => {
          setSuccessMessage('');
        }, 5000); 
      })
      .catch((error) => {
        console.error('Email could not be sent:', error);
      });
  };

  return (
    <div className="container text-center content">
      <h3 className="text-center text-light mt-5">Contact</h3>
      <div className="mt-2 text-center text-light">
        <p>
          <FaLocationDot />
        </p>
        <p>Nakuru, Kenya</p>
        <p>+254 799 166341</p>
        <p>E-mail: nelsonademba32@gmail.com</p>
      </div>
      {successMessage && (
        <div style={{color:'yellowgreen'}}>{successMessage}</div>
      )}
      <form onSubmit={sendEmail} className="mt-4">
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <input
              className="underlined-input"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={true}
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <input
              className="underlined-input"
              type="text"
              placeholder="Your contact"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required={true}
            />
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
            <input
              className="underlined-input"
              type="email"
              placeholder="Your mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={true}
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
              required={true}
            ></textarea>
          </div>
          <div className="text-center ">
          <button type="submit" className="btn mb-5">
            Send
          </button>
        </div>
        </div>

      </form>

     

    </div>
  );
};

export default Contact;
