import React from 'react';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignUpFormContainer from '../session_form/signup_form_container';

const Greeting = (props) => {
    const sessionLinks = () => (
        <nav className='login-signup'>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </nav>
    );

    const personalGreeting = () => (
        <div className='header-group'>
            <h2 className='header-name'>{props.currentUser.username}</h2>
            <button className='header-button' onClick={props.logout}>Log Out</button>
        </div>
    );
    return props.currentUser ? personalGreeting() : sessionLinks();
    
};

export default Greeting;