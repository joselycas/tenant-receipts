import React from 'react'
import {Redirect} from 'react-router-dom'
import ReceiptContainer from '../containers/ReceiptContainer'
import {connect} from 'react-redux'



const User = (props) => {

   let user = props.match ? props.users[props.match.params.id - 1] : props.user



// if props.match then render receipt container component pass over props of user.id
  return (

    <div>
      <h2>{user ? user.name : null } </h2>
      This is the user component
      <ReceiptContainer user={user} />


    </div>
  )
}


export default User;
