import { connect } from 'react-redux';
import UserDetail from './user_detail';

import { fetchSongsByUser, fetchUser, updateUser,
         receiveNullUser, clearUserSongs } from '../../actions/user_actions';
import { createLike, deleteLike } from '../../actions/song_actions';
import { playPauseSong } from '../../actions/player_actions';
import { allSongsByUser } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return ({
    user: state.user,
    songs: allSongsByUser(state.user.songs),
    errors: state.user.errors,
    player: state.player,
    currentUser: state.session.currentUser
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  updateUser: (userId, user) => dispatch(updateUser(userId, user)),
  fetchSongsByUser: (id) => dispatch(fetchSongsByUser(id)),
  playPauseSong: (song) => dispatch(playPauseSong(song)),
  receiveNullUser: () => dispatch(receiveNullUser()),
  clearUserSongs: () => dispatch(clearUserSongs()),
  createLike: id => dispatch(createLike(id)),
  deleteLike: id => dispatch(deleteLike(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);
