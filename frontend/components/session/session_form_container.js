import { connect } from 'react-redux';

import { requestSignin,
         requestSignout,
         requestSignup } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }, ownProps) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  type: ownProps.type
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestSignin: user => dispatch(requestSignin(user)),
    requestSignup: user => dispatch(requestSignup(user))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
