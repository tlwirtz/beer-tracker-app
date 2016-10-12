import React from 'react'
import classNames from 'classnames'
import Inventory from './Inventory'
import UpdateButton from './UpdateButton'
import AddInventory from './AddInventory'
import RemoveInventory from './RemoveInventory'

class BeerSingle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovering: false
    }
    this.beerClick = this.beerClick.bind(this)
    this.onMouseLeaveHandle = this.onMouseLeaveHandle.bind(this)
    this.onMouseEnterHandle = this.onMouseEnterHandle.bind(this)
    this.calculateInventory = this.calculateInventory.bind(this)
  }
  beerClick() {
    this.props.selectBeer(this.props.beer._id)
  }
  onMouseLeaveHandle() {
    this.setState({hovering: false})
  }
  onMouseEnterHandle() {
    this.setState({hovering: true})
  }
  calculateInventory() {
    if (this.props.beer.transactions.length === 0 ) return 0
    return this.props.beer.transactions
      .map(((trans) => trans.type === 'adjust-up' ? trans.qty : -(trans.qty)))
      .reduce((a, b) => a + b, 0)
  }
  render() {
    const { beer, beers } = this.props
    let classes = classNames({
      'beerSingle': true,
      'hovering': this.state.hovering,
      'beerSingleSelected': beers.selectedBeer === beer._id,
      'beer-flex': true
    })

    let title = classNames({
      'beerSingle-title':true
    })

    return (
      <div>
        <div onClick={this.beerClick}
            onMouseEnter={this.onMouseEnterHandle}
            onMouseLeave={this.onMouseLeaveHandle}
            className={classes}
            >
          <h2 className={title}>{this.props.beer.name}</h2>
          <p className={title}>{this.props.beer._id}</p>
          <RemoveInventory beer={this.props.beer} {...this.props} />
          <Inventory qty={this.calculateInventory()} />
          <AddInventory beer={this.props.beer} {...this.props} />
        </div>
      </div>
    )
  }
}

export default BeerSingle
