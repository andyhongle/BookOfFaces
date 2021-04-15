import { connect } from 'react-redux';
import WallPosts from './wall_posts';
import { withRouter } from "react-router";
import { fetchAllUsers } from '../../actions/session_actions';
import { fetchPosts, deletePost, updatePost } from '../../actions/post_actions';

const mSTP = (state, ownProps) => {
    let wallPosts = [];
    Object.values(state.entities.posts).forEach(post => {
        if (post.wall_id === parseInt(ownProps.match.params.userId)) {
            wallPosts.push(post);
        }
        
    })
    return ({
        wallPosts: wallPosts,
        users: state.entities.users
    })
}

const mDTP = (dispatch) => ({
    fetchPosts: () => dispatch(fetchPosts()),
    fetchAllUsers: () => dispatch(fetchAllUsers()),
    deletePost: (postId) => dispatch(deletePost(postId)),
    updatePost: (post) => dispatch(updatePost(post))
})



export default withRouter(connect(mSTP, mDTP)(WallPosts))