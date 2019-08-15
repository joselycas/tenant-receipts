import { combineReducers } from "redux";
import receiptsReducer from './receiptsReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  users: usersReducer,
  receipts: receiptsReducer
});

export default rootReducer;
