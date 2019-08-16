import {BrowserRouter} from 'react-router-dom';

export function addReceipt(data, user) {
  return (dispatch) => {
  fetch(`http://localhost:3000/api/v1/users/${user}/receipts`, {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(receipt => dispatch({
    type: 'ADD_RECEIPT',
    payload: receipt
  }))

 }
}
