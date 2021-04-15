import React from 'react';
import WallCommentsContainer from './wall_comments_container';
import WallCommentFormContainer from './wall_comments_form_container';

class WallPosts extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchAllUsers();
        this.props.fetchPosts();
    }

    render() {  
        return (
            <ul>
                {this.props.wallPosts.reverse().map(wallPost => {
                    let createdTime = new Date(wallPost.created_at).toDateString();
                    let postOwner = this.props.users[wallPost.author_id]
                    return (
                        <li className='wallpost-item' key={wallPost.id}>
                            <div className='post-item-header'>
                                <div className='post-item-name-date-image'>
                                    <a href={`#/users/${wallPost.author_id}`}>
                                        <img className='post-owner-image' src={postOwner.profile_photo} />
                                    </a>
                                    <div className='post-item-name-date'>
                                        <div className='post-owner'>
                                            <a href={`#/users/${wallPost.author_id}`}>{postOwner.first_name} {postOwner.last_name}</a>
                                        </div>
                                        <div className='post-date'>{createdTime}</div>
                                    </div>

                                </div>
                                <div className='edit-delete-dropdown'>
                                    <button className='edit-delete-button'>...</button>
                                    <div className='edit-delete-dropdown-content'>
                                        <div className='delete-post-button' onClick={() => this.props.deletePost(wallPost.id)}>Delete Post</div>
                                    </div>
                                </div>
                            </div>
                            <div className='wallpost-body'>{wallPost.body}</div>
                            <img className='post-image' src={wallPost.photo} />
                            <div className='like-comment-buttons'>
                                <button className='comment-button'>
                                    <img className='comment-icon' src={commentIconURL} />
                                    <div className='comment-text'>Comments</div>
                                </button>
                            </div>
                            <WallCommentsContainer wallPost={wallPost} users={this.props.users}/>
                            <WallCommentFormContainer wallPost={wallPost} users={this.props.users} />
                        </li>
                    );
                })}
            </ul>
        )
    }
};

export default WallPosts;