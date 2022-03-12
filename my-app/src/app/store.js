import { createStore } from 'redux';
import UserReducer from '../redux/UserReducer';
import { composeWithDevTools } from 'redux-devtools-extension'
const store = createStore(UserReducer, composeWithDevTools());
console.log("in store", store)

export default store;