import React from 'react';
import Masonry from 'react-responsive-masonry';
import m8 from '../Assets/Images/n11.jpg';
import m9 from '../Assets/Images/n12.jpg';
import m1 from '../Assets/Images/f.jpg';

function Gallery() {
  const images = [m8, m9, m1, m9];

 
  return (
    <>
     
        <div style={{
          width: '100%',
          height: '100vh',
          background: 'black',
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden'
        }}>
       
          <img src={images}  />
        </div>
      
      <div>
        
          <Masonry>
            {images.map((image, i) => (
              <div
                key={i}
                style={{
                  width: '100%',
                  display: 'flex',
                  cursor: 'pointer',
                  height: '60vh',
                  position: 'relative', 
                }}
            
              >
                <img
                  src={image}
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain',
                    position: 'absolute', 
                  }}
                  alt=""
                />
              </div>
            ))}
          </Masonry>
    
      </div>
    </>
  );
}

export default Gallery;
