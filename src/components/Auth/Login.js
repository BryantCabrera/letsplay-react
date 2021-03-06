import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: '',
        password: '',
        authMessage: ''
    }
    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit = async (e) => {
        this.setState({
            authMessage: ''
        });

        e.preventDefault();
        
        const loggedUser = {
            email: this.state.email,
            password: this.state.password
        };

        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users/login`, {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify(loggedUser),
                headers: {
                'Content-Type': 'application/json'
                }
            });

            if(!response.ok) {
                throw Error()
            }

            const parsedResponse = await response.json();
            if (parsedResponse.id) {
                this.props.loginUser(parsedResponse);
                this.props.history.push(`/profile/${parsedResponse.id}`);
            } else {
                this.setState({
                    authMessage: parsedResponse
                });
            }

        } catch (err) {
            console.log(err, ' this is error from Login.js');
        }
    }

  render() {
    return (
        <div className="login">
            <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Log In</h1>
                {this.state.authMessage ?  <p className="lead text-center">{this.state.authMessage}</p> : <p className="lead text-center">Ready to Play?</p>}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={this.state.email} onChange={this.onChange} />
                    </div>
                    <div className="form-group">
                    <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={this.state.password} onChange={this.onChange}/>
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                </form>
                </div>
            </div>
            </div>
        </div>
    )
  }
}

export default Login;