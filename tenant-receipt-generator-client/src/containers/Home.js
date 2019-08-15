import React, { Component } from 'react';
import { Route, Link } from "react-router-dom";
import UserContainer from './UserContainer'
import '../navbar.css'


class Home extends Component {



  render() {
    return(
      <div>

      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users/:id/receipts/new">New Receipt</Link></li>
        <li><Link to="/users/:id/receipts">Receipt History</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to='/users/:id'>User</Link></li>
      </ul>
      <h1>No more paper receipts. Update the date and instantly send a receipt to your tenants. </h1>
      <p><Link to="/users/new">Get started by creating a profile.</Link> </p>  <br />
      <p>Already have a profile? Generate a receipt. </p>

      </div>




    )
  }
}

export default Home;
