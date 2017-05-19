import React from 'react';

class SongIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSongs();
  }

  render(){

    return(
      <div className='discover-page'>
        THIS NOT GONNA WORK.
      </div>
    );
  }
}

export default SongIndex;
