import { RECEIVE_USER, USER_ERRORS, RECEIVE_USER_SONGS } from '../actions/user_actions';
import { ADD_LIKE_TO_SONG, REMOVE_LIKE_TO_SONG } from '../actions/user_actions';

const _initialState = {
 user: null,
 songs: null,
 errors: []
};

const userReducer = (state = _initialState, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_USER:
      return Object.assign(nextState, {user: action.user});
    case USER_ERRORS:
      const errors = {errors: action.errors};
      return Object.assign(nextState, errors);
    case RECEIVE_USER_SONGS:
      const songs = {songs: action.songs};
      return Object.assign(nextState, songs);
    default:
      return state;
  }
};

export default userReducer;





// case ADD_LIKE_TO_SONG:
// nextState.songs[action.id].liked = true;
// return nextState;
// case REMOVE_LIKE_TO_SONG:
// nextState.songs[action.id].liked = false;
// return nextState;
