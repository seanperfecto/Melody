import * as UserApiUtil from '../util/user_api_util';

export const RECEIVE_USER = 'RECEIVE_USER';
export const USER_ERRORS = 'USER_ERRORS';


export const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

export const userErrors = errors => {
  return ({
    type: USER_ERRORS,
    errors
  });
};

export const fetchUser = id => dispatch => (
  UserApiUtil.fetchUser(id).then(user => (
    dispatch(receiveUser(user))
  ))
);

export const updateUser = (userId, user) => dispatch => {
  return UserApiUtil.updateUser(userId, user).then(_user =>
    dispatch(receiveUser(_user)),
    error => dispatch(userErrors(error.responseJSON))
  );
};
