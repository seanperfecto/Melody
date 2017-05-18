import { connect } from 'react-redux';
import { clearErrors } from '../../actions/session_actions';
import { SplashPage } from './splash_page';

const mapDispatchToProps = dispatch => ({
  clearErrors: user => dispatch(clearErrors())
});

export default connect(
  null,
  mapDispatchToProps
)(SplashPage);
