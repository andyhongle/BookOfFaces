import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className='navbar-container'> 
                <div className='nav-left'>
                    <a href="/"><img className='fb-logo' src={window.faviconIconURL}/></a>
                    <form className='search-bar-form'>
                        <input className='search-bar' type="text" placeholder='Search BookOfFaces coming soon!'/>
                    </form>
                </div>
                <div className='nav-middle'>
                    <div className='shortcuts-container'>
                        <div className='shortcut-title-image'>
                            <div className='linkedin-container'>
                                <img className='linkedin-image' src={window.linkedinIconURL} />
                                <a className='shortcut-text' href="https://www.linkedin.com/in/andyhongle/">LinkedIn</a>
                            </div>
                            <div className='github-container'>
                                <img className='github-image' src={window.githubIconURL} />
                                <a className='shortcut-text' href="https://github.com/andyhongle/BookOfFaces">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='nav-right'>
                    <button className='nav-profile-button'>
                        <a className='nav-link' href={`#/users/${this.props.currentUser.id}`}>
                            <img className='nav-bar-picture' src={this.props.currentUser.profile_photo} />
                            <div className='nav-first-name'>{this.props.currentUser.first_name}</div> 
                        </a>
                    </button>

                    <div className='messages-container'>
                        <button className='nav-messages-button'>
                            <img src={window.messagesIconURL} />
                        </button>
                        <div className='drop-down-messages-content'>
                            <h2>Messages</h2>
                            <h3>No new messages</h3>
                        </div>
                    </div>

                    <div className='notifications-container'>
                        <button className='nav-notifications-button'>
                            <img src={window.notificationsIconURL} />
                        </button>
                        <div className='drop-down-notifications-content'>
                            <h2>Notifications</h2>
                            <h3>No new notifications</h3>
                        </div>
                    </div>

                   <div className='nav-logout-container'>
                        <button className='nav-logout-arrow'>
                            <img className='drop-down-arrow' src={dropdownarrowURL}/>
                        </button>
                        <div className='nav-logout-arrow-content'>
                            <div className='logout-button' onClick={this.props.logout}>Log out</div>
                        </div>
                   </div> 
                </div>
            </div>
        )
    }
}


export default NavBar;