import { createStore, compose, applyMiddleware } from 'redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { browserHistory } from 'react-router'
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers/index';

//TODO -- JUST FOR TESTING
import { fetchBeers } from './actions/actionCreators'

const defaultState = {
    beers: {
      fetchingBeers: false,
      items: [
      {
        name: 'beer one',
        _id: 120921391098123
      },
      {
        name: 'beer two',
        _id: 19083029840
      }
    ]
  }
}

const middleware = applyMiddleware(thunkMiddleware)
const enhancers = compose (
  middleware,
  window.devToolsExtension ? window.devToolsExtension() : (f) => f,
)

const store = createStore(rootReducer, defaultState, enhancers)

store.dispatch(fetchBeers()).then(() =>
  console.log('store', store.getState())
)

export const history = syncHistoryWithStore(browserHistory, store)

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').defualt;
    store.replaceReducer('')
  })
}

export default store
