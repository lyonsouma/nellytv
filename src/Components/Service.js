import React from 'react';
import Gallery from './Gallary';
import '../Assets/Styles/Dashboard.css'; 

const Service = () => {
  return (
    <div className="content">

    
        <div >
            <h1 className="mb-5 text-info text-center"><i>Service</i></h1>
            <h2><i>Photography Services</i></h2>
            <h6><i>Capturing Moments in Time</i></h6>
            <i className="mb-3">
              At Nelly studios, we specialize in capturing the beauty and essence of every moment. Our team of experienced
              photographers will turn your special moments into timeless memories.
            </i>
            <Gallery />

            <h4>Live Streaming Services</h4>
            <h6>Real-Time Engagement and Entertainment</h6>
            <p>
              Elevate your events with our live streaming services. Whether it's a corporate webinar, a music concert, or a
              special occasion, we provide professional live streaming solutions to engage your audience in real-time.
            </p>

            [Insert a video or images showcasing live streaming setups or previous live stream events]

            <h4>Video Shooting Services</h4>
            <h6>Lights, Camera, Action!</h6>
            <p>
              Lights, camera, and action – our video shooting services cover it all. We're here to bring your ideas to life
              with our state-of-the-art equipment and experienced videographers.
            </p>

            [Insert video clips or images highlighting your video shooting expertise]
          </div> 
    </div>
  );
};

export default Service;
