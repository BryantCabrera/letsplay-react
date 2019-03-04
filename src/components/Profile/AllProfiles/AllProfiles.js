import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Searchbar from '../../Searchbar/Searchbar';

class AllProfiles extends Component {
  state = {
    users: []
  }
  componentDidMount () {
    this.getProfiles();
  }

  getProfiles = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/users`, {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if(!response.ok) {
        throw Error()
      }

      const parsedResponse = await response.json();
      this.setState({
        users : parsedResponse.users
      });

    } catch (err) {
      console.log(err, ' This is error from AllProfiles.js');
    }
  }

  clickSearch = (e) => {
    e.preventDefault();
    let filteredUsers = this.state.users.filter(game => game.name.includes(this.state.searchBar));

    this.setState({
      users : filteredUsers
    });
  }

  resetHandler = () => {
    this.getProfiles();
  }

  changeHandler = (e) => {
    this.setState({
      ...this.state,
      [e.target.name] : e.target.value
    });
  }

  render () {
    const { users } = this.state;
    let profile = users.map((user, index) => {
      return (
        <div className="card" style={{width: '15rem'}} key={index}>
          <img className="card-img-top" src={user.img_url} alt="user profile"/>
          <div className="allprofiles_card-body">
            <h5 className="allprofiles__name">{user.name}</h5>
            <p className="allprofiles__email">{user.email}</p>
            <p className="allprofiles__location">Location: {user.location}</p>
            <Link to={`/profile/${user.id}`} className="btn btn-primary"  onClick={() => this.props.viewProfile(user)}>Visit Profile</Link>
          </div>
        </div>
      )
    })
    return (
      <div className="show-container">
        <div className="allprofiles__row">
        <Searchbar search={this.clickSearch} reset={this.resetHandler} change={this.changeHandler} searchBar={this.state.searchBar}/>
          {profile}
        </div>
      </div>
    )
  }
}  
export default AllProfiles;