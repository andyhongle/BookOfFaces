import React from "react";
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom'
import GreetingContainer from './greeting/greeting_container';
import LoginFormContainer from './session_form/login_form_container';
import SignUpFormContainer from './session_form/signup_form_container';
import {AuthRoute, ProtectedRoute} from '../util/route_util';
import NewsFeedContainer from './news_feed/news_feed_container';
import ProfileContainer from './profile/profile_container';
import NavBarContainer from './navbar/navbar_container';
import BioFormContainer from './profile/edit_bio_container';


const App = () => (
    <div className='app'>

        <ProtectedRoute path="/" component={NavBarContainer} />
        <ProtectedRoute exact path="/" component={NewsFeedContainer} />
        
        <Switch>
            <ProtectedRoute exact path="/users/:userId/edit" component={BioFormContainer} />
            <ProtectedRoute exact path="/users/:userId" component={ProfileContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <AuthRoute exact path="/login" component={LoginFormContainer} />
            <AuthRoute exact path="/" component={GreetingContainer} />
            <Redirect to='/' />
        </Switch>
        
    </div>
);

export default App;