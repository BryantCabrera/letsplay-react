import React, { Component } from 'react'
import { Link , withRouter } from 'react-router-dom';


 class ProfileShowPage extends Component {
  render() {
    console.log(this.props.userBoardgames);

    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">{this.props.user.name}'s Profile Page</h1>
              <form>
                <img src="" alt="profile"/>
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" value={this.props.user.location} placeholder="Location" name="location" disabled/>
                </div>
                <div>
                  <h2>Games I Own</h2>
                  {this.props.userBoardgames.map((game, index) => 
                    <div>
                      {/* make the image a link to boardgame's individual show page */}
                      <img class="card-img-top" src={game.img_url} key={index} alt="boardgame"/> 
                      {/* title of game here */}
                    </div>
                  )}
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