import React from 'react';
import { Link } from 'react-router-dom';


class DiscoverDetail extends React.Component {
  constructor(props) {
    super(props);

    this.togglePlay = this.togglePlay.bind(this);
  }


  togglePlay(){
    this.props.playPauseSong(this.props.song);
  }



  render(){
    const { song, player } = this.props;

    let playPause;
    if (player.currentSong) {
      if ((player.currentSong.id === song.id) &&
          player.currentSongPlaying === true ) {
      playPause = <i onClick={this.togglePlay} className="fa fa-fw fa-pause" aria-hidden="true"></i>;
    } else {
      playPause = <i onClick={this.togglePlay} className="fa fa-fw fa-play" aria-hidden="true"></i>; }
    }
    else {
      playPause = <i onClick={this.togglePlay} className="fa fa-fw fa-play" aria-hidden="true"></i>;
    }
    let heart;
    if (song.liked) {
      heart =
        <i onClick={()=>this.props.deleteLike(song.id)}
          className="fa fa-heart heart-dislike" aria-hidden="true"></i>;
    } else {
      heart =
        <i onClick={()=> {
          if (this.props.currentUser) {
            this.props.createLike(song.id);
          } else {
            window.globalOpenModal();
          }
        }}
          className="fa fa-heart heart-like" aria-hidden="true"></i>;
    }
    return(
      <li className="discover-detail">
        <div className='discover-detail-container'>
            <div className='hidden-play-control'>
              { playPause }
            </div>
            <div className='hidden-like-button'>
              { heart }
            </div>
          <Link to={`/song/${song.id}`}>
            <img src={song.image_url} alt={song.title} />
          </Link>
        </div>
        <Link className="discover-title" to={`/song/${song.id}`}>
          { song.title }</Link><br />
        <Link className="discover-artist" to={`/user/${song.user_id}`}>
          { song.user.username }</Link><br />
      </li>
    );
  }
}

export default DiscoverDetail;
// <div onClick={()=>this.props.createLike(song.id)}>LIKE</div>
// <div onClick={()=>this.props.deleteLike(song.id)}>DISLIKE</div>
