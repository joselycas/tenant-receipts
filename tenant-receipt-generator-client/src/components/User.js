import React from 'react'
import ReceiptContainer from '../containers/ReceiptContainer'





const User = (props) => {
 // let user = props.match ? props.users[props.match.params.id - 1] : props.user
   let user = props.users.filter(user => user.id == props.match.params.id)[0]


  return (

    <div>
      <h3>Receipt From: {user ? user.name : null } </h3>
      <ReceiptContainer user={user} />
    </div>
  )
}


export default User;
