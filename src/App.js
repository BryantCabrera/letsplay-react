import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Landing from './components/Layout/Landing';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Boardgame from './components/Boardgame/AllBoardGames/Boardgame';
import OneBoardGame from './components/Boardgame/OneBoardGame/OneBoardGame';
import CreateProfile from './components/Profile/CreateProfile/CreateProfile';
import EditProfile from './components/Profile/EditProfile/EditProfile';
import ProfileShowPage from './components/Profile/ProfileShowPage/ProfileShowPage';


import './App.css';

class App extends Component {
    state = {
      username:'',
      email:'',
      password:'',
      playedGames: [],
      ownedGames: [],
      boardgames: []
    }
    componentDidMount () {
        this.getBoardgames();
    } 

    getBoardgames = async () => {
        try {
            const response = await fetch('https://bgg-json.azurewebsites.net/thing/');
            if (!response.ok){
                throw Error(response.statusText)
            }
            const boardgamesParsed = await response.json();
            console.log(boardgamesParsed.description)
            

            this.setState({
                boardgames: boardgamesParsed
              })
        } catch (err) {
            console.log(err, 'error in catch block')
        }
    }
  render() {
    return (
      <Router>
      <div className="App">
        <Navbar />
         <Route exact path="/" component={ Landing } />
         <div className="container">
           <Route exact path="/login" component= { Login } />
           <Route exact path="/register" component= { Register } />
         </div>
         <Route exact path="/boardgames" component={ Boardgame } boardgames={this.state.boardgames} />
         <Route exact path="/boardgames/:id" component={ OneBoardGame } />
         <Route exact path="/profile" component={ CreateProfile } />
         <Route exact path="/profile/:id" component={ ProfileShowPage } />
         <Route exact path="/profile/:id/edit" component={ EditProfile } />
       <Footer />
     </div>
    </Router>
    );
  }
}

export default App;
