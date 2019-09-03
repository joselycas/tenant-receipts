import {BrowserRouter} from 'react-router-dom';


export function addUser(data, history) {
  console.log('C');
  return (dispatch) => {
  fetch('http://localhost:3000/api/v1/users', {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    method: 'POST',
    body: JSON.stringify(data)
  })
  .then(res => res.json())
  .then(user => {
    console.log('D')
    dispatch({
    type: 'ADD_USER',
    payload: user
  })
  history.push(`/users/${user.id}`)})
  }
  console.log('E')
}
