import React from 'react'
import {Route} from 'react-router-dom'
import ReceiptContainer from '../containers/ReceiptContainer'



const User = (props) => {

   let user = props.match ? props.users[props.match.params.id - 1] : props.user
// if props.match then render receipt container component pass over props of user.id
  return (

    <div>
      {user ? user.name : null }
    </div>
  )
}
export default User;
