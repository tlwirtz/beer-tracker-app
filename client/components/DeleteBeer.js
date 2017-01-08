import React from 'react'
import { Link } from 'react-router'
import classNames from 'classnames'

class DeleteBeer extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.deleteBeerReq(this.props.beer)
  }

  render() {
    return (
      <div>
        <Link to={'/beers'} onClick={this.handleClick} key={this.props.beer}>Delete Beer</Link>
      </div>
    )
  }
}

export default DeleteBeer
