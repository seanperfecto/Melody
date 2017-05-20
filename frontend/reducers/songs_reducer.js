import { RECEIVE_SONGS,
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
    case REMOVE_SONG:
      nextState = Object.assign({}, state);
      delete nextState[action.song.id];
      return nextState;
    default:
      return state;
  }
};

export default songsReducer;
