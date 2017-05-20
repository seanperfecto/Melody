import { connect } from 'react-redux';
import SongForm from './song_form';

import { createSong }
  from '../../actions/song_actions';


const mapStateToProps = (state, ownProps) => ({
  id: state.session.currentUser.id,
  errors: state.songDetail.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createSong: song => dispatch(createSong(song)),
  closeModal: () => ownProps.closeModal()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongForm);
