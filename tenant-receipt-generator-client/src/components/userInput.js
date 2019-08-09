// user form
import React, { Component } from 'react';

// this is supposed to be a functional component in the component folder.
class User extends Component {

state = {
  name: '',
  street: '',
  city: '',
  state: '',
  zip: null
}

handleOnChange = event => {
  this.setState({
  [event.target.name]: event.target.value})
}

handleonSubmit = event => {
  event.preventDefault()
}


  render() {
    return(

      <div>
        <h2>Landlord information</h2>
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
      </div>


    )
  }
}

export default User;
