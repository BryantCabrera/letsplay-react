import React,{ Component } from 'react';

class OneBoardGame extends Component {
  state={
    boardGame:  {}
  }
  componentDidMount(){
    const { id } = this.props.match.params;
    this.getBoardGame(id);
  }

  getBoardGame = async (id) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/boardgames/${id}`, {
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
        boardGame : parsedResponse
      });
      
    } catch (err) {
      console.log(err, ' this is error from oneboardgame.js');
    }
  }

  render(){
    const { boardGame } = this.state; 
    return (
      <div>
        <div class="card mb-3">
        <img class="card-img" src={boardGame.img_url} alt="boardgame"/>
          <div class="OneBoardGame__card-body">
          <h1 class="card-title">{boardGame.title}</h1>
          <p class="card-text">Designer: {boardGame.designer} </p>
          <p class="card-text">Mininum players: {boardGame.number_of_players_min} </p>
          <p class="card-text">Maximum players: {boardGame.number_of_players_max} </p>
          <p class="card-text">Play time: {boardGame.play_time}</p>
          <p class="card-text">{boardGame.description}</p>
          </div>
        </div>
      </div>
    )
  }
} 

export default OneBoardGame;