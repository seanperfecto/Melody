import React from 'react';
import { Route } from 'react-router-dom';

import { HeaderLogo } from './navbar/header_logo';
import NavbarContainer from './navbar/navbar_container';
import HeroHeader from './hero/hero_header';
import SplashPageContainer from './hero/splash_page_container';
import DiscoverContainer from './song/discover_container';
import SongDetailContainer from './song/song_detail_container';
import { FooterInfo } from './footer/footer_info';
import PlayerContainer from './player/player_container';

const App = () => (
  <div className='app'>
    <div>
      <header>
        <div className='header-contents'>
          <HeaderLogo />
          <NavbarContainer />
        </div>
      </header>
      <Route exact path="/" component={ HeroHeader } />
      <Route exact path="/" component={ SplashPageContainer }  />
      <Route exact path="/discover" component={ DiscoverContainer }  />
      <Route exact path="/song/:songId" component={ SongDetailContainer }  />
    </div>
    <footer>
      <FooterInfo />
    </footer>
  </div>
);

// <Route exact path="/song/:songId" component={ SongDetailContainer }  />
// <Route exact path='/' component={ SongIndexContainer } />
export default App;
