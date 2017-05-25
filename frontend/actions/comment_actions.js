import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const COMMENT_ERRORS = 'COMMENT_ERRORS';
export const CLEAR_COMMENT_ERRORS = 'CLEAR_COMMENT_ERRORS';
export const CLEAR_COMMENTS = 'CLEAR_COMMENTS';

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});

export const clearComments = () => ({
  type: CLEAR_COMMENTS,
  comments: []
});

export const commentErrors = errors => {
  return ({
    type: COMMENT_ERRORS,
    errors
  });
};

export const clearCommentErrors = () => ({
  type: CLEAR_COMMENT_ERRORS,
  errors: []
});

export const createComment = comment => dispatch => {
  return CommentApiUtil.createComment(comment).then(_comment =>
    dispatch(receiveComment(_comment)),
    error => dispatch(commentErrors(error.responseJSON))
  );
};

export const deleteComment = id => dispatch => (
  CommentApiUtil.deleteComment(id).then((comment) => (
    dispatch(removeComment(comment))
  ))
);

export const fetchCommentsBySong = id => dispatch => (
  CommentApiUtil.fetchCommentsBySong(id).then((comments) => (
    dispatch(receiveComments(comments))
  ))
);
