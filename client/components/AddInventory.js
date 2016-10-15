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
    const classes = classNames({
      'level-item': true
    })

    const iconItem = classNames({
      'icon': true,
      'has-text-centered': true
    })

    const plusSymbol = classNames({
      'fa-plus': true,
      'fa': true,
      'beerTracker-green': true
    })

    return (
      <div className={classes}>
        <a className={iconItem} onClick={this.handleClick} key={this.props.beer._id}>
          <i className={plusSymbol}></i>
        </a>
      </div>
    )
  }
}
 export default AddInventory
