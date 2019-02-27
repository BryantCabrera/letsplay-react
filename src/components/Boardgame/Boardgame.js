import React, { Component } from 'react'

 class Boardgame extends Component {
  
    
  render() {
    return (
      <div>
        <h1>Board Games</h1>
        <h3>{this.props.boardgames}</h3>
      </div>
    )
  }
}

export default Boardgame;
