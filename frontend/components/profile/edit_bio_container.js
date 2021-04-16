import { connect } from 'react-redux';
import { updateUserInfo } from '../../actions/session_actions';
import BioForm from './edit_bio';
import { fetchAllUsers } from '../../actions/session_actions';

const mSTP = (state, ownProps) => ({
    profileUser: state.entities.users[ownProps.match.params.userId]
})

const mDTP = (dispatch) => ({
    updateUserInfo: (user) => dispatch(updateUserInfo(user)),
    fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(mSTP, mDTP)(BioForm)