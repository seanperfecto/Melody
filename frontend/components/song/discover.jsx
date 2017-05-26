import React from 'react';
import DiscoverDetail from './discover_detail';
import { NavLink } from 'react-router-dom';

class Discover extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSongs();
    document.title = "Melody | Discover";
  }

  componentWillUnmount() {
    document.title = "Melody";
  }


  render(){
    let songList, likedSongs;

    if (this.props.songs) {
    const { songs } = this.props;
    songList = songs.map((song, idx) =>
      (<DiscoverDetail key={idx} song={song}
        playPauseSong={this.props.playPauseSong}
        player={this.props.player}
        createLike={this.props.createLike}
        deleteLike={this.props.deleteLike} />));
    }
    if (this.props.currentUser) {
      likedSongs = <NavLink activeClassName="selected"
         to='/likedsongs'><h1 id='liked-songs'>Liked Songs</h1></NavLink>;
    }
    return(
      <div className='discover-page'>
        <NavLink activeClassName="selected" to="/discover"><h1>Discover</h1></NavLink>
        {likedSongs}
        <hr />
        <p>See what people are listening to:</p>
        <ul className='discover-list'>
          { songList }
        </ul>
      </div>
    );
  }
}

export default Discover;
