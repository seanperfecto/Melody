import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import AuthModal from '../modal/auth_modal';
import UploadModal from '../modal/upload_modal';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSignout = this.handleSignout.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.requestSignin({username: "guestuser", password: "password"})
    .then(data => this.props.history.push(`/discover`));
  }

  handleSignout(e){
    e.preventDefault();
    this.props.requestSignout()
      .then(data => this.props.history.push(`/`));
  }

  render(){
    if (this.props.currentUser) {
      return(
        <div className="loggedin-group">
          <Link to={`/user/${this.props.currentUser.id}`}>
          <button className="header-button">
            {this.props.currentUser.username}</button></Link>
          <Link to={`/discover`}>
          <button className="header-button">
            Discover</button></Link>
          <UploadModal clearSongErrors={this.props.clearSongErrors}
            user={this.props.currentUser.id}
            type="upload"/>
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
          <AuthModal clearErrors={this.props.clearErrors} type="signin"/>
          <AuthModal clearErrors={this.props.clearErrors} type="signup"/>
        </nav>
      );
    }
  }
}

export default withRouter(NavBar);
