import React from 'React'
import { logoutCurrentUser } from '../../actions/session_actions';

class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2>Hi, newsfeed {this.props.currentUser.id}</h2>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }
};

export default NewsFeed;