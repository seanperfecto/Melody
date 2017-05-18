import React from 'react';
import { Route } from 'react-router-dom';

import { HeaderLogo } from './navbar/header_logo';
import NavbarContainer from './navbar/navbar_container';
import SongIndexContainer from './song/song_index_container';
import HeroHeader from './hero/hero_header';
import SplashPageContainer from './hero/splash_page_container';
import { FooterInfo } from './footer/footer_info';

const App = () => (
  <div className='app'>
    <div>
      <header>
        <HeaderLogo />
        <NavbarContainer />
      </header>
      <Route exact path="/" component={ HeroHeader } />
      <Route exact path="/" component={ SplashPageContainer }  />
    </div>
    <footer>
      <FooterInfo />
    </footer>
  </div>
);

export default App;

// <Route exact path='/' component={ SongIndexContainer } />
