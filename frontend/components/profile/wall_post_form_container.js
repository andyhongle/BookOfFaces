import { connect } from 'react-redux';
import { createPost } from '../../actions/post_actions';
import WallPostForm from './wall_post_form';
import { withRouter } from "react-router";

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    profileUser: state.entities.users[ownProps.match.params.userId]
})

const mDTP = (dispatch) => ({
    createPost: (post) => dispatch(createPost(post))
})

export default withRouter(connect(mSTP, mDTP)(WallPostForm))