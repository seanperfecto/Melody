import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import songsReducer from './songs_reducer';
import songDetailReducer from './song_detail_reducer';


const rootReducer = combineReducers({
  session: sessionReducer,
  songs: songsReducer,
  songDetail: songDetailReducer
});

export default rootReducer;
