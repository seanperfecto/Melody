import React from 'react';
import { Link } from 'react-router-dom';


export const HeaderLogo = () => (
  <hgroup className='header-logo'>
    <Link className='header-link header-link-name' to='/'>M E L O D Y</Link>
    <Link className='header-link' to='/'><img height="55px" width="55px" src='/assets/melody_logo3.png' alt="logo" /></Link>
  </hgroup>
);
