import React from 'react'
import classNames from 'classnames'

class RemoveInventory extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.sendInventoryTrans(this.props.beer, -1)
  }

  render() {
    const minusSymbol = classNames('beerTracker-red')
    return (
      <div>
        <a href='#' onClick={this.handleClick} key={this.props.beer._id}>
          <h2 className={minusSymbol}>-</h2>
        </a>
      </div>
    )
  }
}
 export default RemoveInventory
