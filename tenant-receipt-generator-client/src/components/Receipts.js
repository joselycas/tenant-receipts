import React from 'react'
import Receipt from './Receipt'


const Receipts = (props) => {

console.log(props.receipts)

  return (
    <div>
    <h3>I want to list the receipts for the user here. </h3>
    </div>

  )
}
export default Receipts;


// <strong>List of receipts - this is the receipts component</strong> <br />
// {props.receipts.map(receipt =>
//   <div key={receipt.id}><Receipt receipt={receipt}/></div>)}


// {props.receipts.map(receipt =>
//   <div key={receipt.id}>{receipt.name}</div>)}
// </div>
