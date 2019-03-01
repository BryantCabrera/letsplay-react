import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom'
import Searchbar from '../../Searchbar/Searchbar';
class Boardgame extends Component {
  state = {
    boardGames: [],
    user: {},
    searchBar:''
  }

  componentDidMount () {
    this.getBoardgames();
    this.setState({
      user : this.props.user
    })
  }

  clickSearch = (e) => {
    e.preventDefault()
    let filteredBoardGames = this.state.boardGames.filter(game => game.title.includes(this.state.searchBar))
    console.log(this.state.boardGames)

    this.setState({
        boardGames : filteredBoardGames
    })
    }

    resetHandler = () => {
      this.getBoardgames();
  }

  changeHandler = (e) => {
    this.setState({
        ...this.state,
        [e.target.name] : e.target.value
        });
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

  render () {
    const { boardGames, user } = this.state;
    return(
      <div className="allprofiles__row">
        <Searchbar getBoardgames={this.getBoardgames} search={this.clickSearch} reset={this.resetHandler} change={this.changeHandler} searchBar={this.state.searchBar}/>
        {boardGames.map((boardGame, index) => {
          return (
            <div class="card" key={index} style={{width: '15rem'}}>
            <Link to={`/boardgames/${boardGame.id}`}> 
            <img class="card-img-top" src={boardGame.img_url} alt="boardgame"/>
            </Link>
              <div class="allprofiles_card-body">
                <h5 class="allprofiles__name" >{boardGame.title}</h5>

                {user.id ?  <div><button onClick={this.addToOwnedGames} id={boardGame.id} class="btn btn-primary">Add to Owned Games</button>
                </div>: <div></div> }
              
              </div>
            </div>
          )
        })}
      </div>
    )}
}  
export default Boardgame
