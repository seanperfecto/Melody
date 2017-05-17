import { RECEIVE_ERRORS,
         RECEIVE_CURRENT_USER,
         CLEAR_ERRORS } from '../actions/session_actions';



const _initialState = {
    currentUser: null,
    errors: []
};

const sessionReducer = (state = _initialState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        currentUser: action.currentUser,
        errors: []
      };
    case RECEIVE_ERRORS:
      const errors = {errors: action.errors};
      return Object.assign({}, state, errors);
    case CLEAR_ERRORS:
      return Object.assign({}, _initialState);
    default:
      return state;
  }
};

export default sessionReducer;
