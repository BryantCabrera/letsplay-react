import React, { Component } from 'react'
import { Link , withRouter } from 'react-router-dom';


 class ProfileShowPage extends Component {
  render() {
    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">{this.props.user.name}'s Profile Page</h1>
              <form>
                <img src=""/>
                  <div className="form-group">
                  <input type="text" className="form-control form-control-lg" value={this.props.user.location} placeholder="Location" name="location" disabled/>
                  </div>
                  <div className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Games I Own" name="ownedGames" disabled/>
                  </div>
                  <div className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Wishlist" name="playedGames" disabled/>
                  </div>
                  <Link to="/profile/:id/edit">
                    <button type="submit" className="btn btn-info btn-block mt-4">Edit My Profile</button>
                  </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ProfileShowPage);