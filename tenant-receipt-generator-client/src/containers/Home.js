import React, { Component } from 'react';
// import { Route, Link } from "react-router-dom";
import UserContainer from './UserContainer'
import '../navbar.css'
import {Button} from 'react-bootstrap'


class Home extends Component {



  render() {
    return(

    <div>

      <Button variant="info" href="/users/new">Step 1. Landlord Information</Button>
      <Button variant="info" href="/users/:id/receipts/new">Step 2. Tenant Information</Button>
      <Button variant="info" href="/review">Step 3. Revew Receipt and send</Button><br /><br />
      <UserContainer />


    </div>


    )
  }
}

export default Home;

// <ul>
//   <li><Link to="/">Home</Link></li>
//   <li><Link to="/users/:id/receipts/new">New Receipt</Link></li>
//   <li><Link to="/users/:id/receipts">Receipt History</Link></li>
//   <li><Link to="/users">Users</Link></li>
//   <li><Link to='/users/:id'>User</Link></li>
// </ul>
