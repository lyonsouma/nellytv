import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import m1 from '../Assets/Images/j.png';
import m2 from '../Assets/Images/m41.png';
import m3 from '../Assets/Images/junior1.png';
import m4 from '../Assets/Images/n1.jpg';
import m5 from '../Assets/Images/n.png';
import m6 from '../Assets/Images/n41.png';
import m7 from '../Assets/Images/n6.jpg';
import m8 from '../Assets/Images/n2.jpg';
import m9 from '../Assets/Images/n3.jpg';
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
    [m2,m3, m6],
    [m7, m8, m5],
    [m4,m1 ,m9],
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
                  <img src={image} style={{ width: '100%', height:'90vh', paddingTop: '10px', objectFit:'cover'}} alt="" />
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
