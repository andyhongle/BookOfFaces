import React from 'react';

class UsersIndex extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <ul className='user-index-container'>
                <div className='user-index-title'>All Users</div>
                {this.props.users.map(user => {
                    return (
                        <a key={user.id} className='user-show-page' href={`#/users/${user.id}`}>
                            <li  className='user-item'> 
                                <img className='user-index-photo' src={user.profile_photo}/>
                                <div className='user-name'>{user.first_name} {user.last_name}</div>
                            </li>
                        </a>
                        
                    )
                })}
            </ul>
        )
    }
}

export default UsersIndex;