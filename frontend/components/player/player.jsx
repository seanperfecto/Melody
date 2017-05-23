import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.togglePlay = this.togglePlay.bind(this);

    this.state = { paused: false, percent: 0, volume: 50 };
  }

  componentWillReceiveProps(newProps){
    if (!this.rap) {
      return;
    }


    if (newProps.paused !== this.props.paused) {
      (this.rap.audioEl.paused) ? this.rap.audioEl.play() : this.rap.audioEl.pause();
      this.setState({paused: !this.state.paused});
    }
  }

  back(){
    if (this.rap.audioEl.currentTime > 1) {
      this.rap.audioEl.currentTime = 0;
    }
  }

  next(){
    console.log('hi');
  }

  togglePlay(){
    this.props.playPauseSongFromAudio(this.rap.audioEl.paused);
    console.log(this.rap.audioEl.currentTime);
    console.log(this.rap.audioEl.volume);
  }

  render() {
    let { song, paused } = this.props;
    let audioPlayer, endNum;
    if (song) {
      audioPlayer = <ReactAudioPlayer
        ref={(element) => { this.rap = element; }}
        src={song.track_url}
        autoPlay
        buffered
        />;
    }
    let playPauseIcon = <i className="fa fa-pause play-pause"></i>;
    if (this.props.paused) {
      playPauseIcon = <i className="fa fa-play play-pause"></i>;
    }

    let audioPlayerContainer;
    if (song) {
      audioPlayerContainer =
      <div className='audio-player-container'>
          <div className="controls-div">
            <ul className="controls-ul">
              <li onClick={this.back}><i className="fa fa-step-backward"></i></li>
              <li onClick={this.togglePlay}>{playPauseIcon}</li>
              <li onClick={this.next}><i className="fa fa-step-forward"></i></li>
            </ul>
          </div>
          <div className="progressbar-div">
            <div className="start-num">
            </div>
            <div className="progressbar">
            </div>
            <div className="end-num">
            </div>
          </div>
          { audioPlayer }
          { endNum }
        </div>;
    }
    return(
      <div>
        { audioPlayerContainer }
      </div>
    );
  }
}

export default Player;
