'use strict';

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import counter from './reducers'
import App from './components/App'

const store = createStore(counter)
const rootEl = document.getElementById('app')

function render() {
  ReactDOM.render(
    <App />, rootEl
  )
}

render()
