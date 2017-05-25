import values from 'lodash/values';

export const allSongs = (state) => values(state.songs.songs);
export const allSongsByUser = (state) => values(state);
export const allCommentsBySong = (state) => values(state);
export const randomEightSongs = (state) => {
    const listSongs = values(state.songs.songs);
    const randSongs = listSongs.sort( () => {
      return (0.5 - Math.random());
    } );
    return randSongs.slice(0,8);
};
