import React from 'react';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.showEducation = this.showEducation.bind(this);
        this.handleProfilePhoto = this.handleProfilePhoto.bind(this);
        this.handleProfilePhotoSubmit = this.handleProfilePhotoSubmit.bind(this);

        this.state = {bio: this.props.currentUser.bio,
                    education: this.props.currentUser.education,
                    hometown: this.props.currentUser.hometown,
                    profilePhotoURL: this.props.currentUser.profilePhotoURL,
                    coverPhotoURL: this.props.currentUser.currentPhotoURL,
                    first_name: this.props.currentUser.first_name}
    }

    showEducation () {
        if (this.props.currentUser.education !== '') {
            return (<div>Works at:</div>);
        }
    }   

    // handleCoverPhoto(e) {
    //     this.setState({coverPhotoURL: e.currentTarget.files[0]})
    // }

    handleProfilePhoto(e) {
        const file = e.currentTarget.files[0]
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ profilePhotoURL: fileReader.result})
        }
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleProfilePhotoSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('user[profile_photo]', this.state.profilePhotoURL)
        this.props.updateUser(formData)
    }

    render() {
    console.log(this.state)
       return (
          
           <div className='profile-container'>

               <div className='profile-picture'>
                    <form onSubmit={this.handleProfilePhotoSubmit}>
                        <input type="file" onChange={this.handleProfilePhoto}/>
                        <button>Submit</button>
                    </form>
                    <img src={this.state.profilePhotoURL}/>
               </div>

               <div className='bio-container'>
                   <h2 className='profile-name'>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</h2>
                   <h3 className='profile-name'>{this.props.currentUser.bio} BIO TEST</h3>
                   <div className='edit-profile'>
                       <button className='edit-profile-button'><a href={`#/users/${this.props.currentUser.id}/edit-profile`}>Edit Profile</a></button>
                   </div>
               </div>
               
               <div className='intro-container'>
                    <div className='education'>
                        {this.props.showEducation}
                    </div>
                   <div className='hometown'>

                   </div>
                   <div className='relationship'>

                   </div>

               </div>

               <div className='friends-container'>

               </div>

               <div >

               </div>



               


           </div>
       )
    }
};

export default Profile;