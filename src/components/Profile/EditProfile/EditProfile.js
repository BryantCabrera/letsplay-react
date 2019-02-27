import React, { Component } from 'react';

class EditProfle extends Component {

    profileUpdate = (e) => {
        e.preventDefault()
        console.log('i am clicked update')
            }
    
    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        });
    }

    render() {
        return (
            <div className="profile">
            <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                <h1 className="display-4 text-center">Edit Profile</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Location" name="location" />
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Profile Picture URL" name="profilepicture" />
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Add Owned Boardgames" name="ownedGames" />
                    </div>
                    <div className="form-group">
                    <input type="text" className="form-control form-control-lg" placeholder="Add Boardgames I've Played" name="playedGames" />
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


export default EditProfle
