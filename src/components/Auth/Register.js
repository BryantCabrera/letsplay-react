import React, { Component } from 'react';

class Register extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    verify_password: '',
  }

  onChange = (e) => {
      this.setState({
        [e.target.name] : e.target.value
      });
    }

  onSubmit = async (e) => {
      e.preventDefault();

      const newUser = {
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        verify_password: this.state.verify_password
      };

      try {
        const response = await fetch('http://localhost:8000/api/v1/users', {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(newUser),
          headers: {
            'Content-Type': 'application/json'
          }
        });

        if(!response.ok) {
          throw Error()
        }

        const parsedResponse = await response.json();

        if (parsedResponse.id){
          this.props.loginUser(parsedResponse);
          this.props.history.push(`/profile/${parsedResponse.id}/edit`);
        }

      } catch (err) {
        console.log(err, ' this is error from Registers');
      }
    }   

  render() {
    return (
      <div className="register">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Register</h1>
              <p className="lead text-center">Create your Let's Play! account</p>
              <form onSubmit={this.onSubmit}>
                <div className="form-group">
                  <input type="text" 
                    className="form-control form-control-lg"
                    placeholder="Username" 
                    name="name" 
                    value={this.state.name} 
                    onChange={this.onChange} />

                </div>
                <div className="form-group">
                  <input type="email" 
                    className="form-control form-control-lg"
                    placeholder="Email Address" 
                    name="email" 
                    value={this.state.email} 
                    onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <input type="password" 
                    className="form-control form-control-lg"
                    placeholder="Password" 
                    name="password" 
                    value={this.state.password}
                    onChange={this.onChange} />
                </div>
                <div className="form-group">
                  <input type="password" 
                  className="form-control form-control-lg"
                  placeholder="Confirm Password" 
                  name="verify_password"
                  value={this.state.verify_password} 
                  onChange={this.onChange} />
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

export default Register;
