import { RECEIVE_ERRORS,
         RECEIVE_CURRENT_USER } from '../actions/session_actions';
import merge from 'lodash/merge';


const _initialState = {
    currentUser: null,
    errors: []
};

const sessionReducer = (state = _initialState, action) => {
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: []
      };
    case RECEIVE_ERRORS:
      const errors = {errors: action.errors};
      return merge({}, state, errors);
    default:
      return state;
  }
};

export default sessionReducer;
