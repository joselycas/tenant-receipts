import React from 'react'
import User from './User'
import Receipt from './Receipt'
import {Form, Button} from 'react-bootstrap'


const Review = (props) => {
  console.log(props.users)
  return (
    <div>

    Displays user and receipt info <br/>
    <User />

    Send off receipt

    </div>
  )
}

export default Review
