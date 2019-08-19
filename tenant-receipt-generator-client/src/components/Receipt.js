import React from 'react'
import {Table, Button} from 'react-bootstrap'




const Receipt = (props) => {
// if props.match then render receipt container component pass over props of user.id
  return (

    <div>
    <Table striped bordered hover>
  <thead>
    <tr>

      <th>Tenants Name</th>
      <th>Street</th>
      <th>Apartment</th>
      <th>City</th>
      <th>State</th>
      <th>Zip</th>
      <th>From Date</th>
      <th>To Date</th>
      <th>Amount</th>
      <th>Notes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{props.receipt.name}</td>
      <td>{props.receipt.street}</td>
      <td>{props.receipt.apartment}</td>
      <td>{props.receipt.city}</td>
      <td>{props.receipt.state}</td>
      <td>{props.receipt.zip}</td>
      <td>{props.receipt.from_date}</td>
      <td>{props.receipt.to_date}</td>
      <td>{props.receipt.amount}</td>
      <td>{props.receipt.notes}</td>
    </tr>

  </tbody>
</Table>

<Button variant="info" href="#">Send Receipt</Button><br /><br />


    </div>
  )
}


export default Receipt;
