import { RECEIVE_USER, USER_ERRORS } from '../actions/user_actions';

const _initialState = {
 user: null,
 errors: []
};

const userReducer = (state = _initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch (action.type) {
    case RECEIVE_USER:
      return {user: action.user, errors: []};
    case USER_ERRORS:
      const errors = {errors: action.errors};
      return Object.assign({}, state, errors);
    default:
      return state;
  }
};

export default userReducer;
