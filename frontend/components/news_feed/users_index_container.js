import { connect } from 'react-redux';
import UsersIndex from './users_index';
import { fetchAllUsers } from '../../actions/session_actions';

const mSTP = (state) => ({
    users: Object.values(state.entities.users)
});

const mDTP = (dispatch) => ({
    fetchAllUsers: () => dispatch(fetchAllUsers())
})

export default connect(mSTP, mDTP)(UsersIndex)