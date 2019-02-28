import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
  render () {
    const { users } = this.state;
    let profile = users.map(user => {
      return (
      <div class="card" style={{width: '15rem'}}>
        <img class="card-img-top" src='https://exo12exo.files.wordpress.com/2014/06/kai-kai-exo-k-35505465-500-600.png' alt="Card image cap"/>
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
          {profile}
      </div>
      </div>
           
      )
  }
}  
export default AllProfiles