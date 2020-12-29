import React, { Component } from 'react';
import './App.css';
import Home from './containers/Home.js';

class App extends Component {
  render(){
  return (
    <div className="App">
    <header className="Header">Say goodbye to paper receipts.</header>
      <Home />
    </div>
  );
  }
}

export default App;
