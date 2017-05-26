import { connect } from 'react-redux';
import LikedSongs from './liked_songs';

import { fetchSongs, createLike, deleteLike,
          fetchLikedSongsByUser } from '../../actions/song_actions';
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
  fetchLikedSongsByUser: () => dispatch(fetchLikedSongsByUser()),
  playPauseSong: song => dispatch(playPauseSong(song)),
  createLike: songId => dispatch(createLike(songId)),
  deleteLike: songId => dispatch(deleteLike(songId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LikedSongs);
