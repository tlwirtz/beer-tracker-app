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
    let classes = classNames({
      'beerSingle-button': true
    })

    return (
      <div className={classes}>
        <button key={this.props.beer._id}
          onClick={this.handleClick}>
            +
          </button>
      </div>
    )
  }
}
 export default AddInventory
