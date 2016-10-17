import React from 'react';
import classNames from 'classnames'
import { Link } from 'react-router'

class NavBar extends React.Component {
  constructor(props){
    super(props)
  }

  render() {

    const navLeft = classNames({
      'nav-left':true,
    })

    const nav = classNames({
      'nav':true,
      'has-shadow': true,
      'beerTrackerNav': true
    })

    const navRight = classNames({
      'nav-right':true
    })

    const navItem = classNames({
      'is-tab': true,
      'nav-item': true,
    })

    const navLogo = classNames({
      'nav-item': true,
      'is-brand': true,
      'title': true,
      'is-2': true
    })

    const whiteText = classNames({
      'whiteText': true
    })

    return(
      <nav className={nav}>
        <div className={navLeft}>
          <h1 className={navLogo}>Beer Tracker</h1>
        </div>
        <div className={navRight}>
        {/* THIS SHOULD BE LINKS TO OTHER ROUTES */}
          <h2 className={navItem}><Link className={whiteText} to={'/beers'}> Manage Beers</Link></h2>
          <h2 className={navItem}><Link className={whiteText} to={'/devices'}>Manage Devices</Link></h2>
        </div>
      </nav>
    )
  }
}

export default NavBar
