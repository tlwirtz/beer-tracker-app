import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'
import App from './components/App'

// TODO - GET RID OF THIS NEXT
const BeerList = React.createClass({
  render() {
    return (
      <div>
        {this.props.beers.map((beer) => <p key={beer.id}>{beer.name} -- {beer.id}</p>)}
      </div>
    )
  }
});


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
