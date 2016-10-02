import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'
import App from './components/App'
import { fetchBeers } from './actions/actionCreators'
import BeerList from './components/BeerList'

store.dispatch(fetchBeers())

const router = (
  <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={BeerList}></IndexRoute>
    </Route>
    </Router>
  </Provider>
)
render(router, document.getElementById('root'))
