import { connect } from 'react-redux';
import CommentForm from './comments_form';
import { createComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    post: state.entities.posts[ownProps.post.id]
})


const mDTP = (dispatch) => ({
    createComment: (comment) => dispatch(createComment(comment))
})

export default connect(mSTP, mDTP)(CommentForm)