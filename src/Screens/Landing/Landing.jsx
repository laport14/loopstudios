import React from 'react';
import Article from '../../Components/Article/Article';
import Banner from '../../Components/Banner/Banner';
import Cards from '../../Components/Cards/Cards';
import './Landing.css'

function Landing(props) {
  return (
    <div>
      <div className='hero-text'>
        <p>IMMERSIVE</p> 
        <p>EXPERIENCES</p> 
        <p>THAT DELIVER</p>
      </div>
      <Banner />
      <Article />
      <Cards />
    </div>
  );
}

export default Landing;