import { connect } from 'react-redux';
import { fetchPosts, deletePost, updatePost } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/session_actions';
import PostIndex from './posts_index';
import { withRouter } from "react-router";

const mSTP = (state, ownProps) => ({
    posts: Object.values(state.entities.posts),
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id],
    profileUser: state.entities.users[ownProps.match.params.userId]
})

const mDTP = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    deletePost: (postId) => dispatch(deletePost(postId)),
    updatePost: (post) => dispatch(updatePost(post))

})

export default withRouter(connect(mSTP, mDTP)(PostIndex))