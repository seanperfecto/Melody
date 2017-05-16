import { connect } from 'react-redux';
import { requestSignout } from '../../actions/session_actions';
import Greeting from './greeting';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestSignout: () => dispatch(requestSignout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
