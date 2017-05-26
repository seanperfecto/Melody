export const fetchUser = id => (
  $.ajax({
    method: 'get',
    url: `/api/users/${id}`
  })
);

export const fetchSongsByUser = id => (
  $.ajax({
    method: 'get',
    url: `/api/user/${id}/songs`
  })
);

export const updateUser = (userId, formData) => (
  $.ajax({
    method: 'patch',
    url: `/api/users/${userId}`,
    processData: false,
    contentType: false,
    data: formData
  })
);

export const fetchLikedSongsByUser = () => (
  $.ajax({
    method: 'get',
    url: `/api/likedsongs`
  })
);
