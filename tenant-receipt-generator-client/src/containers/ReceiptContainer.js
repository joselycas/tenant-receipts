import React, { Component } from 'react';
import ReceiptInput from '../components/ReceiptInput'
import Receipts from '../components/Receipts'
import User from '../components/User.js'
import {Route} from 'react-router-dom'

import {connect} from 'react-redux'
import {addReceipt} from '../actions/addReceipt'

class ReceiptContainer extends Component {
  //
  // componentDidMount() {
  //   this.props.fetchUsers()
  // }

  render() {
    return(

      <div>
      <Route path='/users/:id/receipts/new' component={ReceiptInput}/>
      </div>


    )
  }
}

const mapStateToProps = state => {
  return {
    receipts: state.receipts
  }
}

export default connect(mapStateToProps, {addReceipt})(ReceiptContainer);
