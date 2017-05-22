import { connect } from 'react-redux';
import SongDetail from './song_detail';

import { fetchSong, updateSong, deleteSong, clearSongErrors }
  from '../../actions/song_actions';

const mapStateToProps = (state) => {
  return ({
    song: state.songDetail,
    currentUser: state.session.currentUser
});
};

const mapDispatchToProps = dispatch => ({
  fetchSong: (id) => dispatch(fetchSong(id)),
  updateSong: song => dispatch(updateSong(song)),
  deleteSong: id => dispatch(deleteSong(id)),
  clearSongErrors: () => dispatch(clearSongErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongDetail);
