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
      'level-item': true,
      'subtitle': true,
      'is-2': true,
      'has-centered-text': true
    })

    const minusSymbol = classNames({
      'beerTracker-red': true,
    })

    return (
      <div className={classes}>
        <a onClick={this.handleClick} key={this.props.beer._id}>
          <h2 className={minusSymbol}>-</h2>
        </a>
      </div>
    )
  }
}
 export default RemoveInventory
