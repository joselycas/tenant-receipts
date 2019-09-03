import React, { Component } from 'react';
import ReceiptInput from '../components/ReceiptInput'
import Receipts from '../components/Receipts'
import {Route} from 'react-router'


class ReceiptContainer extends Component {

  render() {
    return(

      <div>
        <ReceiptInput user={this.props.user && this.props.user.id} /><br/><br />
        <Receipts receipts={this.props.user && this.props.user.receipts} />
      </div>


    )
  }
}



export default ReceiptContainer;
