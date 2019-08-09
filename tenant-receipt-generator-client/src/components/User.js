import React from 'react'


const User = (props) => {
  let user = props.users[props.match.params.id - 1]
       console.log('user component props', user)
  return (

    <li>
      {user ? user.name : null}
     </li>
  )
}
export default User;
