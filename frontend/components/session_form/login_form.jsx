import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' }

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        this.props.clearErrors();
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
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
                    <li className='login-error' key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className='login-page'>

                <div className='greeting-left'>
                    <h1 className='greeting-logo'><a href="/">BookOfFaces</a></h1>
                    <h2 className='greeting-bio'>Connect with friends and the world around you on BookOfFaces.</h2>
                </div>

                <div className="login-form-container">
                    <form onSubmit={this.handleSubmit} className="login-form-box">
                        {this.renderErrors()}
                        <div className="login-form">
                            <input type="text"
                                value={this.state.username}
                                onChange={this.update('username')}
                                className="login-input"
                                placeholder='Username'
                                />
                            <input type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                className="login-input"
                                placeholder='Password'
                                />
                            <button className='login-submit'>Login</button>

                            <div className='instead'> Don't have an account? </div> <a href="#/signup">Sign Up</a>
                        </div>
                    </form>
                 </div>
            </div>
        );
    }
}

export default LoginForm;