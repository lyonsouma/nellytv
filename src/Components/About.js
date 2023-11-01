import React from 'react';
import '../Assets/Styles/Dashboard.css';
import Nelly from '../Assets/Images/nelly.png';

const About = () => {
  return (
    <div className="row about-container">
      <div className="col-lg-8 col-md-6 col-sm-12 p-0">
        <div className="about-text-container">
          <h3 className="mt-1 text-info">About Us</h3>
          <p>
            NellyTV Recording, Livestreaming, and Shooting Studio is a state-of-the-art multimedia production facility dedicated to creating high-quality video content. With cutting-edge technology and a team of experienced professionals, NellyTV offers comprehensive services for recording, livestreaming, and shooting.
          </p>
          <p>
            Whether it's capturing live events, producing engaging video content, or broadcasting in real-time, NellyTV Studio is your one-stop destination for all your multimedia needs.
          </p>
          <p>
            Their commitment to excellence and creativity ensures that your vision is brought to life with stunning visuals and audio quality, making them a go-to choice for a wide range of projects, from music videos and corporate events to live broadcasts and much more.
          </p>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-12 p-0">
        <div className="about-image-container">
          <img className="about-img" src={Nelly} alt="image" />
        </div>
      </div>
    </div>
  );
};

export default About;
