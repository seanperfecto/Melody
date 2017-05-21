import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UploadModal from '../modal/upload_modal';
import ReactAudioPlayer from 'react-audio-player';

class SongDetail extends React.Component {
  constructor(props){
    super(props);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  componentDidMount(){
    this.props.fetchSong(parseInt(this.props.match.params.songId))
    .then(()=> {
      document.title = `Melody | Song Detail`;
    });
  }

  componentWillUnmount() {
    document.title = "Melody";
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.songId !== nextProps.match.params.songId) {
      this.props.fetchSong(parseInt(nextProps.match.params.songId));
      document.title = `Melody | ${nextProps.title}`;
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

  render() {
    const { song, currentUserId } = this.props;
    let editButton, deleteButton;
    if ( currentUserId === song.user_id ) {
      editButton = <UploadModal song={this.props.song}
        clearSongErrors={this.props.clearSongErrors}
        type="edit"/>;
      deleteButton = <button className='detail-ed-button' onClick={this.confirmDelete}>Delete Song</button>;
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
              <h6>Description: {song.description}</h6>
              <h2>P L A Y <i className="fa fa-play-circle-o"></i>
              </h2><br />
              <ReactAudioPlayer
                src={song.track_url}
                autoPlay
                controls
              />
              { editButton }
              { deleteButton }
            </div>
          </div>
        </section>
        <hr />
      </div>
    );
  }
}

export default withRouter(SongDetail);
