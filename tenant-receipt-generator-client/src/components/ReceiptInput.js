import React, { Component } from 'react';
import {addReceipt} from '../actions/addReceipt'
import {connect} from 'react-redux'
import {BrowserRouter} from 'react-router-dom';

class ReceiptInput extends Component {

  constructor() {
    super()
    this.state = {
        name: "",
        street: "",
        apartment: "",
        city: "",
        state: "",
        zip: "",
        from_date: "",
        to_date: "",
        amount: "$",
        notes: "",
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
    this.props.addReceipt(this.state, this.props.user, this.props.history)
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

  render() {
    return(
      <div>
      <h3>2. Enter the tenant's information</h3>
      <form onSubmit={this.handleonSubmit}>
        <label>Name: </label>
        <input type="text" name="name" value={this.state.name} onChange={this.handleOnChange} /><br />
        <label>Street Address: </label>
        <input type="text" name="street" value={this.state.street} onChange={this.handleOnChange} /><br />
        <label>Apartment: </label>
        <input type="text" name="apartment" value={this.state.apartment} onChange={this.handleOnChange} /><br />
        <label>City: </label>
        <input type="text" name="city" value={this.state.city} onChange={this.handleOnChange} /><br />
        <label>State: </label>
        <input type="text" name="state" value={this.state.state} onChange={this.handleOnChange}/><br />
        <label>Zip-code: </label>
        <input type="integer" name="zip" value={this.state.zip} onChange={this.handleOnChange} /><br />
        <table align="center">
        <tbody>
          <tr>
            <td>
            <label>From Date: </label>
            <input type="integer" name="from_date" value={this.state.from_date} onChange={this.handleOnChange}/>
            </td>
            <td>
            <label>End Date: </label>
            <input type="integer" name="to_date"value={this.state.to_date} onChange={this.handleOnChange} />
            </td>
          </tr>
          </tbody>
          </table>
        <label>Amount: </label>
        <input type="number" name="amount" value={this.state.amount} onChange={this.handleOnChange}/><br />
        <label>Notes</label>
        <input type="text" name="notes" value={this.state.notes} onChange={this.handleOnChange} /><br />
        <input type="submit" />

      </form><br /><br/>
      </div>
    )
  }
}

export default connect(null, {addReceipt})(ReceiptInput);
