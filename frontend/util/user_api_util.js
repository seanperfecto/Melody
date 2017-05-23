export const fetchSong = id => (
  $.ajax({
    method: 'get',
    url: `/api/users/${id}`
  })
);

export const updateSong = (userId, formData) => (
  $.ajax({
    method: 'patch',
    url: `/api/users/${userId}`,
    processData: false,
    contentType: false,
    data: formData
  })
);
