import React from 'react';
import './Footer.css'
import Facebook from '../../../assets/images/icon-facebook.svg'
import Twitter from '../../../assets/images/icon-twitter.svg'
import Pinterest from '../../../assets/images/icon-pinterest.svg'
import Instagram from '../../../assets/images/icon-instagram.svg'

function Footer(props) {
  return (
    <div className='footer-container'>
      <div className='footer-logos'>
        <p className='footer-title'>loopstudios</p>
        <div className='link-logos'>
        <img src={Facebook} alt=""/>
        <img src={Twitter} alt=""/>
        <img src={Pinterest} alt=""/>
        <img src={Instagram} alt=""/>
        </div>
      </div>
      <div className='footer-links'>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
        <p>&copy; 2021 Loopstudios. All rights reserved.</p>
      </div>
      
    </div>
  );
}

export default Footer;