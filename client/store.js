import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index';

const defaultState = {
    beers: {
      fetchingBeers: false,
      items: [
      {
        name: 'beer one',
        id: 120921391098123
      },
      {
        name: 'beer two',
        id: 19083029840
      }
    ]
  }
}

const middleware = applyMiddleware(thunkMiddleware)
const enhancers = compose (
  window.devToolsExtension ? window.devToolsExtension() : (f) => f,
  middleware
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
