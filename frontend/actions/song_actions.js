import * as SongApiUtil from '../util/song_api_util';
import * as UserApiUtil from '../util/user_api_util';
import * as LikeApiUtil from '../util/like_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const REMOVE_SONG = 'REMOVE_SONG';
export const SONG_ERRORS = 'SONG-ERRORS';
export const CLEAR_SONG_ERRORS = 'CLEAR_SONG_ERRORS';
export const ADD_LIKE_TO_SONG = 'ADD_LIKE_TO_SONG';
export const REMOVE_LIKE_TO_SONG = 'REMOVE_LIKE_TO_SONG';

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

export const songErrors = errors => {
  return ({
    type: SONG_ERRORS,
    errors
  });
};

export const clearSongErrors = () => ({
  type: CLEAR_SONG_ERRORS,
  errors: []
});

export const addLikeToSong = (id) => {
  return ({
    type: ADD_LIKE_TO_SONG,
    id
  });
};

export const removeLikeToSong = (id) => ({
  type: REMOVE_LIKE_TO_SONG,
  id
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

export const updateSong = (songId, song) => dispatch => {
  return SongApiUtil.updateSong(songId, song).then(_song =>
    dispatch(receiveSong(_song)),
    error => dispatch(songErrors(error.responseJSON))
  );
};

export const createSong = song => dispatch => {
  return SongApiUtil.createSong(song).then(_song =>
    dispatch(receiveSong(_song)),
    error => dispatch(songErrors(error.responseJSON))
  );
};

export const deleteSong = id => dispatch => (
  SongApiUtil.deleteSong(id).then((song) => (
    dispatch(removeSong(song))
  ))
);

export const fetchPlayerSongsByUser = id => dispatch => {
  UserApiUtil.fetchSongsByUser(id).then(songs => (
    dispatch(receiveSongs(songs))
  ));
};

export const createLike = songId => dispatch => {
  return LikeApiUtil.createLike(songId).then(() => (
    dispatch(addLikeToSong(songId)))
  );
};


export const deleteLike = songId => dispatch => (
  LikeApiUtil.deleteLike(songId).then(() => (
    dispatch(removeLikeToSong(songId))
  ))
);

export const fetchLikedSongsByUser = () => dispatch => (
  UserApiUtil.fetchLikedSongsByUser().then(songs=> (
    dispatch(receiveSongs(songs))
  ))
);
