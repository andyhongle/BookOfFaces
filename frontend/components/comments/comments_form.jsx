import React from 'react';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {body: '', author_id: '', post_id: null}

        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    
    
    handleSubmit(e) {
        e.preventDefault();
        let newComment = Object.assign({}, this.state);
        newComment['post_id'] = this.props.post.id;
        newComment['author_id'] = this.props.currentUser.id
        this.props.createComment(newComment);
        this.setState({body: ''});
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
        return (
            <div className='create-comment-container'>
                <img className='create-comment-pic' src={this.props.currentUser.profile_photo}/>
                <form onSubmit={this.handleSubmit} className='create-comment-form'>
                    <input type="text"
                        value={this.state.body}
                        onChange={this.update('body')}
                        placeholder='Write a comment...'
                    />
                </form>
            </div>
        )
    }
}

export default CommentForm;