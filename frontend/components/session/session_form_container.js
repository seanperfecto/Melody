import { connect } from 'react-redux';

import { requestSignin,
         requestSignout,
         requestSignup,
         clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = ({ session }, ownProps) => ({
  loggedIn: Boolean(session.currentUser),
  errors: session.errors,
  type: ownProps.type
});

const mapDispatchToProps = (dispatch) => {
  return {
    requestSignin: user => dispatch(requestSignin(user)),
    requestSignup: user => dispatch(requestSignup(user)),
    clearErrors: user => dispatch(clearErrors())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
