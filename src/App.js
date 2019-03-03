import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Landing from './components/Layout/Landing';
import Register from './components/Auth/Register';
import Login from './components/Auth/Login';
import Boardgame from './components/Boardgame/AllBoardGames/Boardgame';
import OneBoardGame from './components/Boardgame/OneBoardGame/OneBoardGame';
import AllProfiles from './components/Profile/AllProfiles/AllProfiles';
import EditProfile from './components/Profile/EditProfile/EditProfile';
import ProfileShowPage from './components/Profile/ProfileShowPage/ProfileShowPage';
import './App.css';

class App extends Component {
  state = {
    loggedUser: {},
    userBoardgames: [],
    userToView: {},
    userToViewBoardgames: [],
    username:'',
    email:'',
    password:'',
    playedGames: [],
    ownedGames: [],
    boardgames: [],
    authMessage: ''
  }

  // componentDidMount () {
  //   this.getBoardgames();
  // }

  // getBoardgames = async () => {
  //   try {
  //     const response = await fetch('https://bgg-json.azurewebsites.net/thing/13');

  //     if (!response.ok){
  //       throw Error(response.statusText)
  //     }

  //     const boardgamesParsed = await response.json();

  //     this.setState({
  //       boardgames: boardgamesParsed
  //     });
  //   } catch (err) {
  //     console.log(err, 'This is error from App.js.');
  //   }
  // }

  loginUser = async (user) => {
    this.setState({
      loggedUser: user,
      userToView: user
    });

    //grabs user's owned boargames
    try {
      const response = await fetch('http://localhost:8000/api/v1/userboardgames', {
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
      if (parsedResponse) {
        this.setState({
          userBoardgames: parsedResponse,
          userToViewBoardgames: parsedResponse
        });
      }
  
    } catch (err) {
      console.log(err, ' This is error from App.js loginuser().');
    }
  }

  logoutUser = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/v1/users/logout', {
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

      if (parsedResponse) {
        this.setState({
          loggedUser: {},
          authMessage: parsedResponse
        });

        this.props.history.push(`/`);
      }

      

    } catch (err) {
      console.log(err, ' This is error from App.js logoutUser().')
    }
  }

  updateUser = (user) => {
    this.setState({
      loggedUser: user
    });
  }

  updateUserBoardgames = (addedBoardgame) => {
    this.setState({
      userBoardgames: [...this.state.userBoardgames, addedBoardgame]
    });
  }

  changeAuthMessage = (message) => {
    this.setState({
      authMessage: message
    })
  }

  viewProfile = async (userToView) => {
    try {
      const response = await fetch(`http://localhost:8000/api/v1/userboardgames/${userToView.id}`, {
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
      if (parsedResponse) {
        this.setState({
          userToView: userToView,
          userToViewBoardgames: parsedResponse
        });
        console.log(this.state.userToView, ' userToView from App.js');
      }

    } catch (err) {
      console.log(err, ' This is error from App.js loginuser().');
    }
  }

  viewLoggedProfile = () => {
    this.setState({
      userToView: this.state.loggedUser,
      userToViewBoardgames: this.state.userBoardgames
    });
  }
  
  render() {
    const {boardgames} = this.state;
    return (
      <Switch>
        <div className="App">
          <Navbar loggedUser={this.state.loggedUser} logoutUser={this.logoutUser} viewLoggedProfile={this.viewLoggedProfile} />
          <Route exact path="/" component={(props) =>  <Landing {...props} history={this.props.history} authMessage={this.state.authMessage} /> } />
          <div className="container">
            <Route exact path="/login" component={(props) =>  <Login {...props} history={this.props.history} loginUser={this.loginUser} /> } />
            <Route exact path="/register" component={(props) =>  <Register {...props} history={this.props.history} loginUser={this.loginUser} /> } />
          </div>
          <Route exact path="/boardgames" component={(props) =>  <Boardgame {...props} history={this.props.history} user={this.state.loggedUser}  updateUserBoardgames={this.updateUserBoardgames} /> } />
          <Route exact path="/boardgames/:id" component={ OneBoardGame } />
          <Route exact path="/profiles" component={(props) =>  <AllProfiles {...props} user={this.state.loggedUser} userBoardgames={this.state.userBoardgames} viewProfile={this.viewProfile} /> } />
          <Route exact path="/profile/:id" component={(props) =>  <ProfileShowPage {...props} user={this.state.loggedUser} userBoardgames={this.state.userBoardgames} userToView={this.state.userToView} userToViewBoardgames={this.state.userToViewBoardgames} /> } />
          <Route exact path="/profile/:id/edit" component={(props) =>  <EditProfile {...props} user={this.state.loggedUser} updateUser={this.updateUser} changeAuthMessage={this.changeAuthMessage} /> } />
          <Footer />
        </div>
      </Switch>
    );
  }
}

export default withRouter(App);