import React from 'react';
import DiscoverDetail from './discover_detail';
import { NavLink } from 'react-router-dom';

class LikedSongs extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchLikedSongsByUser();
    document.title = "Melody | Liked Songs";
  }

  componentWillUnmount() {
    document.title = "Melody";
  }


  render(){
    let songList;

    if (this.props.songs) {
    const { songs } = this.props;
    if (songs.length > 0) {
      songList = songs.map((song, idx) =>
        (<DiscoverDetail key={idx} song={song}
          playPauseSong={this.props.playPauseSong}
          player={this.props.player}
          createLike={this.props.createLike}
          deleteLike={this.props.deleteLike} />));
    } else {
      songList = <li key="1" className='no-songs'><h3>Sorry, you have no liked songs.</h3>
      <img src='http://res.cloudinary.com/dqr2mejhc/image/upload/c_scale,w_149/v1495683419/melody_logo_bw_yeybpv.png'
        alt='melody_bw_logo' /></li>;
      }
    }
    return(
      <div className='discover-page'>
        <NavLink activeClassName="selected"
          to='/discover'><h1>Discover</h1></NavLink>
        <NavLink activeClassName="selected"
          to='/likedsongs'><h1 id="liked-songs">Liked Songs</h1></NavLink>
        <hr />
        <p>Here are the songs that you have liked:</p>
        <ul className='discover-list'>
          { songList }
        </ul>
      </div>
    );
  }
}

export default LikedSongs;
