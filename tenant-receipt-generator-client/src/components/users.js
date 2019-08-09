import React from 'react'
import User from './User'

const Users = (props) => {

  return (
    <div >
    This is the users information may not need it.
    {props.users.map(user =>
      <div key={user.id}><User user={user}/></div>)}
     </div>
  )
}
export default Users;


// <p>Hi {user.name}</p>
// <p>  Your Property is located at<br/>
// {user.street} {user.city}  {user.state}  {user.zip} </p>
