import React from 'react';
import { Link } from 'react-router-dom';
import SampleModal from '../modal/sample_modal';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.requestSignin({username: "GuestUser", password: "password"});
  }

  handleSignout(e){
    e.preventDefault();
    this.props.requestSignout();
  }

  render(){
    if (this.props.currentUser) {
      return(
        <div className="loggedin-group">
          <button className="header-button">
            {this.props.currentUser.username}</button>
          <button className="header-button"
            onClick={this.handleSignout}>Sign Out</button>
        </div>
      );
    }

    else {
      return(
        <nav className="signin-links">
          <button className="header-button"
            onClick={this.handleSubmit}>Demo Log In</button>
          <SampleModal clearErrors={this.props.clearErrors} type="signin"/>
          <SampleModal clearErrors={this.props.clearErrors} type="signup"/>
        </nav>
      );
    }
  }
}

export default NavBar;
