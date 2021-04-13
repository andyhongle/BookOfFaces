import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';
import { login, clearErrors } from '../../actions/session_actions';
import LoginForm from './login_form';


const mSTP = (state) => ({
    errors: state.errors.session,
    formType: 'login',
    navLink: <Link to='/signup'>Sign up instead </Link>
});

const mDTP = (dispatch) => ({
    login: (user) => dispatch(login(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mSTP, mDTP)(LoginForm);