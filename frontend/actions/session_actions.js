import * as SessionAPIUtil from '../util/session_api_util';
import * as UserAPIUtil from '../util/user_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS'
export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';


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

export const clearErrors = () => {
    return ({
        type: CLEAR_ERRORS
    })
}

export const receiveUser = (user) => ({
    type: RECEIVE_USER,
    user
})

export const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users
})

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

export const fetchUser = (userId) => (dispatch) => (
    UserAPIUtil.fetchUser(userId)
        .then((user) => dispatch(receiveUser(user)))
)

export const fetchAllUsers = () => (dispatch) => (
    UserAPIUtil.fetchAllUsers()
        .then((users) => dispatch(receiveAllUsers(users)))
)

export const updateUserPhotos = (user) => (dispatch) => (
    UserAPIUtil.updateUserPhotos(user)
        .then((user) => dispatch(receiveUser(user)))
)

export const updateUserInfo = (user) => (dispatch) => (
    UserAPIUtil.updateUserInfo(user)
        .then((user) => dispatch(receiveUser(user)))
)









