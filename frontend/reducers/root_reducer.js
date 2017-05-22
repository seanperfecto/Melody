import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import songsReducer from './songs_reducer';
import songDetailReducer from './song_detail_reducer';
import playerReducer from './player_reducer';


const rootReducer = combineReducers({
  session: sessionReducer,
  songs: songsReducer,
  songDetail: songDetailReducer,
  player: playerReducer
});

export default rootReducer;
