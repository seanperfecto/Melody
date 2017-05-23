import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.click = this.click.bind(this);
    this.down = this.down.bind(this);
    this.move = this.move.bind(this);
    this.up = this.up.bind(this);
    this.renderTime= this.renderTime.bind(this);
    this.state = { isDown: false };
  }

  click(e){
    let posX = e.nativeEvent.offsetX;
    let newTime = posX/400 * this.props.duration;
    this.props.receiveCurrentTime(newTime);
  }

  down(e){
    this.setState({isDown: true});
    let posX = e.nativeEvent.offsetX;
    let newTime = posX/400 * this.props.duration;
    this.props.receiveCurrentTime(newTime);
  }

  move(e){
    if (this.state.isDown) {
      let posX = e.nativeEvent.offsetX;
      let newTime = posX/400 * this.props.duration;
      this.props.receiveCurrentTime(newTime);
    }
  }

  up(e){
    this.setState({ isDown: false });
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
          onClick={this.click}
          onMouseDown={this.down}
          onMouseMove={this.move}
          onMouseUp={this.up}
          onMouseLeave={this.up}
          value={this.props.currentTime}
          max={this.props.duration}></progress>
        {durationInSec}
      </div>
    );
  }
}

export default ProgressBar;
