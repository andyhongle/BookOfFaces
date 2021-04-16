import React from 'react';
import PostFormContainer from '../posts/posts_form_container'
import PostIndexContainer from '../posts/posts_index_container'
import UsersIndexContainer from './users_index_container';

class NewsFeed extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='news-feed-container'>
                <div className='top-row-container'>
                    <UsersIndexContainer />
                    <PostFormContainer />
                    <div className='events-birthday-container'>
                        <div className='all-birthday-container'>
                            <div className='birthday-container'>
                                <img className='birthday-image' src={window.birthdayURL} />
                                <div className='birthday-title'>Birthdays</div>
                            </div>
                            <div className='birthday-text'>No birthdays today</div>
                        </div>
                        
                        <div className='all-event-container'>
                            <div className='events-container'>
                                <img className='event-image' src={window.eventURL} />
                                <div className='event-title'>Events</div>
                            </div>

                            <div className='event-text'>No upcoming events</div>
                        </div>
                    </div>
                </div>
               
            </div>
        )
    }
};

export default NewsFeed;