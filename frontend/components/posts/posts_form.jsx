import React from 'react';


class PostForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = { body: '', photoFile: null, photoURL: null};

        this.handleInput = this.handleInput.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
  
    }

    handleInput(e) {
        this.setState({body: e.currentTarget.value});
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({ photoFile: file, photoURL: fileReader.result });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('post[body]', this.state.body);
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
        formData.append('post[wall_id]', this.props.currentUser.id);
        formData.append('post[author_id]', this.props.currentUser.id);
        this.props.createPost(formData);
        this.setState({body: '', photoFile: null, photoURL: null})
    }

    render() {
        return (
                <div className='create-post-container'>
                   
                    <form className='create-post-form' onSubmit={this.handleSubmit}>
                        <div className='create-post-top-row'>
                            <img className='create-post-profile-pic' src={this.props.currentUser.profile_photo}/> 
                            <input className='create-post-text' type="text"
                                value={this.state.body}
                                onChange={this.handleInput}
                                placeholder={` What's on your mind, ${this.props.currentUser.first_name}`}
                            />
                            <label className='add-photo' htmlFor="file-input">
                                <img className='add-photo-image' src={window.addphotoURL} />
                            </label>
                            <input id='file-input' className='create-post-photo' type="file"
                                onChange={this.handleFile}
                                title=" "
                            />
                        </div>

                        <button className='create-post-button'>Post</button>
                    </form>

                 
                </div>
               
         
           
        )
    }
}

export default PostForm;