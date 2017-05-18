import { RECEIVE_SONGS,
         RECEIVE_SONG,
         REMOVE_SONG,
         SONG_ERRORS,
         CLEAR_SONG_ERRORS } from '../actions/song_actions';

const _initialState = {
 song: null,
 errors: []
};

const songsReducer = (state = _initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_SONGS:
      nextState = {};
      action.songs.forEach(song => {
        nextState[song.id] = song;
      });
      return nextState;
    case RECEIVE_SONG:
      const newSong = {[action.song.id]: action.song};
      return Object.assign({}, state, newSong);
    case REMOVE_SONG:
      nextState = Object.assign({}, state);
      delete nextState[action.song.id];
      return nextState;
    case SONG_ERRORS:
      const errors = {errors: action.errors};
      return Object.assign({}, state, errors);
    case CLEAR_SONG_ERRORS:
      return Object.assign({}, _initialState);
    default:
      return state;
  }
};

export default songsReducer;
