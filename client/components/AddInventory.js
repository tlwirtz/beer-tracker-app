import React from 'react'
import classNames from 'classnames'

class AddInventory extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.sendInventoryTrans(this.props.beer, 1)
  }

  render() {

    const symbol = classNames('beerTracker-green')
    return (
      <div>
        <a href='#' onClick={this.handleClick} key={this.props.beer._id}>
          <h2 className={symbol}>+</h2>
        </a>
      </div>
    )
  }
}
 export default AddInventory
