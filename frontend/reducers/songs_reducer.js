import { RECEIVE_SONGS,
         RECEIVE_SONG,
         REMOVE_SONG,
         SONG_ERRORS,
         CLEAR_SONG_ERRORS } from '../actions/song_actions';

const _initialState = {
 songs: null,
 errors: []
};

const songsReducer = (state = _initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_SONGS:
      return {songs: action.songs, errors: []};
    case RECEIVE_SONG:
      return action.song;
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
