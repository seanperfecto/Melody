export const createLike = song_id => {
  console.log(song_id);
  return $.ajax({
    method: 'post',
    url: `api/likes`,
    data: song_id
  });
};

export const deleteLike = song_id => {
  return $.ajax({
    method: 'delete',
    url: `/api/likes/${song_id}`
  });
};
