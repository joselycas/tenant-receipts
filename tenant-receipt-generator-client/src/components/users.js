import React from 'react'

const Users = (props) => {
  console.log(props)
  return (
    <div >
    This is the users information may not need it.
    {props.users.map(user =>
      <div><p>Hi {user.name}</p>
    <p>  Your Property is located at<br/>
    {user.street} {user.city}  {user.state}  {user.zip} </p> </div>)}
     </div>
  )
}
export default Users;
