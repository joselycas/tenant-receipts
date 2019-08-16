import React from 'react'
import Receipt from './Receipt'


const Receipts = (props) => {



  return (
    <div>
    <br />
    {props.receipts && props.receipts.map(receipt =>
      <div key={receipt.id}><Receipt receipt={receipt}/></div>)}
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
