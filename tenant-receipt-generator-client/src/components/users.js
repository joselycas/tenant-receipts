import React from 'react'
import User from './User'
import {Route, Link} from 'react-router-dom'


const Users = (props) => {
  return (
    <div >

    {props.users.map(user =>
      <div  key={user.id}><Link to={`/users/${user.id}`}><strong>{user.name}</strong></Link></div>)}
     </div>
  )
}
export default Users;
