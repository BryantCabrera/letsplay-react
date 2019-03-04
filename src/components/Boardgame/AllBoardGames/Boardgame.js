import React, { Component } from 'react';
import { Link } from 'react-router-dom'
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
    });
  }

  clickSearch = (e) => {
    e.preventDefault()
    let filteredBoardGames = this.state.boardGames.filter(game => game.title.includes(this.state.searchBar));

    this.setState({
        boardGames : filteredBoardGames
    });
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
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/boardgames`, {
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
        boardGames : parsedResponse.boardgames
      });

    } catch (err) {
      console.log(err, ' this is error from all boardgames');
    }
  }

  addToOwnedGames = async (boardGame) => {
    const userboardgame = {
      user: this.state.user.id,
      boardgame: parseInt(boardGame.id)
    };
    
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/userboardgames`, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(userboardgame),
        headers: {
          'Content-Type': 'application/json'
        }
      });
    
      if(!response.ok) {
        throw Error()
      }

      await response.json();

      this.props.updateUserBoardgames(boardGame);

    } catch (err) {
      console.log(err, ' this is error from Edit Profile');
    }
  }

  render () {
    const { boardGames, user } = this.state;
    return(
      <div className="allprofiles__row">
        <Searchbar getBoardgames={this.getBoardgames} search={this.clickSearch} reset={this.resetHandler} change={this.changeHandler} searchBar={this.state.searchBar}/>
        {boardGames.map((boardGame, index) => {
          return (
            <div className="card" key={index} style={{width: '15rem'}}>
              <Link to={`/boardgames/${boardGame.id}`}> 
              <img className="card-img-top" src={boardGame.img_url} alt="boardgame"/>
              </Link>
                <div className="allprofiles_card-body">
                  <h5 className="allprofiles__name" >{boardGame.title}</h5>
                  {user.id ?  
                    (this.props.userBoardgames.map(boardgame => boardgame.id == boardGame.id)).includes(true) ? 
                      <div>
                        <button onClick={() => this.addToOwnedGames(boardGame)} id={boardGame.id} className="btn btn-primary" disabled>Added to Owned Games</button>
                      </div>
                      :
                      <div>
                        <button onClick={() => this.addToOwnedGames(boardGame)} id={boardGame.id} className="btn btn-primary">Add to Owned Games</button>
                      </div>
                    : 
                    <div></div> }
                
                </div>
            </div>
          )
        })}
      </div>
    )
  }
}  

export default Boardgame;