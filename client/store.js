import { createStore, compose } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'

import rootReducer from './reducers/index';

const defaultState = {
  beers: [
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

const enhancers = compose (
  window.devToolsExtension ? window.devToolsExtension() : (f) => f
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
