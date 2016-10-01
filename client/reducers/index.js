import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { FETCH_BEER_LIST, FETCH_BEER_LIST_FAILURE, FETCH_BEER_LIST_SUCCESS } from '../actions/actionCreators'

const beers = (state = {}, action) => {
  switch(action.type) {
    case FETCH_BEER_LIST:
    case FETCH_BEER_LIST_FAILURE:
    case FETCH_BEER_LIST_SUCCESS:
      return state
    default:
      return state

  }
}
const rootReducer = combineReducers({beers, routing: routerReducer})
export default rootReducer
