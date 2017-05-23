import { connect } from 'react-redux';
import Player from './player';

import { playPauseSongFromAudio,
         playPauseSong,
         fetchSongs,
         receiveCurrentTime } from '../../actions/player_actions';

const mapStateToProps = (state, ownProps) => {
  let song = state.player.currentSong;
  let songIndex = -1;
  if ((!!song) && (!!state.songs.songs)) {
    for (let i = 0; i < state.songs.songs.length; i++) {
      if (state.songs.songs[i].id === song.id) {
        songIndex = i;
        break;
      }
    }
  }
  return {
    song: song,
    songIndex: songIndex,
    songs: state.songs.songs,
    paused: !state.player.currentSongPlaying,
    newCurrentTime: state.player.newCurrentTime
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
                       mapDispatchToProps)(Player);
