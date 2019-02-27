import React, { Component } from 'react'
import { Link } from 'react-router-dom';


class Landing extends Component {
  render() {
    return (
<div>
    <div className="landing">
    <div className="dark-overlay landing-inner text-light">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <h1 className="display-3 mb-4">Let's Play!
            </h1>
            <p className="lead">Discover new board games and connect with other board game enthusiasts</p>
            <hr />
            
            <Link to="/register" className="btn btn-lg btn-info mr-2">Sign Up</Link>
            <Link to="/boardgames" className="btn btn-lg btn-success">Discover Board Games</Link>
          </div>
        </div>
      </div>  
    </div>
  </div>
</div>
    )
  }
}

export default Landing;