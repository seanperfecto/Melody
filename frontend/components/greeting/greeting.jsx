import React from 'react';
import { Link } from 'react-router-dom';

const accountLinks = () => (
  <nav className="signin-signout-links">
    <Link to="/signin">Sign In</Link>
    <Link to="/signup">Sign Up</Link>
  </nav>
);

const signedInGreeting = (currentUser, requestSignout) => (
  <div className="header-group">
    <h2 className="header-name">{currentUser.username}</h2>
    <button className="header-button" onClick={requestSignout}>Sign Out</button>
  </div>
);

const Greeting = ({ currentUser, requestSignout }) => (
  currentUser ? signedInGreeting(currentUser, requestSignout) : accountLinks()
);

export default Greeting;
