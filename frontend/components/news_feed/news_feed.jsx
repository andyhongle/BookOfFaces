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
                <div className='top-row-container'>
                    <div className='shortcuts-container'>
                        <div className='shortcut-title-image'>
                            <div className='linkedin-container'>
                                <img className='linkedin-image' src={window.linkedinIconURL} />
                                <a className='shortcut-text' href="#">LinkedIn</a>
                            </div>
                            <div className='github-container'>
                                <img className='github-image' src={window.githubIconURL} />
                                <a className='shortcut-text' href="https://github.com/andyhongle/BookOfFaces">Github</a>
                            </div> 
                        </div>
                    </div>
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
                <PostIndexContainer />
            </div>
        )
    }
};

export default NewsFeed;