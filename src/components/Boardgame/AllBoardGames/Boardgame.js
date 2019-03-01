import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
class Boardgame extends Component {
  state = {
    boardGames: [],
    user: {}
  }

  componentDidMount () {
    this.getBoardgames();
    this.setState({
      user : this.props.user
    })
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



  addToOwnedGames = async (e) => {
    // console.log('OWNED GAMES CLICKED')
    // // need to know whos logged in
    // console.log(this.state.user.id);
    // // need to know the game Id
    // console.log(e.target.id, 'THIS IS TARGET ID FROM BOARDGAMEJS');

    const userboardgame = {
      user: this.state.user.id,
      boardgame: parseInt(e.target.id)
    }
    
    console.log(JSON.stringify(userboardgame), ' this is userboardgame from boardgame.js')
    try {
        const response = await fetch(`http://localhost:8000/api/v1/userboardgames`, {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(userboardgame),
          // mode: 'no-cors', do NOT need
          headers: {
            'Content-Type': 'application/json'
          }
        });
    
        if(!response.ok) {
            throw Error()
        }

        const parsedResponse = await response.json();
        if (parsedResponse){
        }

    } catch (err) {
        console.log(err, ' this is error from Edit Profile');
    }

    // flash message "Boardgame has been added"
    //make add button disappear 
    // replace with "Already added to boardgame favorites"
  }

  addToWishlist = () => {
    console.log('WISHLIST GAMES CLICKED')
  }

  render () {
    const { boardGames, user } = this.state;
    console.log(this.state, 'THIS IS THIS.STATE FROM BOARDGAME.JS')
    console.log(user, 'THIS IS USER FROM BOARDGAME.JS');
    console.log(user == {} , 'THIS IS USER FROM BOARDGAME.JS');
    return(
      <div className="allprofiles__row">
        {boardGames.map((boardGame, index) => {
          return (
            <div class="card" key={index} style={{width: '15rem'}}>
              <img class="card-img-top" src={boardGame.img_url} alt="board image"/>
              <div class="allprofiles_card-body">
                <h5 class="allprofiles__name" >{boardGame.title}</h5>
                <Link to={`/boardgames/${boardGame.id}`} class="btn btn-primary">Visit Game </Link>

                {user.id ?  <div><button onClick={this.addToOwnedGames} id={boardGame.id} class="btn btn-success">Add to Owned Games</button>
                <button onClick={this.addToWishlist} class="btn btn-warning">Add to Wishlist</button> </div>: <div></div> }
              
              </div>
            </div>
          )
        })}
      </div>
    )}
}  
export default Boardgame
