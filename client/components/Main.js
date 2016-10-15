import NavBar from './NavBar'

import React from 'react';
import { Link } from 'react-router';
import classNames from 'classnames';

class Main extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classes = classNames({
      main: 'true'
    })
    return (
      <div>
        <NavBar />
          <div className={classes}>
            {React.cloneElement(this.props.children, this.props)}
          </div>
      </div>
    )
  }
}

export default Main
