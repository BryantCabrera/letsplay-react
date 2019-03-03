import React, { Component } from 'react'

class Login extends Component {
    state = {
        email: '',
        password: '',
    }
    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        
        const loggedUser = {
            email: this.state.email,
            password: this.state.password
        };

        try {
            const response = await fetch('http://localhost:8000/api/v1/users/login', {
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
                <p className="lead text-center">Ready to Play?</p>
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