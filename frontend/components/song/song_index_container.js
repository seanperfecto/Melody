import { connect } from 'react-redux';
import SongIndex from './song_index';

import { fetchSongs, createSong, updateSong, deleteSong }
  from '../../actions/song_actions';
import { allSongs } from '../../reducers/selectors';


const mapStateToProps = (state) => {
  return ({
  songs: allSongs(state),
  errors: state.songs.errors
});
};

const mapDispatchToProps = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  createSong: song => dispatch(createSong(song)),
  updateSong: song => dispatch(updateSong(song)),
  deleteSong: id => dispatch(deleteSong(id))
});

const SongIndexContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SongIndex);

export default SongIndexContainer;
