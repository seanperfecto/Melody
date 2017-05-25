import { connect } from 'react-redux';
import Player from './player';

import { playPauseSongFromAudio,
         playPauseSong,
         receiveCurrentTime } from '../../actions/player_actions';
import { fetchSongs } from '../../actions/song_actions';
import { allSongs } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  let song = state.player.currentSong;
  let songArray = allSongs(state);
  let songIndex = -1;
  if ((Boolean(song)) && (Boolean(songArray))) {
    for (let i = 0; i < songArray.length; i++) {
      if (songArray[i].id === song.id) {
        songIndex = i;
        break;
      }
    }
  }
  return {
    song: song,
    songIndex: songIndex,
    songs: allSongs(state),
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
