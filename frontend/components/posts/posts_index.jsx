import React from 'react';


class PostIndex extends React.Component {
    constructor(props) {
        super(props);
       
        
    }

    componentDidMount() {
        this.props.fetchPosts();
        this.props.fetchAllUsers(); // this IS BROKEN FIX!!!!!!
    }

    render () {
        return (
            <ul>
                {this.props.posts.reverse().map(post => {
                    let createdTime = new Date(post.created_at).toDateString()
                    return (
                        <li className='post-item' key={post.id}>
                            <div className='post-item-header'>
                                <div className='post-item-name-date-image'>
                                    <a href={`#/users/${post.author_id}`}>
                                        <img className='post-owner-image' src={defaultphotoURL} /> {/*FIX IMAGE HERE*/}
                                    </a> 
                                    <div className='post-item-name-date'>
                                        <div className='post-owner'>
                                            <a href={`#/users/${post.author_id}`}>Firstname Lastname</a> 
                                        </div> 
                                        <div className='post-date'>{createdTime}</div>
                                    </div>
                                   
                                </div>
                                <div className='edit-delete-dropdown'>
                                    <button className='edit-delete-button'>...</button>
                                    <div className='edit-delete-dropdown-content'>
                                        <div className='delete-post-button' onClick={() => this.props.deletePost(post.id)}>Delete Post</div>
                                    </div>
                                </div>
                            </div>
                            <div className='post-body'>{post.body}</div>
                            <img className='post-image' src={post.photo}/>
                            <div className='like-comment-buttons'>
                                <button className='like-button'>
                                    <img className='like-icon' src={likeIconURL}/>
                                    <div className='like-text'>Like</div>
                                </button>
                                <button className='comment-button'>
                                    <img className='comment-icon' src={commentIconURL} />
                                    <div className='comment-text'>Comment</div>
                                </button>
                            </div>
                        </li>
                    );
                })}
            </ul>
        );
    }
}

export default PostIndex