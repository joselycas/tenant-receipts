import React from 'react'
import ReceiptContainer from '../containers/ReceiptContainer'




const User = (props) => {

   let user = props.match ? props.users[props.match.params.id - 1] : props.user



// if props.match then render receipt container component pass over props of user.id
  return (

    <div>
      <h3>{user ? user.name : null } </h3>

      <ReceiptContainer user={user} />


    </div>
  )
}


export default User;
