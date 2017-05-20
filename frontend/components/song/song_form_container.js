import { connect } from 'react-redux';
import SongForm from './song_form';

import { createSong }
  from '../../actions/song_actions';


const mapStateToProps = (state, ownProps) => ({
  id: state.session.currentUser.id,
  errors: state.songDetail.errors
});

const mapDispatchToProps = dispatch => ({
  createSong: song => dispatch(createSong(song)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongForm);
