import React from 'react';
import DiscoverDetail from '../song/discover_detail';

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
    let username, profpic, bio, coverpic, songList;
    if (user) {
      username = user.username;
      profpic = user.profpic_url;
      coverpic = user.covpic_url;
      bio = user.bio;
    }

    if (this.props.songs) {
    const { songs } = this.props;
    songList = songs.map((song, idx) =>
      (<DiscoverDetail key={idx} song={song} />));
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
        <section className='user-songs'>
          <h1>Songs</h1>
          <ul className="discover-list">
            { songList }
          </ul>
        </section>
      </div>
    );
  }
}

export default UserDetail;
