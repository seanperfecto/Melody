import {
  RECEIVE_SONG,
  REMOVE_SONG
} from '../actions/song_actions';

const defaultSong = {
  title: '',
  description: '',
  user_id: 0,
  image_url: '',
  track_url: '',
  user: ''
};

const songDetailReducer = (state = defaultSong, action) => {
  Object.freeze(state);
  switch(action.type){

    default:
      return state;
  }
};

export default songDetailReducer;
