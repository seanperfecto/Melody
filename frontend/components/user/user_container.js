import { connect } from 'react-redux';
import UserDetail from './user_detail';

import { fetchSongsByUser }
  from '../../actions/song_actions';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { playPauseSong } from '../../actions/player_actions';
import { allSongs } from '../../reducers/selectors';
import { receiveNullUser } from '../../actions/user_actions';

const mapStateToProps = (state) => {
  return ({
    user: state.user,
    songs: allSongs(state),
    errors: state.user.errors,
    player: state.player
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  updateUser: (userId, user) => dispatch(updateUser(userId, user)),
  fetchSongsByUser: (id) => dispatch(fetchSongsByUser(id)),
  playPauseSong: (song) => dispatch(playPauseSong(song)),
  receiveNullUser: () => dispatch(receiveNullUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);
