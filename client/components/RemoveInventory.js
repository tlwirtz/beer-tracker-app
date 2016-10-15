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
    const classes = classNames({
      'level-item': true
    })

    const iconItem = classNames({
      'icon': true
    })

    const plusSymbol = classNames({
      'fa-minus': true,
      'fa': true,
      'beerTracker-red': true
    })

    return (
      <div className={classes}>
        <a className={iconItem} onClick={this.handleClick} key={this.props.beer._id}>
          <i className={plusSymbol}></i>
        </a>
        {/* <button key={this.props.beer._id}
          onClick={this.handleClick}
          className={btnClasses}>
            +
          </button> */}
      </div>
    )
  }
}
 export default RemoveInventory
