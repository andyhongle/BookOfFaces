import { connect } from 'react-redux';
import WallComments from './wall_comments';
import { fetchPosts } from '../../actions/post_actions';
import { deleteComment, updateComment, fetchComments } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => {
    let comments = [];
    Object.values(state.entities.comments).forEach(comment => {
        if (comment.post_id === ownProps.wallPost.id) {
            comments.push(comment)
        }
    })
    return ({
        comments: comments,
        currentUser: state.entities.users[state.session.id]
    })
}

const mDTP = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchComments: () => dispatch(fetchComments()),
    deleteComment: (comment) => dispatch(deleteComment(comment)),
    updateComment: (comment) => dispatch(updateComment(comment))
})

export default connect(mSTP, mDTP)(WallComments)