import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {email: "", username: "", password: ""};
    this.handleSubmit = this.handleSubmit.bind(this);
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
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'signin') {
      return <Link to="/signup">Don't have an account? Sign up!</Link>;
    } else {
      return <Link to="/signin">Already have an account? Sign in!</Link>;
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
    if (this.props.formType === "signup") {
      email = (
        <label>Email:
          <input type="text"
            value={this.state.email}
            onChange={this.update('email')}
            className="login-input"
          />
        </label>
      );
    }
    return(
      <div className="login-form-container">
       <form onSubmit={this.handleSubmit} className="login-form-box">
         Welcome to Melody!
         <br/>
         {this.navLink()}<br/>
         {this.renderErrors()}
         <div className="login-form">
           <br/>
           { email }
           <br/>
           <label>Username:
             <input type="text"
               value={this.state.username}
               onChange={this.update('username')}
               className="login-input"
             />
           </label>
           <br/>
           <label>Password:
             <input type="password"
               value={this.state.password}
               onChange={this.update('password')}
               className="login-input"
             />
           </label>
           <br/>
           <input type="submit" value="Submit" />
         </div>
       </form>
     </div>
   );
  }
}

export default withRouter(SessionForm);
