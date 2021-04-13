import React from 'react';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }



    render() {
        return (
            <div className='navbar-container'> 
                <div className='nav-left'>
                    <a href="/"><img className='fb-logo' src={window.fblogoURL}/></a>
                    <form className='search-bar-form'>
                        <input className='search-bar' type="text" placeholder='   Search BookOfFaces'/>
                    </form>

                </div>
                <div className='nav-right'>
                    <button className='nav-profile-button'>
                        <a className='nav-link' href={`#/users/${this.props.currentUser.id}`}>
                            <img className='nav-bar-picture' src={defaultphotoURL} /> {/*CHANGE IMAGE LATER*/}
                            <div className='nav-first-name'>{this.props.currentUser.first_name}</div> 
                        </a>
                    </button>
                   <div className='nav-logout-container'>
                        <button className='nav-logout-arrow'>
                            <img className='drop-down-arrow' src={dropdownarrowURL}/>
                        </button>
                        <div className='nav-logout-arrow-content'>
                            <div className='logout-button' onClick={this.props.logout}>Logout</div>
                        </div>
                   </div> 
                </div>
            </div>
        )
    }
}


export default NavBar;