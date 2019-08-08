import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home.js';

class App extends Component {

  // constructor() {
  //   super()
  // }

  // componentDidMount() {
  //   fetch("http://localhost:3000/api/v1/users/1")
  //   .then(res => res.json())
  //   .then(user => console.log(user))
  // }


  render(){
  return (
    <div className="App">
    <header className="Header">Welcome To The Receipt Generator For Rent Payments</header>
      <h1> <Home /> </h1>
    </div>
  );
  }
}

export default App;
