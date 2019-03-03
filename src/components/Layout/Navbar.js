import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link 
            className="navbar-brand" to="/">Let's Play
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="mobile-nav">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link 
                    className="nav-link" to="/boardgames"> Boardgames
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                    className="nav-link" to="/profiles"> Profiles
                </Link>
              </li>
            </ul>
          {this.props.loggedUser && this.props.loggedUser.id ? (<ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link 
                    className="nav-link" to="/" onClick={this.props.logoutUser} > 
                    Logout
                </Link>
              </li>
            </ul>) : 
            (<ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link 
                    className="nav-link" to="/register"> 
                    Register
                </Link>
              </li>
              <li className="nav-item">
                <Link 
                    className="nav-link" to="/login">
                    Login
                </Link>
              </li>
            </ul>)   }
          </div>
        </div>
      </nav> 
    </div>
    )
  }
}

export default Navbar;