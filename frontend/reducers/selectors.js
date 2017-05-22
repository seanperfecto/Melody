import { values } from 'lodash';

export const allSongs = (state) => values(state.songs.songs);
export const randomEightSongs = (state) => {
    const listSongs = values(state.songs.songs);
    const randSongs = listSongs.sort( () => {
      return (0.5 - Math.random());
    } );
    return randSongs.slice(0,8);
};
