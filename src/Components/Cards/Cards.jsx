import React from 'react';
import './Cards.css'
import Earth from '../../assets/images/desktop/image-deep-earth.jpg'
import Arcade from '../../assets/images/desktop/image-night-arcade.jpg'
import Soccer from '../../assets/images/desktop/image-soccer-team.jpg'
import Grid from '../../assets/images/desktop/image-grid.jpg'
import Road from '../../assets/images/desktop/image-from-above.jpg'
import Lights from '../../assets/images/desktop/image-pocket-borealis.jpg'
import Curiosity from '../../assets/images/desktop/image-curiosity.jpg'
import Fisheye from '../../assets/images/desktop/image-fisheye.jpg'


function Cards(props) {
  return (
    <div className='card-container'>
      <div className='earth-div'>
        <img className='earth-image' src={Earth} alt='' />
        <p className='earth-text'>DEEP</p>
        <p className='bottom-text'>EARTH</p>
      </div>
      <div className='earth-div'>
        <img src={Arcade} alt='' />
        <p className='earth-text'>NIGHT</p>
        <p className='bottom-text'>ARCADE</p>
      </div>
      <div className='earth-div'>
        <img src={Soccer} alt='' />
        <p className='earth-text'>SOCCER</p>
        <p className='bottom-text'>TEAM VR</p>
        </div>
      <div className='earth-div'>
        <img src={Grid} alt='' />
        <p className='earth-text'>THE</p>
        <p className='bottom-text'>GRID</p>
        </div>
      <div className='earth-div'>
        <img src={Road} alt='' />
        <p className='earth-text'>FROM UP</p>
        <p className='bottom-text'>ABOVE VR</p>
      </div>
      <div className='earth-div'>
        <img src={Lights} alt='' />
        <p className='earth-text'>POCKET</p>
        <p className='bottom-text'>BOREALIS</p>
        </div>
      <div className='earth-div'>
      <img src={Curiosity} alt=''/>
      <p className='earth-text'>THE</p>
      <p className='bottom-text'>CURIOSITY</p>
      </div>
      <div className='earth-div'>
        <img src={Fisheye} alt='' />
        <p className='earth-text'>MAKE IT</p>
        <p className='bottom-text'>FISHEYE</p>
        </div>
    </div>
  );
}

export default Cards;