import React, { Component } from 'react';
import { Link , withRouter } from 'react-router-dom';

class ProfileShowPage extends Component {
  render() {
    return (
      <div className="profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">{this.props.userToView.name}'s Profile Page</h1>
              <form>
                <img src={this.props.userToView.img_url} alt="profile"/>
                <div className="form-group">
                  <input type="text" className="form-control form-control-lg" value={this.props.userToView.location} placeholder="Location" name="location" disabled/>
                </div>
                <div>
                  <h2 className="ProfileShowPage__owned-games">Games I Own:</h2>
                  {this.props.userToViewBoardgames.map((game, index) => 
                    <div className="ProfileShowPage__container-box" key={index}>
                      <Link to={`/boardgames/${game.id}`}> 
                      <img className="cards" src={game.img_url} key={index} alt="boardgame"/> 
                      </Link>
                      <p className="ProfileShowPage__game-title">{game.title}</p>
                    </div>
                  )}
                </div>
                {this.props.user.id == this.props.userToView.id ? <Link to="/profile/:id/edit">
                  <button type="submit" className="btn btn-info btn-block mt-4">Edit My Profile</button>
                </Link> : <div></div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(ProfileShowPage);