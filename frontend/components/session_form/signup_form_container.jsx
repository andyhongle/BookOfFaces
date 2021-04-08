import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { signup } from '../../actions/session_actions';
import SessionForm from './session_form';
import SignUpForm from './signup_form';

const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'signup',
    navLink: <Link to='/signup'>Login instead </Link>
});

const mDTP = (dispatch) => ({
    signup: (user) => dispatch(signup(user))
});

export default connect(mSTP, mDTP)(SignUpForm);