import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.seek = this.seek.bind(this);
    this.renderTime= this.renderTime.bind(this);
  }

  seek(e){
    let posX = e.nativeEvent.offsetX;
    let newTime = posX/400 * this.props.duration;
    this.props.receiveCurrentTime(newTime);
  }

  renderTime(time){
    let minutes = Math.floor(time/60);
    let seconds = Math.floor(time - minutes * 60);
    let secondsWithZero = seconds < 10 ? `0${seconds}` : seconds;
    return `${minutes}:${secondsWithZero}`;
  }

  render(){
    const {currentTime, duration} = this.props;
    let timeInSec = this.renderTime(currentTime);
    let durationInSec = this.renderTime(duration);
    return(
      <div>
        {timeInSec}
        <progress
          onClick={this.seek}
          value={this.props.currentTime}
          max={this.props.duration}></progress>
        {durationInSec}
      </div>
    );
  }
}

export default ProgressBar;
