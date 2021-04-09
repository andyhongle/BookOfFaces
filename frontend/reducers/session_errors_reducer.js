import { RECEIVE_CURRENT_USER } from '../actions/session_actions'; 
import { RECEIVE_SESSION_ERRORS } from '../actions/session_actions'; 
import { CLEAR_ERRORS } from '../actions/session_actions';

// keeps track of error messages
const sessionErrorsReducer = (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER: // clears errors
            return [];
        case RECEIVE_SESSION_ERRORS: //sets errors to the action's errors
            return action.errors;
        case CLEAR_ERRORS:
            return []
        default:
            return state;
    }
};

export default sessionErrorsReducer;