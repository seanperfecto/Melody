import { connect } from 'react-redux';
import SongIndex from './song_index';

import { fetchSongs }
  from '../../actions/song_actions';
import { randomEightSongs } from '../../reducers/selectors';


const mapStateToProps = (state) => {
  return ({
  songs: randomEightSongs(state),
  errors: state.songs.errors
});
};

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs())
});

const SongIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);

export default SongIndexContainer;
