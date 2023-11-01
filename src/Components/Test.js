import React from 'react';
import '../Assets/Styles/Dashboard.css';
import Nelly from '../Assets/Images/nelly.png';

const Test = () => {
  return (
    <div className='skewed'>
      <div className='text'>
        <h1>Helllo</h1>
      </div>


      <div className='image'>
        <img src={Nelly}/>
      </div>
    </div>
  );
};

export default Test;
