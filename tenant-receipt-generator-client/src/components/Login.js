import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import {addUser} from '../actions/addUser';
import {connect} from 'react-redux';
import UserInput from './UserInput';


class logIn extends Component {

state = {
  name: '',
  street: '',
  city: '',
  state: '',
  zip: 0
}

handleOnChange = event => {
  this.setState({
  [event.target.name]: event.target.value})
}

handleonSubmit = event => {
  event.preventDefault()
  this.props.addUser(this.state, this.props.history)
  this.setState({
    name: '',
    street: '',
    city: '',
    state: '',
    zip: 0
  })
}


  render() {
    return(
      <div>
        <h2>1. Enter the Landlord information</h2>
        <form onSubmit={this.handleonSubmit}>
          <label>Name: </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} /><br />
          <label>Street Address: </label>
          <input type="text" name="street" value={this.state.street} onChange={this.handleOnChange}  /><br />
          <label>City: </label>
          <input type="text" name="city"value={this.state.city} onChange={this.handleOnChange} /><br />
          <label>State: </label>
          <input type="text" name="state" value={this.state.state} onChange={this.handleOnChange} /><br />
          <label>Zip-code: </label>
          <input type="text" name="zip" value={this.state.zip} onChange={this.handleOnChange} /><br />
          <input type="submit" />
        </form>
        <br /><br />
      </div>
    )
  }
}

export default connect(null, {addUser})(UserInput);
