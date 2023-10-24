import React, { useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import m1 from '../Assets/Images/m1.jpg'; 
import m2 from '../Assets/Images/m2.jpg'; 
import m3 from '../Assets/Images/m3.jpg'; 
import m4 from '../Assets/Images/m4.jpg'; 
import m5 from '../Assets/Images/m5.jpg'; 
import m6 from '../Assets/Images/m6.jpg'; 
import m7 from '../Assets/Images/m7.jpg'; 

function Gallery() {
  const images = [
    m1,
    m2,
    m3,
    m4,
    m5,
    m6,
    m7,
  ];

  const [data, setData] = useState({ img: "", i: 0 });

  const viewImage = (img, i) => {
    console.log(img, i)
    setData({ img, i });
  };

  const imgAction = (action) => {
    let i = data.i;
    if (action === "next-img") {
      setData({ img: images[i + 1], i: i + 1 });
    }
    if (action === "previous-img") {
      setData({ img: images[i - 1], i: i - 1 });
    }
    if (!action) {
      setData({ img: "", i: 0 });
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
            <button onClick={()=> imgAction()} style={{position: 'absolute', top: '10px' ,right: '10px'}}>X</button>
            <button onClick={() => imgAction('previous-img')}>Previous</button>
            <img src={data.img} style={{width: 'auto', maxWidth: '90%', maxHeight: '90%'}}/>
            <button onClick={() => imgAction('next-img')}>Next</button>
        </div>
    }
      <div style={{padding: "10px"}}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
           >
            <Masonry gutter="20px">
            {images.map((image, i) => (
                <img
                key={i}
                src={image}
                style={{width: '100%', display: "block", cursor: 'pointer'}}
                alt=""
                onClick= {()=>viewImage(image, i)}
          
                />
                
            ))}
            </Masonry>
        </ResponsiveMasonry>
    </div>
</>
  );
}

export default Gallery;
