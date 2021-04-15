import { RECEIVE_COMMENT, REMOVE_COMMENT, RECEIVE_COMMENTS } from '../actions/comment_actions';
import { RECEIVE_ALL_POSTS } from '../actions/post_actions';

const commentsReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state)
    switch (action.type) {
        case RECEIVE_COMMENT:
            nextState[action.comment.id] = action.comment
            return nextState;
        case REMOVE_COMMENT:
            delete nextState[action.comment.id];
            return nextState;
        case RECEIVE_ALL_POSTS:
            if (action.posts.comments) {
                Object.values(action.posts.comments).forEach(comment => {
                    nextState[comment.id] = comment
                })
            }
        case RECEIVE_COMMENTS:
            if (action.comments) {
                Object.values(action.comments).forEach(comment => {
                    nextState[comment.id] = comment
                })
            }
            return nextState;
        default: 
            return state;
    }
}

export default commentsReducer;