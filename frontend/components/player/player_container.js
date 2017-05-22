import { connect } from 'react-redux';
import Player from './player';

import { playPauseSongFromAudio,
         playPauseSong,
         fetchSongs,
         receiveCurrentTime } from '../../actions/player_actions';

const mapStateToProps = (state, ownProps) => {
  let song = state.player.currentSong;
  return {
    song: song,
    paused: !state.player.currentSongPlaying
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    playPauseSongFromAudio: (paused) => dispatch(playPauseSongFromAudio(paused)),
    playPauseSong: (song) => dispatch(playPauseSong(song)),
    fetchSongs: () => dispatch(fetchSongs()),
    receiveCurrentTime: (currentTime) => dispatch(receiveCurrentTime(currentTime))
  };
};

export default connect(mapStateToProps,
                       mapDispatchToProps)
                      (Player);
