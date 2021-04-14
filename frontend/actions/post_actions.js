import * as PostApiUtil from '../util/post_api_util';
import { receiveErrors } from './session_actions'

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';
export const CLEAR_POSTS = 'CLEAR_POSTS';

// regular action creators
export const receiveAllPosts = posts => ({
    type: RECEIVE_ALL_POSTS,
    posts
});

export const receivePost = post => ({
    type: RECEIVE_POST,
    post
});

export const removePost = postId => ({
    type: REMOVE_POST,
    postId
});

export const clearPosts = () => {
    return ({
        type: CLEAR_POSTS
    })
}

// thunk action creators
export const fetchPosts = () => (dispatch) => (
    PostApiUtil.fetchPosts()
        .then(posts => dispatch(receiveAllPosts(posts)),
        err => dispatch(receiveErrors(err)))
);

export const fetchPost = (postId) => (dispatch) => (
    PostApiUtil.fetchPost(postId)
        .then(post => dispatch(receivePost(post)),
            err => dispatch(receiveErrors(err)))
);

export const createPost = (post) => (dispatch) => (
    PostApiUtil.createPost(post)
        .then(post => dispatch(receivePost(post)),
            err => dispatch(receiveErrors(err)))
);

export const updatePost = (post) => (dispatch) => (
    PostApiUtil.updatePost(post)
        .then(post => dispatch(receivePost(post)),
            err => dispatch(receiveErrors(err)))
);

export const deletePost = (postId) => (dispatch) => (
    PostApiUtil.deletePost(postId)
        .then(() => dispatch(removePost(postId)),
            err => dispatch(receiveErrors(err)))
);