import React from 'react';

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.demoLogin = this.demoLogin.bind(this);
    }

    demoLogin() {
        let user = {
            username: 'demo-user',
            password: 'demo-password'
        }
        this.props.login(user);
    }

    render() {
        return (
            <nav className='greeting-page'>
                <div className='greeting-left'>
                    <h1 className='greeting-logo'>BookOfFaces</h1>
                    <h2 className='greeting-bio'>Connect with friends and the world around you on BookOfFaces.</h2>
                </div>
                <div className='greeting-right'>
                    <div className='greeting-buttons'>
                        <button className='login-button'><a href="#/login">Login</a></button>
                        <button className='signup-button'><a href="#/signup">Sign Up</a></button>
                        <button onClick={this.demoLogin} className='demo-button'>Demo User</button>
                    </div>
                    <div className='about-me-buttons'>
                      <a href="https://github.com/andyhongle/BookOfFaces" target="_blank"><img src={window.githubIconURL}/></a>
                      <a href="https://www.linkedin.com/in/andyhongle/" target="_blank"><img src={window.linkedinIconURL} /></a> {/*ADD LINKEDIN URL HERE*/}
                    </div>
                </div>
              
            </nav>
        )
    }
}

export default Greeting;

