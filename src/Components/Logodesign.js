import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import L1 from '../Assets/Images/l1.jpg';
import L2 from '../Assets/Images/l2.jpg';
import L3 from '../Assets/Images/l3.jpg';


const Logo = () => {
  const [selectedPage, setSelectedPage] = useState(0);



  const imagePages = [
    [L2,L1,L3]
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
    </div>
  );
};

export default Logo;
