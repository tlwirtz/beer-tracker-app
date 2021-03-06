import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'
import App from './components/App'
import ManageBeers from './components/ManageBeers'
import ManageDevices from './components/ManageDevices'
import { fetchBeers } from './actions/actionCreators'
import BeerDetailContainer from './components/BeerDetailContainer'

//TODO -- this component isn't ready yet
import BeerStatsContainer from './components/BeerStatsContainer'

store.dispatch(fetchBeers())

const router = (
  <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={ManageBeers}></IndexRoute>
      <Route path="beers" component={ManageBeers}></Route>
      <Route path="/beers/:beerId" component={BeerDetailContainer}></Route>
      {/* <Route path="devices" component={ManageDevices}></Route> */}
    </Route>
    </Router>
  </Provider>
)
render(router, document.getElementById('root'))
