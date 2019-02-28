import React, { Component } from 'react';
import axios from 'axios'

class AllProfiles extends Component {
  state = {
      users: []
  }

  componentDidMount() {
      console.log('these profiles are mounting')
      axios('http://localhost:8000/api/v1/users')
          .then(res => {
              console.log(res)
              this.setState({
                  users: res.data.data
              })
          }) 
  }
  render () {
      const allProfiles = this.state.users.map((user) => {
          return (
              <div>
                 {user.id}
              </div>
          )
      })
      return (
          <div className="show-container">
                  <ul>
                  <h1>All Profiles</h1>
                      {allProfiles}
                  </ul>
          
          </div>
      )
  }
}


export default AllProfiles