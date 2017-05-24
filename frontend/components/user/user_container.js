import { connect } from 'react-redux';
import UserDetail from './user_detail';

import { fetchSongsByUser }
  from '../../actions/song_actions';
import { fetchUser, updateUser } from '../../actions/user_actions';
import { allSongs } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  return ({
    user: state.user,
    songs: allSongs(state),
    errors: state.user.errors
  });
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  updateUser: (userId, user) => dispatch(updateUser(userId, user)),
  fetchSongsByUser: (id) => dispatch(fetchSongsByUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDetail);
