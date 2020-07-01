import React, { Component } from 'react';
import { Route, Link, Switch } from "react-router-dom";
import UserContainer from './UserContainer'
import '../navbar.css'
import {Button} from 'react-bootstrap'
import NavBar from '../components/NavBar'


class Home extends Component {

  render() {
    return(
      <div>
        <NavBar /> <br />
        <h1>Simply generate your receipts by filling out these forms</h1><br />
        <Button variant="info" href="/users/new">Step 1. Landlord Information</Button>
        <Button variant="info" href="/receipts/new">Step 2. Tenant Information, Review, and Submit!</Button><br /><br/>
        <UserContainer />
      </div>
    )
  }
}

export default Home;