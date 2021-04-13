import React from 'react';
import PostFormContainer from '../posts/posts_form_container'
import PostIndexContainer from '../posts/posts_index_container'

class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='news-feed-container'>
                <PostFormContainer />
                <PostIndexContainer />
            </div>
        )
    }
};

export default NewsFeed;