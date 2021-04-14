import Profile from './profile';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/session_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
});

const mDTP = (dispatch) => ({
   updateUser: (user) => dispatch(updateUser(user))
});

export default connect(mSTP, mDTP)(Profile)