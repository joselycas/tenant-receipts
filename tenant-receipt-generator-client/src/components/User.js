import React from 'react'


const User = (props) => {
  console.log(props)
  return (
    <li >
    {props.user.name}
     </li>
  )
}
export default User;
