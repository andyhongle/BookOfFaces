import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom'
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import NewsFeedContainer from './news_feed/news_feed_container';
import Modal from './session_form/modal';


const App = () => (
    <div className='app'>

        <ProtectedRoute exact path="/" component={NewsFeedContainer} />
        <Switch>
            <AuthRoute exact path="/" component={GreetingContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Redirect to='/' />
        </Switch>
    </div>
);

export default App;