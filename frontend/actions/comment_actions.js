import * as CommentAPIUtil from '../util/comment_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT'
export const REMOVE_COMMENT = 'REMOVE_COMMENT'


export const receiveComments = (comments) => {
    return ({
        type: RECEIVE_COMMENTS,
        comments
    })
}

export const receiveComment = (comment) => {
    return ({
        type: RECEIVE_COMMENT,
        comment
    })
}

export const removeComment = (comment) => {
    return ({
        type: REMOVE_COMMENT,
        comment
    })
}


export const createComment = (comment) => (dispatch) => {
    return (
        CommentAPIUtil.createComment(comment)
        .then(comment => dispatch(receiveComment(comment)))
    )
}

export const deleteComment = (comment) => (dispatch) => {
    return (
        CommentAPIUtil.deleteComment(comment.id)
            .then(() => dispatch(removeComment(comment)))
    )
}

export const updateComment = (comment) => (dispatch) => {
    return (
        CommentAPIUtil.updateComment(comment)
        .then((comment) => dispatch(receiveComment(comment)))
    )
}

export const fetchComments = () => dispatch => {
    return (
        CommentAPIUtil.fetchComments()
        .then((comments) => dispatch(receiveComments(comments)))
    )
}