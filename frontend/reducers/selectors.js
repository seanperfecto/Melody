import { values } from 'lodash';

export const allSongs = (state) => values(state.songs.songs);
