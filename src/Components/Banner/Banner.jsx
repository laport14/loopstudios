import React from 'react';
import './Banner.css'
import BannerImage from '../../assets/images/desktop/image-interactive.jpg'

function Banner(props) {
  return (
    <div className='banner-container'>
      <div>
        <img src={BannerImage} alt=''/>
      </div>
      <div className='banner-detail'>
        <h1>THE LEADER IN</h1> <h1>INTERACTIVE VR</h1>
        <p>Founded in 2011, Loopstudios has been producing the world-class
         virtual reality projects for some of the best companies around the 
          globe. Our award-winning creations have transformed businesses
          through digital experiences that bind to their brand.
        </p>
      </div>
    </div>
  );
}

export default Banner;