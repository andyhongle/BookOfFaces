import React from 'react';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '', first_name: '',
                    last_name: '', email: '', gender: '', birthday: ''}

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
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
        // console.log(this.props.errors)
        return (
            <ul>  
                {this.props.errors.map((error, i) => (
                    <li className='signup-error' key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className='signup-page'>

                <div className='greeting-left'>
                    <h1 className='greeting-logo'><a href="/">BookOfFaces</a></h1>
                    <h2 className='greeting-bio'>Connect with friends and the world around you on BookOfFaces.</h2>
                </div>

                <div className="signup-form-container">
                    <form onSubmit={this.handleSubmit} className="signup-form-box">
                
                        {this.renderErrors()}
                        <div className="signup-form">
                            <input type="text"
                                    value={this.state.first_name}
                                    onChange={this.update('first_name')}
                                    className="signup-input"
                                    placeholder='First Name'
                                />
                        
                            <input type="text"
                                    value={this.state.last_name}
                                    onChange={this.update('last_name')}
                                    className="signup-input"
                                    placeholder='Last Name'
                                />
                        
                            <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="signup-input"
                                    placeholder='Email'
                                />
                        
                            <input type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    className="signup-input"
                                    placeholder='Username'
                                />
                    
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="signup-input"
                                    placeholder='Password'
                                />

                            <div id='genders'>
                                <label className='signup-parameter'>Male
                                <input id='radio-signup' type="radio"
                                        value="Male"
                                        onChange={this.update('gender')}
                                        className="signup-input"
                                        name='gender'

                                    />
                                </label>

                                <label className='signup-parameter'>Female
                                <input id='radio-signup1' type="radio"
                                        value="Female"
                                        onChange={this.update('gender')}
                                        className="signup-input"
                                        name='gender'
                                    />
                                </label>

                                <label className='signup-parameter'>Other
                                <input id='radio-signup2' type="radio"
                                        value="Other"
                                        onChange={this.update('gender')}
                                        className="signup-input"
                                        name='gender'
                                    />
                                </label>
                            </div>

                            <input type="date" id="birthday" name="birthday" onChange={this.update('birthday')}></input>

                            <button className='signup-submit'>Sign Up</button>
                            <div className='instead'> Already have an account? </div> <a href="#/login">Login</a>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default SignUpForm;