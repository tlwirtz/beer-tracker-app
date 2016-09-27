import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

const App = (props) => <h1>Hello World</h1>
render(<App></App>, document.getElementById('root'))
