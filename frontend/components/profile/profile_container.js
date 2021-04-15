import Profile from './profile';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    profileUser: state.entities.users[ownProps.match.params.userId]
});

const mDTP = (dispatch) => ({
   fetchAllUsers: () => dispatch(fetchAllUsers())
});

export default connect(mSTP, mDTP)(Profile)