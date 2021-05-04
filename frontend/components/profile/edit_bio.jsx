import React from 'react';


class BioForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bio: this.props.profileUser.bio, 
            education: this.props.profileUser.education, 
            hometown: this.props.profileUser.hometown, 
            work: this.props.profileUser.work, 
            pronunciation: this.props.profileUser.pronunciation
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.update = this.update.bind(this);
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.updateUserInfo(user).then(() => this.props.history.push(`/users/${this.props.profileUser.id}`));
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    render() {
    
        return (
            <div className='edit-bio-container'>
                <form action={`#/users/${this.props.profileUser.id}`} onSubmit={this.handleSubmit} className='edit-bio-form'>
                    <input type="text"
                        value={this.state.bio}
                        onChange={this.update('bio')}
                        className="about-input"
                        placeholder='Bio'
                    />
                    <input type="text"
                        value={this.state.education}
                        onChange={this.update('education')}
                        className="about-input"
                        placeholder='Education'
                    />
                    <input type="text"
                        value={this.state.hometown}
                        onChange={this.update('hometown')}
                        className="about-input"
                        placeholder='Hometown'
                    />
                    <input type="text"
                        value={this.state.work}
                        onChange={this.update('work')}
                        className="about-input"
                        placeholder='Work'
                    />
                    <input type="text"
                        value={this.state.pronunciation}
                        onChange={this.update('pronunciation')}
                        className="about-input"
                        placeholder='Pronunciation'
                    />
                    <a href={`#/users/${this.props.profileUser.id}`}>
                        <input className='edit-submit' type="submit" value='Submit'/>
                    </a>
                    <button className='go-back-button'>
                        <a href={`#/users/${this.props.profileUser.id}`}>Return To Profile</a>
                    </button>
                </form>
            </div>
        )
    }




};

export default BioForm