import React,{ Component } from 'react'

class OneBoardGame extends Component {
  state={
    boardGame:  {}
  }
  componentDidMount(){
    const { id } = this.props.match.params
    this.getBoardGame(id)
  }

  getBoardGame = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/boardgames/${id}`, {
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
      console.log(parsedResponse)
      this.setState({
        boardGame : parsedResponse
      })
    } catch (err) {
      console.log(err, ' this ERROR ALL BOARDGAMES')
    }
  }

render(){
  return (
    <div>
      <h1>{this.state.boardGame.title}</h1> 

    </div>
  )
}
} 

export default OneBoardGame;