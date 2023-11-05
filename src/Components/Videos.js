import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import vid1 from '../Assets/Videos/nelson.mp4';
import vid2 from '../Assets/Videos/nn.mp4';
import vid3 from '../Assets/Videos/vid2.mp4';
import vid4 from '../Assets/Videos/vid3.mp4';
import vid5 from '../Assets/Videos/Ngata.mp4';
import vid6 from '../Assets/Videos/Nelson2.mp4';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Video = () => {
  const [selectedPage, setSelectedPage] = useState(0);

  const handleNext = () => {
    setSelectedPage((selectedPage + 1) % 3);
  };

  const handlePrev = () => {
    setSelectedPage((selectedPage - 1 + 3) % 3);
  };

  const videoPages = [
    [vid4, vid5, vid3],
    [vid3, vid2, vid1],
  ];

  return (
    <div>
      <Carousel
        showArrows={false}
        showThumbs={false}
        dynamicHeight={false}
        selectedItem={selectedPage}
        showStatus={false} // Hide the status bar
        showIndicators={false} // Hide the indicators
        showPagination={true} // Show pagination dots
      >
        {videoPages.map((page, pageIndex) => (
          <div key={pageIndex}>
            <div className="row">
              {page.map((video, videoIndex) => (
                <div key={videoIndex} className="col-lg-4 col-md-6 col-sm-12" >
                  <video controls height="auto" style={{ width: '100%'}}>
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>

      <div className="arrow-buttons text-center mt-3 mb-5" style={{cursor:"pointer", fontSize: '20px'}}>
       
          <FaArrowLeft className='mx-5' onClick={handlePrev}/>
          <FaArrowRight onClick={handleNext} />
      
      </div>

    </div>
  );
};

export default Video;
