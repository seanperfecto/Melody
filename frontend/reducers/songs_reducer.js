import { RECEIVE_SONGS,
         REMOVE_SONG,
         ADD_LIKE_TO_SONG,
         REMOVE_LIKE_TO_SONG } from '../actions/song_actions';

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
    case ADD_LIKE_TO_SONG:
      nextState = Object.assign({}, state);
      nextState.songs[action.id].liked = true;
      return nextState;
    case REMOVE_LIKE_TO_SONG:
      nextState = Object.assign({}, state);
      nextState.songs[action.id].liked = false;
      return nextState;
    default:
      return state;
  }
};

export default songsReducer;

// case ADD_LIKE_TO_SONG:
//   nextState.songs[action.id].liked = true;
//   return nextState;
// case REMOVE_LIKE_TO_SONG:
//   nextState.songs[action.id].liked = false;
//   return nextState;
