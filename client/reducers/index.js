import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import Immutable from 'immutable'

import { SELECT_BEER, FETCH_BEER_LIST, FETCH_BEER_LIST_FAILURE, FETCH_BEER_LIST_SUCCESS,
          ADD_INVENTORY_TRANSACTION, ADD_INVENTORY_TRANSACTION_SUCCESS, ADD_INVENTORY_TRANSACTION_FAILURE,
          ADD_BEER, ADD_BEER_SUCCESS, ADD_BEER_FAILURE,
          DELETE_BEER, DELETE_BEER_FAILURE, DELETE_BEER_SUCCESS} from '../actions/actionCreators'

const updateBeerList = (state, beers) => {
  return state.set('items', beers).set('fetchingBeers', false)
}

// TODO -- there has to be a better way to do this with Immutable
const updateTransaction = (state, action) => {
  const stateJS = state.toJS()
  const idx = stateJS.items.map((item) => item._id).indexOf(action.beerId)
  stateJS.items[idx].transactions = action.transactions
  return Immutable.fromJS(stateJS)
}

const addBeer = (state, beer) => {
  const stateJS = state.toJS()
  stateJS.items.push(beer)
  return Immutable.fromJS(stateJS)
}

const removeBeer = (state, beerId) => {
  const stateJS = state.toJS()
  const idx = stateJS.items.map((item) => item._id).indexOf(beerId)
  stateJS.items.splice(idx, 1)
  return Immutable.fromJS(stateJS)
}

const beers = (state = Immutable.Map({}), action) => {
  switch(action.type) {
    case ADD_BEER_SUCCESS:
      return addBeer(state, action.beer )
    case ADD_BEER:
      return state; //TODO -- update me
    case ADD_BEER_FAILURE:
      return state; //TODO -- update me
    case FETCH_BEER_LIST:
      return state.set('fetchingBeers', true)
    case FETCH_BEER_LIST_FAILURE:
      return state //TODO -- udpate me
    case FETCH_BEER_LIST_SUCCESS:
      return updateBeerList(state, action.beers)
    case SELECT_BEER:
      return state.set('selectedBeer', action.beer)
    case ADD_INVENTORY_TRANSACTION:
      return state.set('updatingInventory', true)
    case ADD_INVENTORY_TRANSACTION_SUCCESS:
      return updateTransaction(state, action)
    case ADD_INVENTORY_TRANSACTION_FAILURE:
      return state.set('updatingInventory', 'false')
    case DELETE_BEER:
      return state //TODO -- update me
    case DELETE_BEER_SUCCESS:
      return removeBeer(state, action.beerId)
    case DELETE_BEER_FAILURE:
      return state //TODO -- update me
    default:
      return state
  }
}

const rootReducer = combineReducers({beers, routing: routerReducer})
export default rootReducer
