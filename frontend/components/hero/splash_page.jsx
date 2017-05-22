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
    </div>
  </div>
);
