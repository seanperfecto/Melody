import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SongDetail extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchSong(parseInt(this.props.match.params.songId));
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.songId !== nextProps.match.params.songId) {
      this.props.fetchSong(parseInt(nextProps.match.params.songId));
    }
  }

  render() {
    console.log(this.props);
    const { song } = this.props;
    return (
      <div>
        <div className="header-bg"></div>
        <section className="song-detail-main">
          <div className="song-detail-container">
            <img className="song-detail-album-image" src={song.image_url}
              alt={song.title} />
            <div className="song-detail-info">
              <Link to={`/user/${song.user_id}`}>{song.user.username}</Link>
              <h1>{song.title}</h1>
              <h6>Description: {song.description}</h6>
              <h2>P L A Y <i className="fa fa-play-circle-o"></i>
              </h2>
            </div>
          </div>
        </section>
        <hr />
      </div>
    );
  }
}

export default withRouter(SongDetail);
