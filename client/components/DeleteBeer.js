import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

class DeleteBeer extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.state = {
      isHovering: false
    }
  }

  handleHover() {
    const { isHovering } = this.state
    this.setState({ isHovering: !isHovering })
  }

  handleClick() {
    this.props.deleteBeerReq(this.props.beer)
  }

  render() {
    const linkClass = classNames({
      'delete-text-dark': this.state.isHovering,
      'beerTracker-red': !this.state.isHovering,
    })
    return (
      <div>
        <button
          className="delete-button"
          onMouseEnter={this.handleHover}
          onMouseLeave={this.handleHover}
          >
          <Link
            className={linkClass}
            to={'/beers'}
            onClick={this.handleClick}
            key={this.props.beer}>Delete Beer</Link>
        </button>
      </div>
    )
  }
}

export default DeleteBeer
