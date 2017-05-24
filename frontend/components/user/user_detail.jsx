import React from 'react';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.fetchUser(parseInt(this.props.match.params.userId))
    .then(()=> {
      document.title = `Melody | User Detail`;
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
    const { user } = this.props.user;
    console.log(this.props);
    let username, profpic, bio, coverpic;
    if (user) {
      username = user.username;
      profpic = user.profpic_url;
      coverpic = user.covpic_url;
      bio = user.bio;
    }
    return(
      <div>
        <div className="user-header-bg"></div>
        <section className="user-detail-main">
          <div className="user-detail-container">
            <div className="user-detail-info">
              <div>
                <h1>{username}</h1>
                <h5>{bio}</h5>
              </div>
              <button className='follow-button'>Follow</button>
              <img className="user-detail-cover-pic" src={coverpic}
                alt="coverpic" />
            </div>
            <img className="user-detail-prof-pic" src={profpic}
              alt={username} />
          </div>
        </section>
        <hr />
      </div>
    );
  }
}

export default UserDetail;
