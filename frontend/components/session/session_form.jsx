import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", username: "", password: "", type: this.props.type};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
    this.renderErrors();
  }

  update(property) {
    return e => this.setState({[property]: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    (this.state.type === 'signin') ?
      this.props.requestSignin(user) : this.props.requestSignup(user);
  }

  toggleModal(e) {
    e.preventDefault();
    const newType = this.state.type === 'signin' ? 'signup' : 'signin';
    console.log(newType);
    this.setState({type: newType});
  }

  navLink() {
    if (this.state.type === 'signin') {
      return <a onClick={this.toggleModal}>
          Don't have an account? Sign up!</a>;
    } else {
      return <a onClick={this.toggleModal}>
          Already have an account? Sign in!</a>;
    }
  }

  renderErrors() {
  return(
    <ul>
      {this.props.errors.map((error, idx) => (
        <li key={`${idx}`}>{error}</li>
      ))}
    </ul>
  );
  }

  render(){
    let email;
    console.log(this.props);
    if (this.state.type === "signup") {
      email = (
        <label>
          <i className="fa fa-envelope" aria-hidden="true"></i>
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
            placeholder="email"
          /><hr/>
        </label>
      );
    }
    let submitName = this.state.type === "signin" ? "Log In" : "Sign Up";
    return(
      <div className="login-form-container">
       <form onSubmit={this.handleSubmit} className="login-form-box">
         {this.renderErrors()}
         <div className="login-form">
           <br/>
           { email }
            <i className="fa fa-user" aria-hidden="true"></i>
             <input className="login-input" type="text"
               value={this.state.username}
               onChange={this.update('username')}
               className="login-input"
               placeholder="username"
             />
           <hr/>
           <i className="fa fa-lock" aria-hidden="true"></i>
             <input className="login-input" type="password"
               value={this.state.password}
               onChange={this.update('password')}
               className="login-input"
               placeholder="password"
             />
           <hr/>
           <input className="session-submit" type="submit" value={submitName} /><br/>
           {this.navLink()}
         </div>
       </form>
     </div>
   );
  }
}

export default withRouter(SessionForm);
