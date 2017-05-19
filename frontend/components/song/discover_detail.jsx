import React from 'react';
import { Link } from 'react-router-dom';

class DiscoverDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.title = "Melody | Discover";
  }

  componentWillUnmount() {
    document.title = "Melody";
  }

  render(){
    const { song } = this.props;
    console.log(song);
    return(
      <li className="discover-detail">
        <img src={song.image_url} alt={song.title} /><br />
        <Link className="discover-title" to={`/song/${song.id}`}>
          { song.title }</Link><br />
        <Link className="discover-artist" to={`/user/${song.user_id}`}>
          { song.user.username }</Link><br />
      </li>
    );
  }
}

export default DiscoverDetail;
