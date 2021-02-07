import React from 'react';
import './Nav.css'

function Nav(props) {
  return (
    <div className='nav-container'>
      <div className='title'>
        <h1>loopstudios</h1>
      </div>
      <div className='links'>
        <ul>
          <li>About</li>
          <li>Careers</li>
          <li>Events</li>
          <li>Products</li>
          <li>Support</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;