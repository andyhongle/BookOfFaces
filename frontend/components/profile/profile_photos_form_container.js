import { connect } from 'react-redux';
import ProfilePhotoForm from './profile_photos_form';
import { updateUserPhotos } from '../../actions/session_actions';
import { withRouter } from "react-router";

const mSTP = (state, ownProps) => ({
    currentUser: state.entities.users[state.session.id],
    profileUser: state.entities.users[ownProps.match.params.userId]
})

const mDTP = (dispatch) => ({
    updateUserPhotos: (user) => dispatch(updateUserPhotos(user))
})

export default withRouter(connect(mSTP, mDTP)(ProfilePhotoForm))