export const fetchSongs = () => (
  $.ajax({
    method: 'get',
    url: '/api/songs'
  })
);

export const fetchSong = id => (
  $.ajax({
    method: 'get',
    url: `/api/songs/${id}`
  })
);

export const createSong = song => (
  $.ajax({
    method: 'post',
    url: '/api/songs',
    song
  })
);

export const updateSong = song => (
  $.ajax({
    method: 'patch',
    url: `/api/songs/${song.id}`,
    song
  })
);

export const deleteSong = id => (
  $.ajax({
    method: 'delete',
    url: `/api/songs/${id}`
  })
);
