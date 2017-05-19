import React from 'react';
import DiscoverDetail from './discover_detail';

class Discover extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSongs();
  }

  render(){
    let songList;

    if (this.props.songs) {
    const { songs } = this.props;
    songList = songs.map((song, idx) =>
      (<DiscoverDetail key={idx} song={song} />));
    }

    return(
      <div className='discover-page'>
        <h1>Discover</h1>
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
