import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
      const response = await fetch('http://localhost:8000/api/v1/users', {
        method: 'GET',
        credentials: 'include',
        // mode: 'no-cors', do NOT need
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
      })
    } catch (err) {
      console.log(err, ' this ERROR ALL PROFILEs')
    }
  }

  clickSearch = (e) => {
    e.preventDefault()
    let filteredUsers = this.state.users.filter(game => game.name.includes(this.state.searchBar))
    console.log(this.state.users)

    this.setState({
        users : filteredUsers
    })
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
    let profile = users.map(user => {
      return (
        <div class="card" style={{width: '15rem'}}>
          <img class="card-img-top" src={user.img_url} alt="user profile"/>
          <div class="allprofiles_card-body">
            <h5 class="allprofiles__name" >{user.name}</h5>
            <p class="allprofiles__email" >{user.email}</p>
            <p class="allprofiles__location" >Location: {user.location}</p>
            <Link to={`/profile/${user.id}`} class="btn btn-primary">Visit Profile </Link>
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
export default AllProfiles