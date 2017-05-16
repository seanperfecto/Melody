import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.requestSignin({username: "demo", password: "password"});
  }

  handleSignout(e){
    e.preventDefault();
    this.props.requestSignout();
  }

  render(){
    if (this.props.currentUser) {
      return(
        <div className="header-group">
          <h2 className="header-name">{this.props.currentUser.username}</h2>
          <button className="header-button"
            onClick={this.handleSignout}>Sign Out</button>
        </div>
      );
    }

    else {
      return(
        <nav className="signin-signout-links">
          <button onClick={this.handleSubmit}>Demo</button>
          <Link to="/signin"><button>Sign In</button></Link>
          <Link to="/signup"><button>Sign Up</button></Link>
        </nav>
      );
    }
  }
}

export default NavBar;
