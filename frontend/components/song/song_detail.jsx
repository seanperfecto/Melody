import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UploadModal from '../modal/upload_modal';
import CommentContainer from '../comment/comment_container';

class SongDetail extends React.Component {
  constructor(props){
    super(props);
    this.state = { paused: false };
    this.confirmDelete = this.confirmDelete.bind(this);
    this.playPauseSong = this.playPauseSong.bind(this);
  }

  componentWillMount(){
    scrollTo(0,0);
  }

  componentDidMount(){
    this.props.fetchSong(parseInt(this.props.match.params.songId))
    .then(()=> {
      document.title = `Melody | ${this.props.song.title}`;
    });
  }

  componentWillUnmount() {
    document.title = "Melody";
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.songId !== nextProps.match.params.songId) {
      this.props.fetchSong(parseInt(nextProps.match.params.songId));
    }
  }

  confirmDelete(e){
    e.preventDefault();
    var result = confirm("Are you sure you want to delete?");
    if (result) {
      this.props.deleteSong(this.props.song.id)
        .then(data => this.props.history.push(`/discover`));
    }
  }

  playPauseSong() {
   this.props.playPauseSong(this.props.song);
  }

  render() {
    const { song, currentUser, player } = this.props;
    let editButton, deleteButton;
    if (currentUser) {
      if ( currentUser.id === song.user_id ) {
        editButton = <UploadModal song={this.props.song}
          clearSongErrors={this.props.clearSongErrors}
          type="edit"/>;
        deleteButton = <button className='detail-ed-button'
          onClick={this.confirmDelete}>Delete Song</button>;
        }
    }

    let playPause;
    if (player.currentSong) {
      if ((player.currentSong.id === song.id) &&
          player.currentSongPlaying === true ) {
      playPause = <h2>P A U S E <i className="fa fa-pause-circle-o"></i></h2>;
    } else {
      playPause = <h2>P L A Y <i className="fa fa-play-circle-o"></i></h2>; }
    }
    else {
      playPause = <h2>P L A Y <i className="fa fa-play-circle-o"></i></h2>;
    }

    let heart;
    if (song.liked) {
      heart = <h2 onClick={()=>this.props.deleteLike(song.id)}>
        L I K E D <i className="fa fa-heart-o"></i></h2>;
    } else {
      heart = <h2 onClick={()=>this.props.createLike(song.id)}>
        L I K E <i className="fa fa-heart-o"></i></h2>;
    }
    return (
      <div>
        <div className="header-bg"></div>
        <section className="song-detail-main">
          <div className="song-detail-container">
            <img className="song-detail-album-image" src={song.image_url}
              alt={song.title} />
            <div className="song-detail-info">
              <Link to={`/user/${song.user_id}`}>{song.user.username}</Link>
              <h1>{song.title}</h1>
              <h6>{song.description}<br/>
                  <span id="uploaded">Uploaded: {song.time} ago</span>
              </h6>
                <div className="details-play-pause"
                  onClick={this.playPauseSong}>
                  { playPause }
                </div>
                <div id="heart" className="details-play-pause">
                  { heart }
                </div>
              <br />
              { editButton }
              { deleteButton }
            </div>
          </div>
        </section>
        <hr />
        <div className="comment-container">
          <h1>Comments</h1><br />
          <CommentContainer songId={song.id}/>
        </div>
      </div>
    );
  }
}

export default withRouter(SongDetail);
