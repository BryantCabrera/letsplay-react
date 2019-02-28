import React, { Component } from 'react';
import axios from 'axios'

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
        <div class="card" style={{width: '18rem'}}>
        <img class="card-img-top" src="..." alt="Card image cap"/>
        <div class="card-body">
          <h5 class="card-title">{user.name}</h5>
          <p class="card-text">{user.email}</p>
          <a href="#" class="btn btn-primary">Visit Profile</a>
        </div>
       </div>
      )
    })
      return (
      <div className="show-container">
      <h1>All Profiles</h1>
          {profile}
     
      </div>
           
      )
  }
}  
export default AllProfiles