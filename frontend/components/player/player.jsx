import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ProgressBar from './progressbar';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.start = this.start.bind(this);
    this.updateTime = this.updateTime.bind(this);

    this.state = { paused: false, percent: 0, volume: 50,
                   duration: 0, currentTime: 0 };
  }

  componentWillReceiveProps(newProps){
    if (!this.rap) {
      return;
    }


    if (newProps.paused !== this.props.paused) {
      (this.rap.audioEl.paused) ? this.rap.audioEl.play() : this.rap.audioEl.pause();
      this.setState({paused: !this.state.paused});
    }

    if (newProps.newCurrentTime !== this.props.newCurrentTime) {
      this.rap.audioEl.currentTime = newProps.newCurrentTime;
    }
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  back(){
    if (this.rap.audioEl.currentTime > 1) {
      this.rap.audioEl.currentTime = 0;
    }
  }

  next(){
    console.log('hi');
  }

  start(){
    this.setState({ duration: this.rap.audioEl.duration });
    this.setState({ volume: this.rap.audioEl.volume });
    this.interval = setInterval(this.updateTime, 40);
  }

  updateTime(){
    this.setState({ currentTime: this.rap.audioEl.currentTime });
  }

  togglePlay(){
    this.props.playPauseSongFromAudio(this.rap.audioEl.paused);
  }

  render() {
    let { song, paused, receiveCurrentTime } = this.props;
    let audioPlayer, endNum;
    if (song) {
      audioPlayer = <div><ReactAudioPlayer
        ref={(element) => { this.rap = element; }}
        onCanPlay={this.start}
        src={song.track_url}
        autoPlay
        />
      <ProgressBar duration={this.state.duration}
                   currentTime={this.state.currentTime}
                   receiveCurrentTime={receiveCurrentTime}/></div>;
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
              <li onClick={this.back}>
                <i className="fa fa-step-backward"></i></li>
              <li onClick={this.togglePlay}>{playPauseIcon}</li>
              <li onClick={this.next}>
                <i className="fa fa-step-forward"></i></li>
            </ul>
          </div>
          { audioPlayer }
          <div className='audio-div'>
            <input type="range" min="0" max="100" />
          </div>
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
