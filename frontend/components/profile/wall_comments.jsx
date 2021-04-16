import React from 'react';

class WallComments extends React.Component {
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
                    let editWallComment = null;
                    if (comment.author_id === this.props.currentUser.id) {
                        editWallComment = 
                            <div className='edit-delete-container'>
                                <button className='edit-delete-comment-button'>...</button>
                                <div className='edit-delete-comment-content'>
                                    <div className='comment-delete' onClick={() => this.props.deleteComment(comment)}>Delete Comment</div>
                                </div>
                            </div>
                    }
                    let createdTime = new Date(comment.created_at).toDateString()
                    let commentOwner = this.props.users[comment.author_id]
                    return (
                        <div key={comment.id}>
                            <li className='comment-item'>
                                <img className='comment-pic' src={commentOwner.profile_photo} />
                                <div className='name-body-container'>
                                    <div className='comment-owner-name'>
                                        {commentOwner.first_name} {commentOwner.last_name}
                                    </div>
                                    <div className='comment-owner-body'>
                                        <div>{comment.body}</div>
                                    </div>
                                </div>
                                {editWallComment}
                            </li>
                            <div className='created-comment'>{createdTime}</div>
                        </div>
                    )
                })}
            </ul>
        )
    }
}

export default WallComments;