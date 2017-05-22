import React from 'react';
import { Link } from 'react-router-dom';

class SongIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSongs();
  }

  render(){
    const { songs } = this.props;
    let songList = songs.map((song, idx) => {
      return <li key={idx}><Link to={`/song/${song.id}`}>
                           <img src={song.image_url} alt={song.title} />
                           </Link></li>;
    });

    return(
        <ul className='homepage-list'>
          {songList}
        </ul>
    );
  }
}

export default SongIndex;
