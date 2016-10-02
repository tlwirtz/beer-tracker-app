import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Immutable from 'immutable'

import { SELECT_BEER, FETCH_BEER_LIST, FETCH_BEER_LIST_FAILURE, FETCH_BEER_LIST_SUCCESS } from '../actions/actionCreators'

const updateBeerList = (state, beers) => {
  return state.set('items', beers).set('fetchingBeers', false)
}

const beers = (state = Immutable.Map({}), action) => {
  switch(action.type) {
    case FETCH_BEER_LIST:
      return state.set('fetchingBeers', true)
    case FETCH_BEER_LIST_FAILURE:
      return state
    case FETCH_BEER_LIST_SUCCESS:
      return updateBeerList(state, action.beers)
    case SELECT_BEER:
      return state.set('selectedBeer', action.beer)
    default:
      return state
  }
}
const rootReducer = combineReducers({beers, routing: routerReducer})
export default rootReducer
