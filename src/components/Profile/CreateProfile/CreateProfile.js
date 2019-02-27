import React, { Component } from 'react'


class CreateProfile extends Component {
    onChange = (e) => {
      this.setState({
          [e.target.name] : e.target.value
      })

  }
    onSubmit = (e) => {
      e.preventDefault();
      console.log('clicked login')
  }
  render() {
    return (
    <div className="profile">
      <div className="container">
        <div className="row">
            <div className="col-md-8 m-auto">
            <h1 className="display-4 text-center">Create Profile</h1>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Username" name="username" onChange={this.onChange}/>
                </div>
                <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Location" name="location" onChange={this.onChange}/>
                </div>
                <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Games I Own" name="ownedGames" onChange={this.onChange}/>
                </div>
                <div className="form-group">
                <input type="text" className="form-control form-control-lg" placeholder="Wishlist" name="playedGames" onChange={this.onChange}/>
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
