import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import store, { history } from './store'
import App from './components/App'


const Hello = React.createClass({
  render() {
    return (
      <div>
        <h1>HELLO WORLD</h1>
      </div>
    )
  }
});


const router = (
  <Provider store={store}>
    <Router history={history}>
    <Route path="/" component={App}>
      <IndexRoute component={Hello}></IndexRoute>
    </Route>
    </Router>
  </Provider>
)
render(router, document.getElementById('root'))
