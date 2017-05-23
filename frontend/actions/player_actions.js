export const RECEIVE_CURRENT_TIME_BY_POS = 'RECEIVE_CURRENT_TIME_BY_POS';
export const RECEIVE_PLAY_PAUSE_SONG_FROM_AUDIO
  = 'RECEIVE_PLAY_PAUSE_SONG_FROM_AUDIO';
export const RECEIVE_PLAY_PAUSE_SONG = 'RECEIVE_PLAY_PAUSE_SONG';
export const STOP_CURRENT_SONG = 'STOP_CURRENT_SONG';
export const RECEIVE_NEW_CURRENT_TIME = 'RECEIVE_CURRENT_TIME';


export const receiveCurrentTimeByPos = (currentPos) => ({
    type: RECEIVE_CURRENT_TIME_BY_POS,
    currentPos
});

export const receivePlayPauseSongFromAudio = (paused) => ({
    type: RECEIVE_PLAY_PAUSE_SONG_FROM_AUDIO,
    paused
});

export const receivePlayPauseSong = (song) => ({
    type: RECEIVE_PLAY_PAUSE_SONG,
    song
});

export const stopCurrentSong = () => ({
    type: STOP_CURRENT_SONG,
});

export const receiveCurrentTime = (newCurrentTime) => ({
  type: RECEIVE_NEW_CURRENT_TIME,
  newCurrentTime
});

export const playPauseSong = (song) => (dispatch) => {
  return dispatch(receivePlayPauseSong(song));
};

export const playPauseSongFromAudio = () => (dispatch) => {
  return dispatch(receivePlayPauseSongFromAudio());
};
