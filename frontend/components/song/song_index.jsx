import React from 'react';

class SongIndex extends React.Component {
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
    songList = songs.map((song, idx) => (<li key={idx}>{song.title}</li>));
    }

    return(
      <div>
        THIS NOT GONNA WORK.
        { songList } 
      </div>
    );
  }
}

export default SongIndex;
