import React from 'react';
import classNames from 'classnames'
import { Link } from 'react-router'

class NavBar extends React.Component {
  constructor(props){
    super(props)
  }

  render() {

    const header = classNames('flex-header')
    const headerItem = classNames('flex-header-item')
    const headerRight = classNames('flex-header-item-right')
    return (
      <header>
        <div className={header}>
          <div className={headerItem}>
            <h1>Nav Bar</h1>
          </div>
          <div className={headerRight}>
          <Link to={'/beers'}><h3>Beers</h3></Link>
          </div>
          <div className={headerRight}>
          <Link to={'/devices'}><h3>Devices</h3></Link>
          </div>
        </div>
      </header>
    )
  }
}

export default NavBar
