import * as SongApiUtil from '../util/song_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';
export const SONG_ERRORS = 'SONG-ERRORS';
export const CLEAR_SONG_ERRORS = 'CLEAR_SONG_ERRORS';

// sync actions
export const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

export const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const removeSong = song => ({
  type: REMOVE_SONG,
  song
});

export const songErrors = errors => ({
  type: SONG_ERRORS,
  errors
});

export const clearSongErrors = () => ({
  type: CLEAR_SONG_ERRORS,
  errors: []
});

// async actions
export const fetchSongs = () => dispatch => (
  SongApiUtil.fetchSongs().then(songs => (
    dispatch(receiveSongs(songs))
  ))
);

export const fetchSong = id => dispatch => (
  SongApiUtil.fetchSong(id).then(song => (
    dispatch(receiveSong(song))
  ))
);

export const updateSong = song => dispatch => {
  return SongApiUtil.updateSong(song).then(
    _song => dispatch(receiveSong(_song))),
    error => dispatch(songErrors(error.responseJSON));
};

export const createSong = song => dispatch => {
  return SongApiUtil.createSong(song).then(_song => (
    dispatch(receiveSong(_song)),
    error => dispatch(songErrors(error.responseJSON))
  ));
};

export const deleteSong = id => dispatch => (
  SongApiUtil.deleteSong(id).then(() => (
    dispatch(receiveSong(null))
  ))
);
