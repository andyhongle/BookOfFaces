import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', first_name: '',
                    last_name: '', email: '', gender: ''}

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit} className="signup-form-box">
                    <br />
                    {this.renderErrors()}
                    <div className="signup-form">
                        <label>First name
                        <input type="text"
                                value={this.state.first_name}
                                onChange={this.update('first_name')}
                                className="signup-input"
                            />
                        </label>
                        <label>Last name
                        <input type="text"
                                value={this.state.last_name}
                                onChange={this.update('last_name')}
                                className="signup-input"
                            />
                        </label>
                        <br/>

                        <label>Email
                        <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="signup-input"
                            />
                        </label>

                        <label>Username:
                        <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="signup-input"
                            />
                        </label>
                        <br />
                        <label>Password:
                             <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="signup-input"
                            />
                        </label>

                        <label>Gender:
                             <input type="text"
                                value={this.state.gender}
                                onChange={this.update('gender')}
                                className="signup-input"
                            />
                        </label>

                        
                        <br />
                        <input className="signup-submit" type="submit" value='Sign Up' />
                    </div>
                </form>
            </div>
        );
    }
}

export default SignUpForm;