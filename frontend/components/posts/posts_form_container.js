import { connect } from 'react-redux';
import PostForm from './posts_form';
import { createPost } from '../../actions/post_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session
})

const mDTP = (dispatch) => ({
    createPost: (post) => dispatch(createPost(post))
})

export default connect(mSTP, mDTP)(PostForm);