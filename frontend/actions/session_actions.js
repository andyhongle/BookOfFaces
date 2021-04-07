import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


// regular action creators
export const receiveCurrentUser = (currentUser) => {
    return {type: RECEIVE_CURRENT_USER, currentUser};
};

export const logoutCurrentUser = () => {
    return {type: LOGOUT_CURRENT_USER};
};

// errors is an array
export const receiveErrors = (errors) => {
    return { type: RECEIVE_ERRORS, errors };
};

// thunk action creators

export const login = (user) => (dispatch) => (
    SessionAPIUtil.login(user)
    .then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (err) => dispatch(receiveErrors(err.responseJSON)))
)

export const logout = () => (dispatch) => (
    SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
)

export const signup = (user) => (dispatch) => (
    SessionAPIUtil.signup(user)
    .then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (err) => dispatch(receiveErrors(err.responseJSON)))
)








