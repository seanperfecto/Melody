import { RECEIVE_COMMENT,
         RECEIVE_COMMENTS,
         REMOVE_COMMENT,
         COMMENT_ERRORS,
         CLEAR_COMMENT_ERRORS,
         CLEAR_COMMENTS } from '../actions/comment_actions';

const _initialState = {
  comments: '',
  errors: []
};

const commentsReducers = (state = _initialState, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_COMMENTS:
      return action.comments;
    case RECEIVE_COMMENT:
      return Object.assign(newState, {comments: action.comment});
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
