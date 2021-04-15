import { connect } from 'react-redux';
import ProfilePhotoForm from './profile_photos_form';
import { updateUserPhotos } from '../../actions/session_actions';

const mSTP = (state) => ({
    currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
    updateUserPhotos: (user) => dispatch(updateUserPhotos(user))
})

export default connect(mSTP, mDTP)(ProfilePhotoForm)