import React, { Component } from 'react';
import ReceiptInput from '../components/ReceiptInput'
import Receipts from '../components/Receipts'
// import {connect} from 'react-redux'
// import {fetchUsers} from '../actions/fetchUsers'

class ReceiptContainer extends Component {
  //
  // componentDidMount() {
  //   this.props.fetchUsers()
  // }

  render() {
    return(

      <div>
      
        <ReceiptInput />
      </div>


    )
  }
}

// const mapStateToProps = state => {
//   return {
//     users: state.users
//   }
// }
export default ReceiptContainer
// export default connect(mapStateToProps, {fetchUsers})(ReceiptContainer);
