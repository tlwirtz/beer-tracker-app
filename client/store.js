import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index';
import Immutable from 'immutable'

const defaultState = {
    beers: Immutable.Map({
      fetchingBeers: false,
      items: []
  })
}

const middleware = applyMiddleware(thunkMiddleware)
const enhancers = compose (
  middleware,
  window.devToolsExtension ? window.devToolsExtension() : (f) => f,
)

const store = createStore(rootReducer, defaultState, enhancers)
export const history = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').defualt;
    store.replaceReducer('')
  })
}

export default store
