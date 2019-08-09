


export default function userReducer(state = {receipts: []}, action) {
  switch (action.type) {
  case 'ADD_RECEIPT':
    return {...state, receipts:[...state.receipts, action.payload] }
  default:
    return state

  }
}
