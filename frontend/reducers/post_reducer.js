import { RECEIVE_ALL_POSTS } from '../actions/post_actions';
import { RECEIVE_POST } from '../actions/post_actions';
import { REMOVE_POST } from '../actions/post_actions';
import { CLEAR_POSTS } from '../actions/post_actions';

const postsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_POSTS:
            if (action.posts.posts){
                Object.values(action.posts.posts).forEach(post => {
                    newState[post.id] = post
                });
            }
            return newState
        case RECEIVE_POST:
            newState[action.post.id] = action.post
            return newState
        case REMOVE_POST:
            delete newState[action.postId]
            return newState;
        case CLEAR_POSTS:
            return {};
        default: 
            return state;
    }
}


export default postsReducer