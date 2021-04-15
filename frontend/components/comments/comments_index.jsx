import React from 'react';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props)


    }

    componentDidMount() {
        this.props.fetchComments();
    }

    render() {
        return (
            <ul>
                {this.props.comments.map(comment => {
                    let createdTime = new Date(comment.created_at).toDateString()
                    // let commentOwner = this.props.users[comment.author_id]
                    return (
                        <div>
                            <li className='comment-item' key={comment.id}>
                                <img className='comment-pic'  />
                                <div className='name-body-container'>
                                    <div className='comment-owner-name'>
                                        Post Owner Name
                                    </div>
                                    <div className='comment-owner-body'>
                                        {comment.body}
                                    </div>
                                </div>
                                <div className='edit-delete-container'>
                                    <button className='edit-delete-comment-button'>...</button>
                                    <div className='edit-delete-comment-content'>
                                        <div className='comment-delete' onClick={() => this.props.deleteComment(comment)}>Delete Comment</div>
                                    </div>
                                </div>
                               
                            </li>
                            <div className='created-comment'>{createdTime}</div>
                        </div>
                    )
                })}
            </ul>
        )
    }
}

export default CommentIndex;