import { combineReducers } from 'redux'
import products from './products'
import ratings from './ratings'
export default combineReducers({
  products,
  ratings
})