import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import m8 from '../Assets/Images/n11.jpg';
import m9 from '../Assets/Images/n12.jpg';
import m1 from '../Assets/Images/f.jpg';

function Gallery() {
  const images = [m8, m9, m1];

  const [data, setData] = useState({ img: '', i: 0 });

  const viewImage = (img, i) => {
    console.log(img, i);
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === 'next-img') {
      setData({ img: images[i + 1], i: i + 1 });
    }
    if (action === 'previous-img') {
      setData({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: '', i: 0 });
    }
  }

  return (
    <>
      {
        data.img &&
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
          <button onClick={() => imgAction()} style={{ position: 'absolute', top: '10px', right: '10px' }}>
            X
          </button>
          <button onClick={() => imgAction('previous-img')}>Previous</button>
          <img src={data.img} style={{ maxWidth: '100%', maxHeight: '90vh', objectFit: 'contain' }} />
          <button onClick={() => imgAction('next-img')}>Next</button>
        </div>
      }
      <div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry gutter="20px">
            {images.map((image, i) => (
              <div
                key={i}
                style={{
                  width: '100%',
                  display: 'block',
                  cursor: 'pointer',
                  height: '60vh',
                  position: 'relative', 
                }}
                onClick={() => viewImage(image, i)}
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
        </ResponsiveMasonry>
      </div>
    </>
  );
}

export default Gallery;
