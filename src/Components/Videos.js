import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import vid from '../Assets/Videos/nn.mp4';
import vid2 from '../Assets/Videos/vid2.mp4';
import vid3 from '../Assets/Videos/vid3.mp4';

const Video = () => {
  return (
    <div>
      <Carousel showArrows={true} showThumbs={false} dynamicHeight={false} centerMode={true}>
        <div>
          <video controls height="300">
            <source src={vid} type="video/mp4" />
          </video>
        </div>
        <div>
          <video controls height="300">
            <source src={vid2} type="video/mp4" />
          </video>
        </div>
        <div>
          <video controls height="300">
            <source src={vid3} type="video/mp4" />
          </video>
        </div>
        <div>
          <video controls height="300">
            <source src={vid3} type="video/mp4" />
          </video>
        </div>
        <div>
          <video controls height="300">
            <source src={vid3} type="video/mp4" />
          </video>
        </div>
        <div>
          <video controls height="300">
            <source src={vid3} type="video/mp4" />
          </video>
        </div>
        <div>
          <video controls height="300">
            <source src={vid3} type="video/mp4" />
          </video>
        </div>
       
      </Carousel>
    </div>
  );
};

export default Video;
