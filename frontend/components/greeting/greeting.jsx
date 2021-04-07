import React from 'react';
import { Link } from 'react-router-dom'

const Greeting = (props) => {
    const sessionLinks = () => (
        <nav classname='login-signup'>
            <Link to='/login'>Login</Link>
            <Link to='/signup'>Signup</Link>
        </nav>
    );

    const personalGreeting = () => (
        <div className='header-group'>
            <h2 className='header-name'>{props.currentUser.username}</h2>
            <button classname='header-button' onClick={props.logout}>Log Out</button>
        </div>
    );
    return props.currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;