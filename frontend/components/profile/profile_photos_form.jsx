import React from 'react';

class ProfilePhotoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoFile: null,
            photoUrl: null
        };
    
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoUrl: fileReader.result }, this.handleSubmit);
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }

       
        
    }

    handleSubmit(e) {
       
        const formData = new FormData();
        if (this.state.photoFile) {
            formData.append('user[profile_photo]', this.state.photoFile);
        }
        this.props.updateUserPhotos(formData);
        this.setState({photoFile: null, photoUrl: null })
    }


    render() {
        let editProfPic = null;
        if (this.props.currentUser.id === this.props.profileUser.id) {
            editProfPic = 
                <form className='profile-photo-form'>
                    <label className='add-profile-photo' htmlFor="file-input">
                        <img className='add-profile-photo-image' src={window.cameraURL} />
                    </label>
                    <input id='file-input' className='profile-photo-input' type="file"
                        onChange={this.handleFile}
                        title=" "
                    />
                </form>
        }
        return (
            <div>{editProfPic}</div>
        )
    }
}

export default ProfilePhotoForm;