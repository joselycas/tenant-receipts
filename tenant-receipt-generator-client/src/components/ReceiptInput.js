import React, { Component } from 'react';
import {addReceipt} from '../actions/addReceipt'
import {connect} from 'react-redux'


class ReceiptInput extends Component {

  constructor() {
    super()
    this.state = {
      receipt:{
        name: "",
        street: "",
        apartment: "",
        city: "",
        state: "",
        zip: "",
        from_date: "/ /",
        to_date: "/ /",
        amount: 0,
        notes: ""
      }
    }


  }


  handleOnChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]:value
    })
  }

  handleonSubmit = event => {
    event.preventDefault()
    this.props.addReceipt(this.state)
    this.setState({
      receipt:{
        name: "",
        street: "",
        apartment: "",
        city: "",
        state: "",
        zip: "",
        from_date: "/ /",
        to_date: "/ /",
        amount: 0,
        notes: ""
      }
    })
  }

// this will have handleOnChange and handleonSubmit methods
// will inherent action props from Home
// will pass down the action to the connect method

  render() {
    return(
      <div>
      <h2>Please enter tenant's information</h2>
      <form onSubmit={this.handleonSubmit}>
        <label>Name: </label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} /><br />
        <label>Street Address: </label>
        <input type="text" name="address 1" value={this.state.street} onChange={this.handleOnChange} /><br />
        <label>Apartment: </label>
        <input type="text" name="address 1" value={this.state.apartment} onChange={this.handleOnChange} /><br />
        <label>City: </label>
        <input type="text" name="city" value={this.state.city} onChange={this.handleOnChange} /><br />
        <label>State: </label>
        <input type="text" name="state" value={this.state.state} onChange={this.handleOnChange}/><br />
        <label>Zip-code: </label>
        <input type="integer" name="zip-code" value={this.state.zip} onChange={this.handleOnChange} /><br />
        <table align="center">
          <tr>
            <td>
            <label>From Date: </label>
            <input type="integer" name="from-date" value={this.state.from_date} onChange={this.handleOnChange}/>
            </td>
            <td>
            <label>End Date: </label>
            <input type="integer" name="end-date"value={this.state.to_date} onChange={this.handleOnChange} />
            </td>
          </tr>
          </table>
        <label>Amount: </label>
        <input type="integer" name="amount" value={this.state.amount} onChange={this.handleOnChange}/><br />
        <label>Notes</label>
        <input type="text" name="notes" value={this.state.notes} onChange={this.handleOnChange} /><br />
        <input type="submit" />

      </form>
      </div>
    )
  }
}

export default connect(null, {addReceipt})(ReceiptInput );
