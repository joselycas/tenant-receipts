import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home.js';
import UserContainer from './containers/UserContainer'


class App extends Component {


  render(){
  return (
    <div className="App">
    <header className="Header">Welcome To The Receipt Generator For Rent Payments</header>

      <UserContainer />

    </div>
  );
  }
}

export default App;
