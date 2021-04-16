import { RECEIVE_FRIENDSHIP, DELETE_FRIENDSHIP } from '../actions/friendship_actions';
import { RECEIVE_CURRENT_USER, RECEIVE_USER } from '../actions/session_actions';
export const friendshipReducer = (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_FRIENDSHIP:
            newState[action.friendship.id] = action.friendship;
            return newState;
        case RECEIVE_CURRENT_USER:
            if (action.currentUser.friendships) {
                Object.values(action.data.friendships).forEach(friendship => {
                    newState[friendship.id] = friendship
                })
            }
        return newState;
        case RECEIVE_USER:
            if (action.currentUser.friendships) {
                Object.values(action.data.friendships).forEach(friendship => {
                    newState[friendship.id] = friendship
                })
            }
        return newState;
        default: 
            return state;
    }
}