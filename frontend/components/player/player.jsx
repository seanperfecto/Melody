import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class Player extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { song, paused } = this.props;
    console.log(paused);
    let audioPlayer;
    if (song) {
      audioPlayer = <ReactAudioPlayer
        ref={(element) => { this.rap = element; }}
        src={song.track_url}
        autoPlay
        controls
        />;
    }
    return(
      <div className='audio-player-container'>
        { audioPlayer }
      </div>
    );
  }
}

export default Player;
