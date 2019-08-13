import React from 'react'
import User from './User'


const Users = (props) => {


  return (
    <div >
    <strong>List of users</strong> <br />
    {props.users.map(user =>
      <div key={user.id}><User user={user}/></div>)}
     </div>
  )
}
export default Users;
