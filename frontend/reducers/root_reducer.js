import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import songsReducer from './songs_reducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  songs: songsReducer
});

export default rootReducer;
