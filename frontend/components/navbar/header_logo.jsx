import React from 'react';
import { Link } from 'react-router-dom';


export const HeaderLogo = () => (
  <hgroup className='header-logo'>
    <Link className='header-link header-link-name' to='/discover'>M E L O D Y</Link>
    <Link className='header-link' to='/discover'><img height="45px" width="45px"
      src='http://res.cloudinary.com/dqr2mejhc/image/upload/v1495044542/melody_logo3_q3qjg9.png'
      alt="logo" />
    </Link>
  </hgroup>
);
