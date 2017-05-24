import { connect } from 'react-redux';
import Discover from './discover';

import { fetchSongs } from '../../actions/song_actions';
import { playPauseSong } from '../../actions/player_actions';
import { allSongs } from '../../reducers/selectors';


const mapStateToProps = (state) => {
  return ({
  songs: allSongs(state),
  errors: state.songs.errors,
  player: state.player
});
};

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  playPauseSong: song => dispatch(playPauseSong(song)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
