import * as FriendshipAPIUtil from '../util/friendship_api_util';

export const RECEIVE_FRIENDSHIP = 'RECEIVE_FRIENDSHIP';
export const DELETE_FRIENDSHIP = 'DELETE_FRIENDSHIP';

const receiveFriendship = friendship => {
    return ({
        type: RECEIVE_FRIENDSHIP,
        friendship
    })
}


const deleteFriendship = friendship => {
    return ({
        type: DELETE_FRIENDSHIP,
        friendship
    })
}


export const createFriend = (friendship) => (dispatch) => {
    return (
        FriendshipAPIUtil.createFriendship(friendship)
        .then(friendship => dispatch(receiveFriendship(friendship)))
    )
}


export const deleteFriend = (friendship) => (dispatch) => {
    return (
        FriendshipAPIUtil.deleteFriendship(friendship)
            .then(friendship => dispatch(deleteFriendship(friendship)))
    )
}