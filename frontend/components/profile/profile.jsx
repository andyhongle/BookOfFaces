import React from 'react';
import ProfilePhotoFormContainer from './profile_photos_form_container';
import CoverPhotoFormContainer from './cover_photos_form_container';
import WallPostFormContainer from './wall_post_form_container';
import WallPostContainer from './wall_posts_container';

class Profile extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    render() {
        if (!this.props.profileUser) {
            return null;
        }
        let editButton = null;
        if (this.props.currentUser.id === this.props.profileUser.id) {
            editButton =
            <button className='edit-profile-button'>
                <a className='edit-profile-link' href={`#/users/${this.props.profileUser.id}/edit`}>
                    <img src={editURL} />
                    <div>Edit Profile</div>
                </a>
                </button>
        
        }

       return (
           <div className='profile'>
               <div className='profile-header'>
                   <img className='cover-photo' src={this.props.profileUser.cover_photo} />
                   <div className='profile-picture-button-container'>
                       <img className='profile-photo' src={this.props.profileUser.profile_photo} />
                   </div>
                   <ProfilePhotoFormContainer />
                   <CoverPhotoFormContainer />
                   <div className='profile-name'>{this.props.profileUser.first_name} {this.props.profileUser.last_name}</div>
                   <div className='profile-bio'>{this.props.profileUser.bio}</div>
                   <div className='profile-nav-bar'> 
                        {/* <button className='add-friend-button'>Add Friend</button>  */}
                        {editButton}
                   </div>
               </div>

                <div className='profile-main'>
                    <div className='intro-container'>
                        <div className='intro-text'>Intro</div>
                       <div className='work-container'>
                           <img src={window.workURL}/>
                           <div className='pretext'>Works at</div>
                           <div className='intro-info'>{this.props.profileUser.work}</div>
                       </div>
                       <div className='education-container'>
                           <img src={window.educationURL}/>
                           <div className='pretext'>Studied at</div>
                           <div className='intro-info'>{this.props.profileUser.education}</div>
                        </div>
                       <div className='hometown-container'>
                           <img src={window.hometownURL}/>
                           <div className='pretext'>From</div>
                           <div className='intro-info'>{this.props.profileUser.hometown}</div>
                       </div>
                       <div className='pronunciation-container'>
                           <img src={window.pronunciationURL} />
                           <div className='pretext'>Pronounces name</div>
                           <div className='intro-info'>{this.props.profileUser.pronunciation}</div>
                       </div>
                       
                    </div>
                    <div className='right-wall'>
                       <WallPostFormContainer />
                       <div className='posts-blocker'><div>Posts</div></div>
                       <WallPostContainer/>
    
                    </div>
           
                </div>
           </div>
          
       )
    }
};

export default Profile;