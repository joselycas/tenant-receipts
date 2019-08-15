

export default function receiptsReducer(state = [], action) {
  switch (action.type) {
  case 'ADD_RECEIPT':
    return [...state, action.payload] 
  default:
    return state

  }
}
