import { RECEIVE_CURRENT_TIME_BY_POS,
         RECEIVE_PLAY_PAUSE_SONG_FROM_AUDIO,
         RECEIVE_PLAY_PAUSE_SONG,
         STOP_CURRENT_SONG,
         RECEIVE_NEW_CURRENT_TIME } from '../actions/player_actions';

const initialState = {
  currentSong: '',
  currentSongPlaying: false,
  newCurrentTime: ''
};

const playerReducer = (state = initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_TIME_BY_POS:
      if (Boolean(newState.currentPos) === false) {
        newState.currentSong.currentPos = action.currentPos;
      }
      return newState;
    case RECEIVE_PLAY_PAUSE_SONG_FROM_AUDIO:
      newState.currentSongPlaying = !newState.currentSongPlaying;
      return newState;
    case RECEIVE_PLAY_PAUSE_SONG:
      newState.currentSong = action.song;
      if (state.currentSong !== null) {
        if (state.currentSong.id !== newState.currentSong.id) {
          newState.currentSongPlaying = true;
        } else {
          newState.currentSongPlaying = !newState.currentSongPlaying;
        }
      } else {
        newState.currentSongPlaying = true;
      }

      return newState;
    case STOP_CURRENT_SONG:
      newState.currentSong = null;
      return newState;
    case RECEIVE_NEW_CURRENT_TIME:
        newState.newCurrentTime = action.newCurrentTime;
      return newState;
    default:
      return state;
  }
};

export default playerReducer;
