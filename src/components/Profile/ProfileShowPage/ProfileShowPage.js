import React from 'react'
import { Link } from 'react-router-dom';


export default function ProfileShowPage() {
  return (
    <div className="profile">
      <div className="container">
        <div className="row">
            <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">ID's Profile Page</h1>
            <form>
               <img src=""/>
                <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Location" name="location"/>
                </div>
                <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Games I Own" name="ownedGames" />
                </div>
                <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Wishlist" name="playedGames"/>
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
