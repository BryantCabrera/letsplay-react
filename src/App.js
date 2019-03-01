import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom'

import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Landing from './components/Layout/Landing';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Boardgame from './components/Boardgame/AllBoardGames/Boardgame';
import OneBoardGame from './components/Boardgame/OneBoardGame/OneBoardGame';
import CreateProfile from './components/Profile/CreateProfile/CreateProfile';
import AllProfiles from './components/Profile/AllProfiles/AllProfiles';
import EditProfile from './components/Profile/EditProfile/EditProfile';
import ProfileShowPage from './components/Profile/ProfileShowPage/ProfileShowPage';


import './App.css';

class App extends Component {
  state = {
    loggedUser: {},
    username:'',
    email:'',
    password:'',
    playedGames: [],
    ownedGames: [],
    boardgames: [],
   
  }

  componentDidMount () {
    this.getBoardgames();
  }


  getBoardgames = async () => {
    try {
      const response = await fetch('https://bgg-json.azurewebsites.net/thing/13');
      if (!response.ok){
        throw Error(response.statusText)
      }
      const boardgamesParsed = await response.json();
      this.setState({
        boardgames: boardgamesParsed
      })
    } catch (err) {
      console.log(err, 'error in catch block')
    }
  }

  loginUser = (user) => {
    this.setState({
      loggedUser: user
    });
    console.log(this.state, ' this is App.js state');
  }

  logoutUser = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/users/logout', {
        method: 'GET',
        credentials: 'include',
        // body: JSON.stringify(loggedUser),
        // mode: 'no-cors', do NOT need
        headers: {
        'Content-Type': 'application/json'
        }
      });

        // if(!response.ok) {
        //     throw Error()
        // }

      const parsedResponse = await response.json();
      if (parsedResponse) {
        this.props.history.push(`/`);
      }

      this.setState({
        loggedUser: {}
      });

    } catch (err) {
      console.log(err, ' this is error from Login.js')
    }
  }

  updateUser = (user) => {
    this.setState({
      loggedUser: user
    });
  }
  
  render() {
    const { boardgames } = this.state;
    return (
      <Switch>
        <div className="App">
          <Navbar loggedUser={this.state.loggedUser} logoutUser={this.logoutUser} />
          <Route exact path="/" component={ Landing } />
          <div className="container">
            <Route exact path="/login" component= {(props) =>  <Login {...props} history={this.props.history} loginUser={this.loginUser} /> } />
            <Route exact path="/register" component= {(props) =>  <Register {...props} history={this.props.history} loginUser={this.loginUser} /> } />
          </div>
          <Route exact path="/boardgames" component={ Boardgame } boardgames={boardgames} />
          <Route exact path="/boardgames/:id" component={ OneBoardGame } />
          <Route exact path="/profiles" component= { AllProfiles }/>
          <Route exact path="/profile" component={ CreateProfile } />
          <Route exact path="/profile/:id" component={(props) =>  <ProfileShowPage {...props} user={this.state.loggedUser} /> } />
          <Route exact path="/profile/:id/edit" component={(props) =>  <EditProfile {...props} user={this.state.loggedUser} updateUser={this.updateUser} /> } />
        <Footer />
      </div>
      </Switch>
    );
  }
}

export default withRouter(App);
