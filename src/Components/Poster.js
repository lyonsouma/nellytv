import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import B1 from '../Assets/Images/b6.jpg';
import B2 from '../Assets/Images/b2.jpg';
import B3 from '../Assets/Images/b3.jpg';
import B4 from '../Assets/Images/b4.jpg';
import B5 from '../Assets/Images/b5.jpg';
import B6 from '../Assets/Images/b6.jpg';
import { FaArrowLeft, FaArrowRight } from  "react-icons/fa6";

const Poster = () => {
  const [selectedPage, setSelectedPage] = useState(0);

  const handleNext = () => {
    setSelectedPage((selectedPage + 1) % 3);
  };

  const handlePrev = () => {
    setSelectedPage((selectedPage - 1 + 3) % 3);
  };

  const imagePages = [
    [B1,B2,B3],
    [B4,B5,B6]
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
                  <img src={image} style={{ width: '100%', height:'60vh', paddingTop: '10px',}} alt="" />
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

export default Poster;
