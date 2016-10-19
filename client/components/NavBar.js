import React from 'react';
import classNames from 'classnames'
import { Link } from 'react-router'

class NavBar extends React.Component {
  constructor(props){
    super(props)
  }

  render() {
    const nav = classNames('nav', 'has-shadow', 'beerTrackerNav')
    const navLeft = classNames('nav-left')
    const navRight = classNames('nav-right')
    const navItem = classNames('is-tab', 'nav-item')
    const navLogo = classNames('nav-item', 'is-brand', 'title', 'is-2')
    const navLinks = classNames('nav-item')

    //TODO -- consider changing this to a hero header / hero body / hero footer
    return(
      <nav className={nav}>
        <div className={navLeft}>
          <h1 className={navLogo}><Link to={'/'}>Beer Tracker</Link></h1>
        </div>
        <div className={navRight}>
          <Link className={navLinks} to={'/beers'}>Beers</Link>
          <Link className={navLinks} to={'/devices'}>Devices</Link>
        </div>
      </nav>
    )
  }
}

export default NavBar
