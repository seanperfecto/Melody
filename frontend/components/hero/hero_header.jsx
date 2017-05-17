import React from 'react';
import { Link } from 'react-router-dom';

const HeroHeader = () => (
  <div className='hero'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"
         preserveAspectRatio="none">
      <polygon fill="#E3E5E1" points="0,100 100,0 100,100"/>
    </svg>
    <div className='tagline'>
      <h1>Music To Your Ears</h1>
      <h2>Melody lets you discover new songs while connecting with fellow music lovers.</h2>
      <Link className='explore-link' to='/discover'>Start Exploring</Link>
    </div>
  </div>
);

export default HeroHeader;
