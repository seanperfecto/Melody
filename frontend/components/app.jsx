import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SongIndexContainer from './song/song_index_container';
import { HeaderLogo } from './navbar/header_logo';
import HeroHeader from './hero/hero_header';
import { Route } from 'react-router-dom';

const App = () => (
  <div>
    <header>
      <HeaderLogo />
      <NavbarContainer />
    </header>
    <Route exact path="/" component={ HeroHeader } />
    <Route exact path='/' component={ SongIndexContainer } />
  </div>
);

export default App;
