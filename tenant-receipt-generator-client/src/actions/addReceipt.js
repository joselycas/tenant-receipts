export function addReceipt(data, user_id) {
console.log(user_id)
  return (dispatch) => {
  fetch(`http://localhost:3000/api/v1/users/${user_id}/receipts`, {
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
