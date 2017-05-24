import React from 'react';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser(parseInt(this.props.match.params.userId))
    .then(()=> {
      document.title = `Melody | ${this.props.user.username}`;
    });
    this.props.fetchSongsByUser(parseInt(this.props.match.params.userId));
  }

  componentWillUnmount() {
    document.title = "Melody";
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchSongbyUser(parseInt(nextProps.match.params.userId));
    }
  }

  render(){
    const { user } = this.props;
    console.log(this.props);
    let username;
    if (user.user) {
      username = <p>{user.user.username}</p> 
    }
    return(
      <div>
        {username}
      </div>
    );
  }
}

export default UserDetail;
