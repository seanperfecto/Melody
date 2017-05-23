import React from 'react';
import AuthModal from '../modal/auth_modal';
import SongIndexContainer from './song_index_container';

export const SplashPage = ({ clearErrors }) => (
  <div>
    <div className='splash'>
      <h2>See What's Trending</h2>
      <SongIndexContainer />
    </div>
    <div className='bottom-splash'>
      <h1>FOR THE ARTISTS<br/>BY THE ARTISTS</h1>
    </div>
    <div className='more-info'>
      <h3>Now, what are you waiting for?</h3>
      <h4>Hear new tracks and be heard. All for free.</h4>
      <AuthModal clearErrors={clearErrors} type="account" />
    </div>
  </div>
);
