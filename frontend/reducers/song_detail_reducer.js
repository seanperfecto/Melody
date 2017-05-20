import {
  RECEIVE_SONG,
  REMOVE_SONG,
  SONG_ERRORS,
  CLEAR_SONG_ERRORS
} from '../actions/song_actions';

const defaultSong = {
  title: '',
  description: '',
  user_id: 0,
  image_url: '',
  track_url: '',
  user: '',
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
      const help = Object.assign({}, state, clearErrors);
      console.log(help);
      return help;
    default:
      return state;
  }
};

export default songDetailReducer;
