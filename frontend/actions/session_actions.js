import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


// regular action creators
export const receiveCurrentUser = (currentUser) => {
    return {type: RECEIVE_CURRENT_USER, currentUser};
};

export const logoutCurrentUser = () => {
    return {type: LOGOUT_CURRENT_USER};
};

// errors is an array
export const receiveErrors = (errors) => {
    return { type: RECEIVE_SESSION_ERRORS, errors };
};

// thunk action creators

export const login = (user) => (dispatch) => (
    SessionAPIUtil.login(user)
    .then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (err) => dispatch(receiveErrors(err.responseJSON)))
)
window.login = login

export const logout = () => (dispatch) => (
    SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
)

export const signup = (user) => (dispatch) => (
    SessionAPIUtil.signup(user)
    .then((currentUser) => dispatch(receiveCurrentUser(currentUser)),
    (err) => dispatch(receiveErrors(err.responseJSON)))
   
)
window.signup = signup







