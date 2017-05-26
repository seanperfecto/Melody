import {
  RECEIVE_SONG,
  REMOVE_SONG,
  SONG_ERRORS,
  CLEAR_SONG_ERRORS,
  ADD_LIKE_TO_SONG,
  REMOVE_LIKE_TO_SONG
} from '../actions/song_actions';

const defaultSong = {
  id: '',
  title: '',
  description: '',
  user_id: 0,
  image_url: '',
  track_url: '',
  user: '',
  liked: false,
  errors: ''
};

const songDetailReducer = (state = defaultSong, action) => {
  Object.freeze(state);
  let nextState;
  switch(action.type){
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
      const clearErrors = {errors: action.errors};
      return Object.assign({}, state, clearErrors);
    case ADD_LIKE_TO_SONG:
      if (action.id === state.id) {
        return Object.assign({}, state, {liked: true});
      }
    case REMOVE_LIKE_TO_SONG:
      if (action.id === state.id) {
        return Object.assign({}, state, {liked: false});
      }
    default:
      return state;
  }
};

export default songDetailReducer;
