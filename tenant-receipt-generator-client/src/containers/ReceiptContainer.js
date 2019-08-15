import React, { Component } from 'react';
import ReceiptInput from '../components/ReceiptInput'
import Receipts from '../components/Receipts'
import User from '../components/User.js'


class ReceiptContainer extends Component {

  render() {
    return(

      <div>
      This is the receipt container
    <ReceiptInput user={this.props.user && this.props.user.id} />
    <Receipts receipts={this.props.user && this.props.user.receipts} />


      </div>


    )
  }
}



export default ReceiptContainer;
