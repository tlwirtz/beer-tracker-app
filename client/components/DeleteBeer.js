import React from 'react'
import classNames from 'classnames'

class DeleteBeer extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.deleteBeerReq(this.props.beer._id)
  }

  render() {
    return (
      <div>
        <a onClick={this.handleClick} key={this.props.beer._id}>Delete Me</a>
      </div>
    )
  }
}

export default DeleteBeer
