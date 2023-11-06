import React from 'react';
import Gallery from './Gallary';
import '../Assets/Styles/Dashboard.css';
import Video from './Videos';
import Logo from './Logodesign';
import Poster from './Poster';

const Service = () => {
  return (
    <div className="">

      <div className='mt-5'>
        <h3>Service</h3>
        <h5>Photography Services</h5>
        <h6>Capturing Moments in Time</h6>
        <p className="mb-3">
          At Nelly studios, we specialize in capturing the beauty and essence of every moment. Our<br /> team of experienced
          photographers will turn your special moments into timeless memories.
        </p>
        <Gallery />
      </div>
      <div className='mt-3'>
        <h5>Video Shooting & Live Streaming Services</h5>
        <h6>Real-Time Engagement and Entertainment</h6>
        <p>
          Elevate your events with our live streaming services. Whether it's a corporate webinar,<br /> a music concert, or a
          special occasion, we provide professional live streaming solutions<br /> to engage your audience in real-time.
        </p>
        <p>
          Lights, camera, and action – our video shooting services cover it all. We're here to bring your ideas to life
          with our state-of-the-art equipment and experienced videographers.
        </p>
        <Video />
      </div>
      <div className='mt-3'>
        <h5>NellyTV Logo Design Services</h5>
        <h6>Unlock Your Brand's Identityt</h6>
        <p>
          At NellyTV, we specialize in crafting unique and memorable logos that tell your brand's story. Our creative team designs logos that resonate with your audience, leaving a lasting impression.
        </p>
        <p>
          Let us bring your brand vision to life through innovative design and artistic excellence.
        </p>
        <Logo />

      </div>
      <div className='mt-5 mb-3'>
        <h5>Poster Design Express</h5>
        <h6>Turn Your Vision into Vibrant Art</h6>
        <p>
          At Poster Design Express, we transform your ideas into eye-catching posters. Our talented designers bring creativity to life, crafting posters that capture attention and convey your message effectively.
        </p>
        <p>
          Let us help you make a statement with our captivating poster designs.
        </p>
        <Poster />

      </div>
    </div>
  );
};

export default Service;
