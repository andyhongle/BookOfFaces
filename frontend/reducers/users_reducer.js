import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../actions/session_actions';
import { RECEIVE_USER } from '../actions/session_actions';

// keep track of all users
const usersReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.currentUser.user.id]: action.currentUser.user })
        case RECEIVE_ALL_USERS:
            return action.users
        case RECEIVE_USER:
            return Object.assign({}, state, { [action.user.user.id]: action.user.user })
        default:
            return state;
    }
};

export default usersReducer;