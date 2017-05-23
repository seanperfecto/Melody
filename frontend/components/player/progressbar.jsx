import React from 'react';

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.seek = this.seek.bind(this);
  }

  seek(){

  }

  render(){
    console.log(this.props.currentTime);
    return(
      <div>
        hi
      </div>
    );
  }
}

export default ProgressBar;
