import React from 'react';

class CoverPhotoForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoFile2: null,
            photoUrl2: null
        };

        this.handleSubmit2 = this.handleSubmit2.bind(this);
        this.handleFile2 = this.handleFile2.bind(this);
    }

    handleFile2(e) {
        const file2 = e.currentTarget.files[0];
        const fileReader2 = new FileReader();
        
        fileReader2.onloadend = () => {
            this.setState({ photoFile2: file2, photoUrl2: fileReader2.result });
        };
        if (file2) {
            fileReader2.readAsDataURL(file2);
        }
    }

    handleSubmit2(e) {
        e.preventDefault();
        const formData2 = new FormData();
        if (this.state.photoFile2) {
            console.log('hello2', this.state.photoFile2)
            formData2.append('user[cover_photo]', this.state.photoFile2);
            
        }
        this.props.updateUserPhotos(formData2);
        this.setState({ photoFile2: null, photoUrl2: null })
    }


    render() {
        return (
            <form className='cover-photo-form' onSubmit={this.handleSubmit2}>
                <label className='add-cover-photo-button' htmlFor="file-input2">
                    <img className='add-cover-photo-image' src={window.cameraURL}/> 
                    <div className='cover-photo-text'>Cover Photo</div>
                </label>
                <input id='file-input2' className='cover-photo-input' type="file"
                    onChange={this.handleFile2}
                    title=" "
                />
                <button>Submit cover photo</button>
            </form>
        )
    }
}

export default CoverPhotoForm;