import { connect } from 'react-redux';
import WallCommentForm from './wall_comments_form';
import { createComment } from '../../actions/comment_actions';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    wallPost: state.entities.posts[ownProps.wallPost.id]
})


const mDTP = (dispatch) => ({
    createComment: (comment) => dispatch(createComment(comment))
})

export default connect(mSTP, mDTP)(WallCommentForm)