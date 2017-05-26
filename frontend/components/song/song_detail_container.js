import { connect } from 'react-redux';
import SongDetail from './song_detail';

import { fetchSong, updateSong, deleteSong, clearSongErrors, createLike, deleteLike }
  from '../../actions/song_actions';
  import { playPauseSong, playPauseSongFromAudio } from '../../actions/player_actions';

const mapStateToProps = (state) => {
  return ({
    song: state.songDetail,
    player: state.player,
    currentUser: state.session.currentUser
});
};

const mapDispatchToProps = dispatch => ({
  fetchSong: (id) => dispatch(fetchSong(id)),
  updateSong: song => dispatch(updateSong(song)),
  deleteSong: id => dispatch(deleteSong(id)),
  clearSongErrors: () => dispatch(clearSongErrors()),
  playPauseSong: song => dispatch(playPauseSong(song)),
  playPauseSongFromAudio: () => dispatch(playPauseSongFromAudio()),
  createLike: id => dispatch(createLike(id)),
  deleteLike: id => dispatch(deleteLike(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongDetail);
