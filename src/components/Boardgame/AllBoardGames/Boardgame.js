import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
class Boardgame extends Component {
  state = {
    boardGames: []
  }
  componentDidMount () {
    this.getBoardgames();
  }

  getBoardgames = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/boardgames', {
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
        boardGames : parsedResponse.boardgames
      })
    } catch (err) {
      console.log(err, ' this ERROR ALL BOARDGAMES')
    }
  }

  addToOwnedGames = () => {
    console.log('OWNED GAMES CLICKED')
  }

  addToWishlist = () => {
    console.log('WISHLIST GAMES CLICKED')
  }
  render () {
    const { boardGames } = this.state;
    return(
      <div className="allprofiles__row">
     {boardGames.map(user => {
      return (
      <div class="card" style={{width: '15rem'}}>
        <img class="card-img-top" src={user.img_url} alt="board image"/>
        <div class="allprofiles_card-body">
          <h5 class="allprofiles__name" >{user.title}</h5>
          <Link to={`/boardgames/${user.id}`} class="btn btn-primary">Visit Game </Link>
          <button onClick={this.addToOwnedGames} class="btn btn-success">Add to Owned Games</button>
          <button onClick={this.addToWishlist} class="btn btn-warning">Add to Wishlist</button>
        </div>
      </div>
      )
    })}
    </div>
    )}
}  
export default Boardgame
