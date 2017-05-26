export const createLike = song_id => {
  return $.ajax({
    method: 'post',
    url: `api/likes`,
    data: {like: {'song_id': song_id}}
  });
};

export const deleteLike = song_id => {
  return $.ajax({
    method: 'delete',
    url: `/api/likes/${song_id}`,
    data: {like: {'song_id': song_id}}
  });
};
