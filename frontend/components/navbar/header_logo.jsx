import React from 'react';
import { Link } from 'react-router-dom';


export const HeaderLogo = () => (
  <hgroup className='header-logo'>
    <Link className='header-link' to='/'><img height="30px" width="30px" src='/assets/melody_logo.png' alt="logo" /></Link>
    <Link className='header-link' to='/'>Melody</Link>
  </hgroup>
);
