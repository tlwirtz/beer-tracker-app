import NavBar from './NavBar'

import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const main = classNames('main')
    const container = classNames('container')
    return (
      <div>
        <NavBar />
        <div className={main}>
          {React.cloneElement(this.props.children, this.props)}
        </div>
      </div>
    )
  }
}

export default Main
