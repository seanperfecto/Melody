import React from 'react';
import DiscoverDetail from '../song/discover_detail';

class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.updateProf = this.updateProf.bind(this);
    this.updateCov = this.updateCov.bind(this);
    this.edit = this.edit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateBio = this.updateBio.bind(this);

    this.state = {imageFile: '', editing: false, bio: ''};
  }

  componentWillMount(){
    scrollTo(0,0);
  }

  componentDidMount(){
    this.props.fetchUser(parseInt(this.props.match.params.userId))
    .then(()=> {
      this.setState({bio: this.props.user.user.bio});
      this.props.fetchSongsByUser(parseInt(this.props.match.params.userId));
    })
    .then(()=> {
      document.title = `Melody | ${this.props.user.user.username}`;
    });
  }

  componentWillUnmount() {
    document.title = "Melody";
    this.props.receiveNullUser();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.userId !== nextProps.match.params.userId) {
      this.props.fetchSongbyUser(parseInt(nextProps.match.params.userId));
    }
  }

  componenetWillUpdate(nextProps) {
    this.setState({bio: nextProps.user.user.bio});
  }

  updateProf(e){
    let file = e.currentTarget.files[0];
    let formData = new FormData();
    formData.append("user[profilepic]", file);
    this.props.updateUser(this.props.currentUser.id, formData);
  }

  updateCov(e){
    let file = e.currentTarget.files[0];
    let formData = new FormData();
    formData.append("user[coverpic]", file);
    this.props.updateUser(this.props.currentUser.id, formData);
  }

  edit(){
    this.setState({editing: true});
  }

  handleChange(e){
    this.setState({bio: e.target.value});
  }

  updateBio(e){
    e.preventDefault();
    let formData = new FormData();
    formData.append("user[bio]", this.state.bio);
    this.props.updateUser(this.props.currentUser.id, formData)
      .then(()=>this.setState({editing: false}));
  }

  render(){
    const { currentUser} = this.props;
    const { user } = this.props.user;
    let username, profpic, bio, coverpic, songList;
    let editProfPicButton, editCovPicButton, followButton;
    if (user) {
      username = user.username;
      profpic = user.profpic_url;
      coverpic = user.covpic_url;
      bio = user.bio;
      if (currentUser) {
        if (user.id === currentUser.id) {
          editProfPicButton =
          <label htmlFor='prof-upload'>
            <span className='add-prof-button'>
            <i className="fa fa-fw fa-camera" aria-hidden="true"></i>
              &nbsp;Profile Picture</span>
            <input type="file"
              onChange={this.updateProf}
              id='prof-upload' style={{'display': 'none'}} />
          </label>;

          editCovPicButton =
          <label htmlFor='cov-upload'>
            <span className='add-cov-button'>
            <i className="fa fa-fw fa-camera" aria-hidden="true"></i>
              &nbsp;Cover Picture</span>
            <input type="file"
              onChange={this.updateCov}
              id='cov-upload' style={{'display': 'none'}} />
          </label>;
        }
      }
      if (currentUser) {
        if (user.id !== currentUser.id) {
          followButton = <button className='follow-button'>Follow</button>;
          }
      }

      if (this.props.songs.length > 0) {
      const { songs } = this.props;
      songList = songs.map((song, idx) =>
      (<DiscoverDetail key={idx} song={song}
        playPauseSong={this.props.playPauseSong}
        player={this.props.player} />));
      } else {
        songList = <div className='no-songs'><h3>{user.username} has no songs.</h3>
        <img src='http://res.cloudinary.com/dqr2mejhc/image/upload/c_scale,w_149/v1495683419/melody_logo_bw_yeybpv.png'
          alt='melody_bw_logo' />
        </div>;
      }
    }

    let editBox;
    if (user) {
      if (currentUser && currentUser.id === user.id) {
        if (this.state.editing) {
          editBox = <form onSubmit={this.updateBio}>
                      <textarea className='edit-textarea' value={this.state.bio}
                        onChange={this.handleChange}/><br/>
                      <input className='edit-submit' type="submit" value="Update Bio" />
                    </form>;
        } else {
          editBox = <div className='edit-bio-container'>
                        <h5>
                          <i onClick={this.edit}
                            className="fa fa-pencil" aria-hidden="true"></i>
                          &nbsp;&nbsp;{user.bio}</h5>
                    </div>;
        }
      } else {
        editBox = <h5>{user.bio}</h5>;
    }
    }
    return(
      <div>
        <div className="user-header-bg"></div>
        <section className="user-detail-main">
          <div className="user-detail-container">
            <div className="user-detail-info">
              <div>
                <h1>{username}</h1>
                { editBox }

              </div>
              { followButton }
              <div className='user-detail-cov-pic-container'>
                <img className="user-detail-cover-pic" src={coverpic}
                  alt="coverpic" />
                { editCovPicButton }
              </div>
            </div>
            <div className='user-detail-prof-pic-container'>
              <img className="user-detail-prof-pic" src={profpic}
                alt={username} />
              { editProfPicButton }
            </div>
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
