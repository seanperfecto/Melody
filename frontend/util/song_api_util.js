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

export const createSong = formData => {
  return $.ajax({
    method: 'post',
    url: '/api/songs',
    processData: false,
    contentType: false,
    data: formData
  });
};

export const updateSong = (songId, formData) => (
  $.ajax({
    method: 'patch',
    url: `/api/songs/${songId}`,
    processData: false,
    contentType: false,
    data: formData
  })
);

export const deleteSong = id => (
  $.ajax({
    method: 'delete',
    url: `/api/songs/${id}`
  })
);
