import { RECEIVE_COMMENT,
         RECEIVE_COMMENTS,
         REMOVE_COMMENT,
         COMMENT_ERRORS,
         CLEAR_COMMENT_ERRORS,
         CLEAR_COMMENTS } from '../actions/comment_actions';

const _initialState = {
  comments: null,
  errors: []
};

const commentsReducers = (state = _initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      const newComment = {[action.comment.id]: action.comment};
      return Object.assign(newState, {comments: newComment});
    case REMOVE_COMMENT:
      delete newState[action.comment.id];
      return newState;
    case COMMENT_ERRORS:
      return Object.assign(newState, {errors: action.errors});
    case CLEAR_COMMENT_ERRORS:
      return Object.assign(newState, {errors: action.errors});
    case CLEAR_COMMENTS:
      return _initialState;
    default:
      return state;
  }
};

export default commentsReducers;
