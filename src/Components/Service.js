import React from 'react';
import Gallery from './Gallary';
import '../Assets/Styles/Dashboard.css'; 
import Video from './Videos';

const Service = () => {
  return (
    <div className="">

        <div className='mt-5'>
            <h3>Service</h3>
            <h5>Photography Services</h5>
            <h6>Capturing Moments in Time</h6>
            <p className="mb-3">
              At Nelly studios, we specialize in capturing the beauty and essence of every moment. Our<br/> team of experienced
              photographers will turn your special moments into timeless memories.
            </p>
            <Gallery />

            <h5>Video Shooting & Live Streaming Services</h5>
            <h6>Real-Time Engagement and Entertainment</h6>
            <p>
              Elevate your events with our live streaming services. Whether it's a corporate webinar,<br/> a music concert, or a
              special occasion, we provide professional live streaming solutions<br/> to engage your audience in real-time.
            </p>
            <p>
              Lights, camera, and action – our video shooting services cover it all. We're here to bring your ideas to life
              with our state-of-the-art equipment and experienced videographers.
            </p>
                <Video/>

          </div> 
    </div>
  );
};

export default Service;
