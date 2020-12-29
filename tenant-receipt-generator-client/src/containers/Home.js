import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import UserContainer from './UserContainer'
import '../navbar.css'
import {Button} from 'react-bootstrap'
import NavBar from '../components/NavBar'
import UserInput from '../components/UserInput';


class Home extends Component {

  render() {
    return(
      <div>
        <NavBar /> <br />
        <h1>Generate monthly rental payment receipts.</h1>
        <UserInput />
        <UserContainer />
      </div>
    )
  }
}

export default Home;