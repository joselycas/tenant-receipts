export function addReceipt(data) {

  return (dispatch) => {
  fetch('http://localhost:3000/api/v1/receipts', {
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
