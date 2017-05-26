import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ProgressBar from './progressbar';
import { Link, withRouter } from 'react-router-dom';

class Player extends React.Component {
  constructor(props) {
    super(props);
    this.back = this.back.bind(this);
    this.next = this.next.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.start = this.start.bind(this);
    this.pause = this.pause.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.changeVol = this.changeVol.bind(this);
    this.loadSong = this.loadSong.bind(this);
    this.handleSpace = this.handleSpace.bind(this);

    this.state = { paused: false, percent: 0, volume: 50,
                   duration: 0, currentTime: 0.0001, intervalId: '' };

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
      this.setState({currentTime: newProps.newCurrentTime});
    }
  }

  componentDidMount(){
    if (this.props.location.pathname.match(/^\/song\/\d*$/)) {
      if (this.props.songs.length === 0) {
        this.props.fetchSongs();
      }
    }
    if (this.props.location.pathname.match(/^\/user\/\d*$/)) {
      if (this.props.songs.length === 0) {
        this.props.fetchSongs();
      } else {
        this.props.fetchPlayerSongsByUser(parseInt(this.props.location.pathname.split('/').pop()));
      }
    }
    document.addEventListener("keydown", this.handleSpace);
  }

  handleSpace(e) {
    if (this.props.song) {
      if ((e.keyCode === 32) && (e.target === document.body)) {
        e.preventDefault();
        this.togglePlay();
      }
    }
  }


  back(){
    if (this.rap.audioEl.currentTime > 2) {
      this.rap.audioEl.currentTime = 0;
    } else {
      let { songs } = this.props;
      this.loadSong(songs[(songs.length + this.props.songIndex - 1) % songs.length]);
    }
  }

  next(){
    let { songs } = this.props;
    this.loadSong(songs[(songs.length + this.props.songIndex + 1) % songs.length]);
    this.setState({currentTime: 0.0001, paused: false});
    this.start();
  }

  loadSong(song){
    this.props.playPauseSong(song);
  }

  start(){
    this.setState({ duration: this.rap.audioEl.duration,
                    volume: this.rap.audioEl.volume });
    let intervalId = setInterval(()=> {
      if (!this.state.paused) {
        this.updateTime();
      }
    }, 40);
    this.setState({intervalId: intervalId});
  }

  pause(){
    this.setState({paused: true});
  }

  componentWillUnmount(){
    clearInterval(this.state.intervalId);
    document.addEventListener("keydown", this.handleSpace);
  }

  updateTime(){
    this.setState({ currentTime: this.rap.audioEl.currentTime });
  }

  togglePlay(){
    this.props.playPauseSongFromAudio(this.rap.audioEl.paused);
  }

  changeVol(e){
    this.rap.audioEl.volume = e.target.value;
    this.setState({volume: e.target.value});
  }

  render() {
    let { song, paused, receiveCurrentTime } = this.props;
    let audioPlayer, endNum;
    if (song) {
      audioPlayer = <div><ReactAudioPlayer
        ref={(element) => { this.rap = element; }}
        onPlay={this.start}
        onPause={this.pause}
        onEnded={this.next}
        src={song.track_url}
        autoPlay
        />
      <ProgressBar duration={this.state.duration}
                   currentTime={this.state.currentTime}
                   receiveCurrentTime={receiveCurrentTime}/></div>;
    }
    let playPauseIcon = <i className="fa fa-pause play-pause"></i>;
    if (this.props.paused) {
      playPauseIcon = <i onClick={this.pause} className="fa fa-play play-pause"></i>;
    }
    let volumeButton = <i className="fa fa-volume-down" aria-hidden="true"></i>;
    if (this.state.volume < 0.05) {
      volumeButton = <i className="fa fa-volume-off" aria-hidden="true"></i>;
    } else if (this.state.volume > 0.70) {
      volumeButton = <i className="fa fa-volume-up" aria-hidden="true"></i>;
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
            <input onChange={this.changeVol} type="range" min="0" max="1" step="0.01"/>
            { volumeButton }
          </div>
          <div className='audio-info'>
              <Link to={`/song/${song.id}`}><img src={song.image_url} alt="song cover" /></Link>
              <Link to={`/song/${song.id}`}><p>{song.title}</p></Link>
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

export default withRouter(Player);
