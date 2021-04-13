import { connect } from 'react-redux';
import { fetchPosts, deletePost, updatePost } from '../../actions/post_actions';
import { fetchAllUsers } from '../../actions/session_actions';
import PostIndex from './posts_index';

const mSTP = (state) => ({
    posts: Object.values(state.entities.posts),
    users: Object.values(state.entities.users)
})

const mDTP = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    deletePost: (postId) => dispatch(deletePost(postId)),
    updatePost: (post) => dispatch(updatePost(post))

})

export default connect(mSTP, mDTP)(PostIndex)