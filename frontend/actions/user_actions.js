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

export const fetchSong = id => dispatch => (
  UserApiUtil.fetchSong(id).then(user => (
    dispatch(receiveUser(user))
  ))
);

export const updateSong = (userId, user) => dispatch => {
  return UserApiUtil.updateSong(userId, user).then(_user =>
    dispatch(receiveUser(_user)),
    error => dispatch(userErrors(error.responseJSON))
  );
};
