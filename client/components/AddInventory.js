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
    const classes = classNames('level-item', 'subtitle', 'is-2')
    const plusSymbol = classNames('beerTracker-green')
    return (
      <div className={classes}>
        <a onClick={this.handleClick} key={this.props.beer._id}>
          <h2 className={plusSymbol}>+</h2>
        </a>
      </div>
    )
  }
}
 export default AddInventory
