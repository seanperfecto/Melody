import { connect } from 'react-redux';
import { requestSignout, requestSignin, clearErrors } from '../../actions/session_actions';
import { clearSongErrors } from '../../actions/song_actions';
import NavBar from './navbar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestSignout: () => dispatch(requestSignout()),
  requestSignin: (user) => dispatch(requestSignin(user)),
  clearErrors: () => dispatch(clearErrors()),
  clearSongErrors: () => dispatch(clearSongErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
