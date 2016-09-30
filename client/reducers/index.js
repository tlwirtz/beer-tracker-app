import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const beers = (state = {}, action) => state
const rootReducer = combineReducers({beers, routing: routerReducer})
export default rootReducer
