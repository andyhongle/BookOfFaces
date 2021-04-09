import React from 'react';

class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h2> TESTING  {this.props.currentUser.id}</h2>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        )
    }
};

export default NewsFeed;