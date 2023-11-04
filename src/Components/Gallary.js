import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import m1 from '../Assets/Images/j.png';
import m2 from '../Assets/Images/Untitled design.png';
import m3 from '../Assets/Images/j2.png';
import m4 from '../Assets/Images/DSC_9792x2.jpg';
import m5 from '../Assets/Images/n.png';
import { FaArrowLeft, FaArrowRight } from  "react-icons/fa6";

const Gallery = () => {
  const [selectedPage, setSelectedPage] = useState(0);

  const handleNext = () => {
    setSelectedPage((selectedPage + 1) % 3);
  };

  const handlePrev = () => {
    setSelectedPage((selectedPage - 1 + 3) % 3);
  };

  const imagePages = [
    [m2, m3, m4],
    [m5, m1, m2],
    [m2, m3, m4],
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
        {imagePages.map((page, pageIndex) => (
          <div key={pageIndex}>
            <div className="row">
              {page.map((image, imageIndex) => (
                <div key={imageIndex} className="col-lg-4 col-md-6 col-sm-12">
                  <img src={image} style={{ width: '100%', height:'auto'}} alt="" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </Carousel>
      <div className="arrow-buttons text-center mt-3" style={{cursor:"pointer", fontSize: '20px'}}>
       
          <FaArrowLeft className='mx-5' onClick={handlePrev}/>
          <FaArrowRight onClick={handleNext} />
      
      </div>
    </div>
  );
};

export default Gallery;
