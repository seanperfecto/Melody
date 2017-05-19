import { connect } from 'react-redux';
import SongDetail from './song_detail';

import { fetchSong, updateSong, deleteSong }
  from '../../actions/song_actions';


const mapStateToProps = (state) => {
  return ({

});
};

const mapDispatchToProps = dispatch => ({
  fetchSong: (id) => dispatch(fetchSong(id)),
  updateSong: song => dispatch(updateSong(song)),
  deleteSong: id => dispatch(deleteSong(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongDetail);
