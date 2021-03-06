export const fetchCommentsBySong = id => (
  $.ajax({
    method: 'get',
    url: `api/song/${id}/comments`
  })
);

export const createComment = comment => (
  $.ajax({
    method: 'post',
    url: '/api/comments',
    data: comment
  })
);

export const deleteComment = id => (
  $.ajax({
    method: 'delete',
    url: `/api/comments/${id}`
  })
);
