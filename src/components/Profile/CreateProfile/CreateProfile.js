import React, { Component } from 'react'


class CreateProfile extends Component {
  render() {
    return (
    <div className="profile">
      <div className="container">
        <div className="row">
            <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Create Profile</h1>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Username" name="username" />
                </div>
                <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Location" name="location" />
                </div>
                <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Games I Own" name="ownedGames" />
                </div>
                <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Wishlist" name="playedGames" />
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

export default CreateProfile;
