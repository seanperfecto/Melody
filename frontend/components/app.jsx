import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import { HeaderLogo } from './header/header_logo';

const App = () => (
  <div>
    <header>
      <HeaderLogo />
      <NavbarContainer />
    </header>
  </div>
);

export default App;
